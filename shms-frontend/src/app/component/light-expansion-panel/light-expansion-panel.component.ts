import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Light } from '../../model/light';
import { DeviceExpansionPanelComponent } from '../device-expansion-panel/device-expansion-panel.component';

@Component({
  selector: 'app-light-expansion-panel',
  imports: [
    FormsModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './light-expansion-panel.component.html',
  styleUrl: './light-expansion-panel.component.scss',
})
export class LightExpansionPanelComponent extends DeviceExpansionPanelComponent<Light> {
  override creationCondition(type: string) {
    return type === 'light';
  }
}
