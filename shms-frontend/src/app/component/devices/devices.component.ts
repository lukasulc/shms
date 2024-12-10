import { Component } from '@angular/core';
import { DeviceService } from '../../service/device.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-devices',
  imports: [],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.scss',
})
export class DevicesComponent {
  config: DevicesConfig[] = [
    {
      deviceType: 'light',
      data: undefined,
    },
    {
      deviceType: 'thermostat',
      data: undefined,
    },
    {
      deviceType: 'camera',
      data: undefined,
    },
    {
      deviceType: 'blinds',
      data: undefined,
    },
  ];

  constructor(public service: DeviceService) {
    for (const element of this.config) {
      service.getAll(element.deviceType).subscribe((data) => {
        element.data = data;
      });
    }
  }
}

type DevicesConfig = {
  deviceType: string;
  data: any | undefined;
};
