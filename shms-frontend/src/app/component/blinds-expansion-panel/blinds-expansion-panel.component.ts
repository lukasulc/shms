import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Observable } from 'rxjs';
import { Blinds } from '../../model/blinds';

@Component({
  selector: 'app-blinds-expansion-panel',
  imports: [
    FormsModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTooltipModule,
    MatIconModule,
  ],
  templateUrl: './blinds-expansion-panel.component.html',
  styleUrl: './blinds-expansion-panel.component.scss',
})
export class BlindsExpansionPanelComponent implements OnInit {
  @Input()
  dataStream: Observable<Blinds[]> | undefined;
  data: Blinds[] | undefined;

  ngOnInit(): void {
    this.dataStream?.subscribe((data) => (this.data = data));
  }
}
