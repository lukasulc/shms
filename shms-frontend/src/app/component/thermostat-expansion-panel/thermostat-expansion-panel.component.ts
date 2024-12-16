import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Thermostat } from '../../model/thremostat';
import { DeviceExpansionPanelComponent } from '../device-expansion-panel/device-expansion-panel.component';

@Component({
  selector: 'app-thermostat-expansion-panel',
  imports: [
    FormsModule,
    MatExpansionModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './thermostat-expansion-panel.component.html',
  styleUrl: './thermostat-expansion-panel.component.scss',
})
export class ThermostatExpansionPanelComponent extends DeviceExpansionPanelComponent<Thermostat> {
  override creationCondition(type: string) {
    return type === 'thermostat';
  }
}
