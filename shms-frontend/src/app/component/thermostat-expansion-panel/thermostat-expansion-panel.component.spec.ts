import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermostatExpansionPanelComponent } from './thermostat-expansion-panel.component';

describe('ThermostatExpansionPanelComponent', () => {
  let component: ThermostatExpansionPanelComponent;
  let fixture: ComponentFixture<ThermostatExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThermostatExpansionPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThermostatExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
