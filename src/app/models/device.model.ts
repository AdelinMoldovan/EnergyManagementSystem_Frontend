export class Device {
    deviceId: number;
    address: string;
    description: string;
    maxHourlyEnergyConsumtion: string;
    name: string;
    user: { userId: number };
  
    constructor() {
      this.deviceId = 0;
      this.address = '';
      this.description = '';
      this.maxHourlyEnergyConsumtion = '';
      this.name = '';
      this.user = { userId: 1 };
    }
  }
 
  