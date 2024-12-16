import { NgComponentOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DeviceService } from '../../service/device.service';
import { AddDeviceComponent } from '../add-device/add-device.component';
import { Device } from '../../model/device';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-devices',
  imports: [NgComponentOutlet, MatIconModule, MatButtonModule, MatDialogModule],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.scss',
})
export class DevicesComponent {
  service = inject(DeviceService);
  readonly dialog = inject(MatDialog);
  readonly newData = new Subject<NewItemDTO>();

  constructor() {}

  openDialog(type: string) {
    const dialogRef = this.dialog.open<AddDeviceComponent, undefined, string>(
      AddDeviceComponent,
    );

    dialogRef.beforeClosed().subscribe((deviceName) => {
      console.log(deviceName);

      if (deviceName !== undefined) {
        this.newData.next({ deviceType: type, deviceName: deviceName });
      }
    });
  }
}

export type NewItemDTO = {
  deviceType: string;
  deviceName: string;
};
