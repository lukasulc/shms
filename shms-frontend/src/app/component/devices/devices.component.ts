import { Component } from '@angular/core';
import { DeviceService } from '../../service/device.service';
import { BlindsExpansionPanelComponent } from '../blinds-expansion-panel/blinds-expansion-panel.component';
import { LightExpansionPanelComponent } from '../light-expansion-panel/light-expansion-panel.component';
import { CameraExpansionPanelComponent } from '../camera-expansion-panel/camera-expansion-panel.component';
import { ThermostatExpansionPanelComponent } from '../thermostat-expansion-panel/thermostat-expansion-panel.component';

@Component({
  selector: 'app-devices',
  imports: [
    BlindsExpansionPanelComponent,
    LightExpansionPanelComponent,
    CameraExpansionPanelComponent,
    ThermostatExpansionPanelComponent,
  ],
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

  constructor(public service: DeviceService) {}
}

type DevicesConfig = {
  deviceType: string;
  data: any | undefined;
};
