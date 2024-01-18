import { Component } from '@angular/core';
import { Device } from '../models/device.model';
import { DeviceService } from '../services/device.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-devices-add',
  templateUrl: './devices-add.component.html',
  styleUrls: ['./devices-add.component.css']
})
export class DevicesAddComponent {
  address: string = '';
  description: string = '';
  maxHourlyEnergyConsumtion: string = '';
  name: string = '';

  errors: any = []

  constructor(private deviceService: DeviceService, private router: Router) {}

  saveDevice(){
    var inputData = {
      address: this.address,
      description: this.description,
      maxHourlyEnergyConsumtion: this.maxHourlyEnergyConsumtion,
      name: this.name
    }
   
    this.deviceService.saveDevice(inputData).subscribe({
      next:(res: any) => {
          console.log(res, 'response');
          this.router.navigate(['/devices-page']);
          //alert(res.message);
          console.log(inputData);
          this.address = '';
          this.description = '';
          this.maxHourlyEnergyConsumtion = '';
          this.name = '';
      },
      error: (err: any) =>{
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors');
    }
  });
}
}
