import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Type } from '@angular/core';
import { BlindsExpansionPanelComponent } from '../component/blinds-expansion-panel/blinds-expansion-panel.component';
import { CameraExpansionPanelComponent } from '../component/camera-expansion-panel/camera-expansion-panel.component';
import { LightExpansionPanelComponent } from '../component/light-expansion-panel/light-expansion-panel.component';
import { ThermostatExpansionPanelComponent } from '../component/thermostat-expansion-panel/thermostat-expansion-panel.component';
import { Blinds } from '../model/blinds';
import { Camera } from '../model/camera';
import { Device } from '../model/device';
import { Light } from '../model/light';
import { Thermostat } from '../model/thremostat';
import { ApiService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class DeviceService<T extends Device> {
  baseUrl = 'http://localhost:8080';
  apiService = inject(ApiService);

  config: DevicesConfig[] = [
    {
      deviceType: 'light',
      component: LightExpansionPanelComponent,
    },
    {
      deviceType: 'blinds',
      component: BlindsExpansionPanelComponent,
    },
    {
      deviceType: 'thermostat',
      component: ThermostatExpansionPanelComponent,
    },
    {
      deviceType: 'camera',
      component: CameraExpansionPanelComponent,
    },
  ];

  constructor() {}

  get deviceConfig() {
    return this.config;
  }

  public getAll(deviceType: string) {
    return this.apiService.getAll<T>(deviceType);
  }

  public getById(deviceType: string, id: number) {
    return this.apiService.getById<T>(deviceType, id);
  }

  public add(deviceType: string, data: T) {
    return this.apiService.add<T>(deviceType, data);
  }

  public update(deviceType: string, data: T) {
    return this.apiService.update<T>(deviceType, data);
  }

  public patch(deviceType: string, data: T) {
    return this.apiService.patch<T>(deviceType, data);
  }

  public delete(deviceType: string, id: number) {
    return this.apiService.delete<T>(deviceType, id);
  }
}

export type DevicesConfig<CT = any> = {
  deviceType: string;
  component: Type<CT>;
};

type DeviceMapping = {
  light: Light;
  blinds: Blinds;
  thermostat: Thermostat;
  camera: Camera;
};
