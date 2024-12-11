import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Observable } from 'rxjs';
import { Thermostat } from '../../model/thremostat';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-thermostat-expansion-panel',
  imports: [
    FormsModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSelectModule,
    MatSliderModule,
  ],
  templateUrl: './thermostat-expansion-panel.component.html',
  styleUrl: './thermostat-expansion-panel.component.scss',
})
export class ThermostatExpansionPanelComponent implements OnInit {
  @Input()
  dataStream: Observable<Thermostat[]> | undefined;
  data: Thermostat[] | undefined;

  @Output()
  itemChangedEvent = new EventEmitter<Thermostat>();

  ngOnInit(): void {
    this.dataStream?.subscribe((data) => (this.data = data));
  }

  // (change) event is called only when the user is done adjusting the slider
  itemChanged(item: Thermostat) {
    this.itemChangedEvent.emit(item);
  }
}
