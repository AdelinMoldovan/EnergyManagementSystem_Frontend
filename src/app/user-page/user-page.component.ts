import { Component } from '@angular/core';
import { Device } from '../models/device.model';
import { DeviceService } from '../services/device.service';
import { DeviceResponse } from '../services/device.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  constructor(private deviceService: DeviceService, private authService: AuthService){

  }

  devices! : Device[];
  user: any = { userId: '' }; // Assuming userId is a string

  ngOnInit() {
    this.getDeviceList();
    //console.log(this.users);
  }

 /* getDeviceList(){

    this.deviceService.getDevices().subscribe((res:any)=>{
      console.log(res);
      this.devices = res;
    });
  }*/

  getDeviceList() {
    const userId = this.authService.getCurrentUserId(); // Adjust this based on your auth service
    console.log(userId);
    if (userId) {
      this.deviceService.getDevices().subscribe(
        (res: any) => {
          console.log(res);
          // Filter devices based on userId
          this.devices = res.filter((device: Device) => device.user.userId === userId);
        },
        (error: any) => {
          console.error('Error fetching devices:', error);
        }
      );
    }
  }
}