import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from '../services/device.service';
@Component({
  selector: 'app-devices-edit',
  templateUrl: './devices-edit.component.html',
  styleUrls: ['./devices-edit.component.css']
})
export class DevicesEditComponent {

  device: any = { 
    address: '',
    description: '', 
    maxHourlyEnergyConsumtion: '',
    name: '',
   };
   
  deviceId!: any;
  errors: any = []

  constructor(private route:  ActivatedRoute, private deviceService: DeviceService) {}
  ngOnInit(){

    this.deviceId = this.route.snapshot.paramMap.get('id');
    //alert();

   
    this.deviceService.getDevice(this.deviceId).subscribe((res) => {
      console.log(res);
      this.device.address = res.address;
      this.device.description = res.description;
      this.device.maxHourlyEnergyConsumtion = res.maxHourlyEnergyConsumtion; // Corrected property name
      this.device.name = res.name;
  });
  
}

  updateDevice( ){
    var inputData = {
      address: this.device.address,
      description: this.device.description,
      maxHourlyEnergyConsumtion: this.device.maxHourlyEnergyConsumtion,
      name: this.device.name,
    }

    this.deviceService.updateDevice(inputData, this.deviceId).subscribe({
      next: (res:any) =>{
        console.log(res);
      },
      error: (err:any) =>{
        this.errors = err.error.errors;
      }
    });
  }
}
