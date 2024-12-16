import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: ' SHMS | Add device',
    path: 'add/device',
    loadComponent: () =>
      import('./component/add-device/add-device.component').then(
        (c) => c.AddDeviceComponent,
      ),
  },
];
