import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
export interface DeviceResponse{
  "id": number
  "address": string
  "description": string
  "maxHourlyEnergyConsumtion": string
  "name": string
  "user": string
}

export interface DeviceEditRespose{
  status: Number,
  device: DeviceResponse

}
@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private devices: Device[] = [];

  constructor( private httpClient: HttpClient) {}

  saveDevice(inputData: object){

    //console.log(inputData);
    return this.httpClient.post('http://localhost:8081/api/devices', inputData);
  }

  getDevices(){
    return this.httpClient.get('http://localhost:8081/api/devices');

  } 
  
  getDevice(userId: bigint){
    return this.httpClient.get<DeviceResponse>('http://localhost:8081/api/devices/${deviceId}');
  }
}
