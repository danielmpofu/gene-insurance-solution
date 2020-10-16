import {Component, OnInit} from '@angular/core';
import {NetworkService} from '../../shared/services/network.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {AlertifyService} from '../../shared/services/alertify.service';
import {VehicleModel} from '../../shared/models/VehicleModel';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css']
})
export class ViewVehicleComponent implements OnInit {

  vehicle: VehicleModel =new class implements VehicleModel {
    brand: string;
    color: string;
    id: string;
    model: string;
    monthlyAmount: number;
    ownerId: string;
    ownerNationalId: string;
    picUrl: string;
    regNo: string;
    registrationDate: string;
  };
  editMode: boolean = false;

  constructor(private networkService: NetworkService,
              private router: Router,
              private alertifyService: AlertifyService,
              private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient) {
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(
      p => {
        let vId = p['id'];

        this.httpClient.get(this.networkService.baseUrl + 'api/vehicles/' + vId).subscribe(
          response => {
            this.vehicle.id = response['id'];
            this.vehicle.ownerId = response['ownerId'];
            this.vehicle.picUrl = response['picUrl'];
            this.vehicle.brand = response['brand'];
            this.vehicle.model = response['model'];
            this.vehicle.regNo = response['regNo'];
            this.vehicle.color = response['color'];
            this.vehicle.ownerNationalId = response['ownerNationalId'];
            this.vehicle.monthlyAmount = response['monthlyAmount'];

          }, error => {

            console.log(JSON.stringify(error));
          }
        );
      }
    );
  }

  toggleEdit() {
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.alertifyService.warningMessage('Editing enabled');
    } else {
      this.alertifyService.errorMessage('Editing disabled');
    }
  }

  deleteVehicle() {
    let url = this.networkService.baseUrl + 'api/vehicles/delete/' + this.vehicle.id;
    this.httpClient.get(url).subscribe(
      e => {
        console.log(e);
      }, error => {
        console.log(error);
      }
    );
    this.alertifyService.errorMessage('Vehicle deleted');
    this.reload();
  }

  saveVehicle(form  :  NgForm  ) {
    let vehicle = form.value;
    vehicle.ownerId = +localStorage.getItem('userId');
    this
      .editVehicle(vehicle);
  }

  editVehicle(vehicle) {
    let url = this.networkService.baseUrl + 'api/vehicles/update/' + this.vehicle.id;
    vehicle.id = this.vehicle.id;
    this.httpClient.post(url, vehicle).subscribe(
      response => {

        this.alertifyService.warningMessage('Changes saved');
        return response;
      }, error => {
        this.alertifyService.errorMessage('Changes not saved');
        console.log(error);
        throw  error;
      }
    );

    this.reload();
  }

  reload() {
    this.router.navigate(['/']);
  }

}
