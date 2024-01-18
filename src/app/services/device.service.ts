import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { identifierName } from '@angular/compiler';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

export interface DeviceResponse{
  device: any;
  "id": number
  "address": string
  "description": string
  "maxHourlyEnergyConsumtion": string
  "name": string
  "user": { userId: number };
}

export interface DeviceEditRespose{
  status: Number,
  device: DeviceResponse
}
export interface UserResponseType{
  status: Number,
  users: DeviceResponse[]
}

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private devices: Device[] = [];

  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  saveDevice(inputData: object): Observable<any> {
    const headers = this.authService.createHeaders();
    return this.httpClient.post('http://localhost:8081/api/devices', inputData, { headers });
  }

  getDevices(): Observable<any> {
    const headers = this.authService.createHeaders();
    return this.httpClient.get('http://localhost:8081/api/devices', { headers });
  }

  getDevice(deviceId: number): Observable<DeviceResponse> {
    const headers = this.authService.createHeaders();
    return this.httpClient.get<DeviceResponse>(`http://localhost:8081/api/devices/${deviceId}`, { headers });
  }

  updateDevice(inputData: object, deviceId: Number): Observable<any> {
    const headers = this.authService.createHeaders();
    return this.httpClient.put(`http://localhost:8081/api/devices/${deviceId}`, inputData, { headers });
  }

  destroyDevice(deviceId: Number): Observable<any> {
    const headers = this.authService.createHeaders();
    return this.httpClient.delete(`http://localhost:8081/api/devices/${deviceId}`, { headers });
  }

  mapDeviceToUser(deviceId: number, userId: number): Observable<void> {
    const headers = this.authService.createHeaders();
    const mappingData = { deviceId, userId };
    return this.httpClient.post<void>('http://localhost:8081/api/mappings/map', mappingData, { headers });
  }

  unmapDevice(deviceId: number): Observable<void> {
    const headers = this.authService.createHeaders();
    const mappingData = { deviceId };
    return this.httpClient.delete<void>('http://localhost:8081/api/mappings/unmap', { headers, body: mappingData });
  }
}