import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Blinds } from '../../model/blinds';
import { DeviceExpansionPanelComponent } from '../device-expansion-panel/device-expansion-panel.component';

@Component({
  selector: 'app-blinds-expansion-panel',
  imports: [
    FormsModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './blinds-expansion-panel.component.html',
  styleUrl: './blinds-expansion-panel.component.scss',
})
export class BlindsExpansionPanelComponent extends DeviceExpansionPanelComponent<Blinds> {
  override creationCondition(type: string) {
    return type === 'blinds';
  }
}
