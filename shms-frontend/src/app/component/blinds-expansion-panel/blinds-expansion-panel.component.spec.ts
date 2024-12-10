import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindsExpansionPanelComponent } from './blinds-expansion-panel.component';

describe('BlindsExpansionPanelComponent', () => {
  let component: BlindsExpansionPanelComponent;
  let fixture: ComponentFixture<BlindsExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlindsExpansionPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlindsExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
