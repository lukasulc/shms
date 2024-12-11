import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Observable } from 'rxjs';
import { Light } from '../../model/light';

@Component({
  selector: 'app-light-expansion-panel',
  imports: [
    FormsModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTooltipModule,
    MatIconModule,
  ],
  templateUrl: './light-expansion-panel.component.html',
  styleUrl: './light-expansion-panel.component.scss',
})
export class LightExpansionPanelComponent implements OnInit {
  @Input()
  dataStream: Observable<Light[]> | undefined;
  data: Light[] | undefined;

  @Output()
  itemChangedEvent = new EventEmitter<Light>();

  ngOnInit(): void {
    this.dataStream?.subscribe((data) => (this.data = data));
  }

  // (change) event is called only when the user is done adjusting the slider
  itemChanged(item: Light) {
    this.itemChangedEvent.emit(item);
  }
}
