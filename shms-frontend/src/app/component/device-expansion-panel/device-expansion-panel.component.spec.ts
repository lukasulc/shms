import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceExpansionPanelComponent } from './device-expansion-panel.component';

describe('DeviceExpansionPanelComponent', () => {
  let component: DeviceExpansionPanelComponent;
  let fixture: ComponentFixture<DeviceExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceExpansionPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
