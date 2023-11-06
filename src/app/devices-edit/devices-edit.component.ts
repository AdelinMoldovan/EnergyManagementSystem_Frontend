import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from '../services/device.service';
@Component({
  selector: 'app-devices-edit',
  templateUrl: './devices-edit.component.html',
  styleUrls: ['./devices-edit.component.css']
})
export class DevicesEditComponent {

  device!: any;
  deviceId!: any;
  errors: any = []

  constructor(private route:  ActivatedRoute, private deviceService: DeviceService) {}
  ngOnInit(){

    this.deviceId = this.route.snapshot.paramMap.get('id');
    //alert();

    this.deviceService.getDevice(this.deviceId).subscribe((res )=>{
      console.log(res)
      //this.user = res.user
    });
  }

  updateDevice( ){

  }
}
