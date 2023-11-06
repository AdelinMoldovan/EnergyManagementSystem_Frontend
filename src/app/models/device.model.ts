export class Device {
    deviceId: number;
    address: string;
    description: string;
    maxHourlyEnergyConsumtion: string;
    name: string;
    userId: string;
  
    constructor() {
      this.deviceId = 0;
      this.address = '';
      this.description = '';
      this.maxHourlyEnergyConsumtion = '';
      this.name = '';
      this.userId = '';
    }
  }
  