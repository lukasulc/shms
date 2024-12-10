import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Observable } from 'rxjs';
import { Thermostat } from '../../model/thremostat';

@Component({
  selector: 'app-thermostat-expansion-panel',
  imports: [
    FormsModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTooltipModule,
    MatIconModule,
  ],
  templateUrl: './thermostat-expansion-panel.component.html',
  styleUrl: './thermostat-expansion-panel.component.scss',
})
export class ThermostatExpansionPanelComponent implements OnInit {
  @Input()
  dataStream: Observable<Thermostat[]> | undefined;
  data: Thermostat[] | undefined;

  ngOnInit(): void {
    this.dataStream?.subscribe((data) => (this.data = data));
  }
}
