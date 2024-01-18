import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { Device } from '../models/device.model';
import { UserService } from '../services/user.service';
import { DeviceService } from '../services/device.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceResponse } from '../services/device.service';

@Component({
  selector: 'app-un-mapping-devices',
  templateUrl: './un-mapping-devices.component.html',
  styleUrls: ['./un-mapping-devices.component.css']
})
export class UnMappingDevicesComponent {
  //device: Device = new Device();
  user: any = { userId: '' }; // Assuming userId is a string

  device: any = {
    deviceId: '', // Set deviceId to an empty string or null
    address: '',
    description: '',
    maxHourlyEnergyConsumtion: '',
    name: '',
  };

  errors: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deviceService: DeviceService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const deviceId = this.route.snapshot.paramMap.get('id');
    if (deviceId) {
      this.deviceService.getDevice(+deviceId).subscribe(
        (deviceResponse: DeviceResponse) => {
          // Convert DeviceResponse to Device here
          this.device = {
            deviceId: '',
            address: deviceResponse.address,
            description: deviceResponse.description,
            maxHourlyEnergyConsumtion: deviceResponse.maxHourlyEnergyConsumtion,
            name: deviceResponse.name,
            user: { userId: deviceResponse.user.userId } // Assign the user property
          };
        },
        (error) => {
          console.error('Error fetching device:', error);
        }
      );
    }
  }
  unmapDevice(): void {
    if (this.device) {
      this.deviceService.unmapDevice(this.device.deviceId).subscribe(
        () => {
          console.log('Device unmapped successfully');
          this.router.navigate(['/devices-page']);
        },
        (error) => {
          console.error('Error unmapping device:', error);
        }
      );
    }
  }
}