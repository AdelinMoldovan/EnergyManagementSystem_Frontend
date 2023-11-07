import { Component } from '@angular/core';
import { Device } from '../models/device.model';
import { DeviceService } from '../services/device.service';
import { DeviceResponse } from '../services/device.service';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
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
}
