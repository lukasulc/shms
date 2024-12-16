import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Device } from '../../model/device';
import { ApiService } from '../../service/data.service';
import { NewItemDTO } from '../devices/devices.component';

@Component({
  selector: 'app-device-expansion-panel',
  imports: [],
  templateUrl: './device-expansion-panel.component.html',
  styleUrl: './device-expansion-panel.component.scss',
})
export class DeviceExpansionPanelComponent<T extends Device>
  implements OnInit, OnDestroy
{
  @Input()
  deviceType: string = 'device';
  @Input()
  newItem: Subject<NewItemDTO> | undefined;
  newItemSubs: Subscription | undefined;

  data: T[] | undefined;

  service = inject(ApiService);
  constructor() {}

  ngOnInit(): void {
    this.service.getAll<T>(this.deviceType).subscribe((res) => {
      this.data = res;
    });

    this.newItemSubs = this.newItem?.subscribe((d) => {
      if (this.creationCondition(d.deviceType)) {
        const newDevice = new Device();
        newDevice.name = d.deviceName;
        this.service.add(d.deviceType, newDevice).subscribe((d) => {
          const item = d as T;
          if (!this.data) {
            this.data = [item];
            return;
          }
          this.data.push(item);
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.newItemSubs?.unsubscribe();
  }

  creationCondition(type: string): boolean {
    return type === 'device';
  }

  // (change) event is called only when the user is done adjusting the slider
  itemChanged(item: T) {
    this.service.update(this.deviceType, item).subscribe();
  }

  itemDelete(id: number) {
    this.service
      .delete<T>(this.deviceType, id)
      .subscribe(
        (item) => (this.data = this.data?.filter((x) => x.id != item.id)),
      );
  }
}
