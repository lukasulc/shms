import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Observable } from 'rxjs';
import { Camera } from '../../model/camera';

@Component({
  selector: 'app-camera-expansion-panel',
  imports: [
    FormsModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTooltipModule,
    MatIconModule,
  ],
  templateUrl: './camera-expansion-panel.component.html',
  styleUrl: './camera-expansion-panel.component.scss',
})
export class CameraExpansionPanelComponent implements OnInit {
  @Input()
  dataStream: Observable<Camera[]> | undefined;
  data: Camera[] | undefined;

  @Output()
  itemChangedEvent = new EventEmitter<Camera>();

  ngOnInit(): void {
    this.dataStream?.subscribe((data) => (this.data = data));
  }

  // (change) event is called only when the user is done adjusting the slider
  itemChanged(item: Camera) {
    this.itemChangedEvent.emit(item);
  }
}
