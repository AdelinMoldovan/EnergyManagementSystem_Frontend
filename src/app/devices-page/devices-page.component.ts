import { Component } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { Device } from '../models/device.model';

@Component({
  selector: 'app-devices-page',
  templateUrl: './devices-page.component.html',
  styleUrls: ['./devices-page.component.css']
})
export class DevicesPageComponent {

  constructor(private deviceService: DeviceService){

  }

  devices! : Device[];

  ngOnInit() {
    this.getDeviceList();
    //console.log(this.users);
  }

  getDeviceList(){

    this.deviceService.getDevices().subscribe((res:any)=>{
      console.log(res);
      this.devices = res;
    });
  }

  deleteDevice(event: any, deviceId: Number){
    if(confirm("Are you sure you want to delete this device ?")){

      event.target.innerText ="Deleting...";
       
      this.deviceService.destroyDevice(deviceId).subscribe((res:any) => {
        this.getDeviceList();
        
      });
    }

  }
}
