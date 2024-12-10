import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraExpansionPanelComponent } from './camera-expansion-panel.component';

describe('CameraExpansionPanelComponent', () => {
  let component: CameraExpansionPanelComponent;
  let fixture: ComponentFixture<CameraExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CameraExpansionPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CameraExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
