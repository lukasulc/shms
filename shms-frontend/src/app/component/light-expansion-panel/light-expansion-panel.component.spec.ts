import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightExpansionPanelComponent } from './light-expansion-panel.component';

describe('LightExpansionPanelComponent', () => {
  let component: LightExpansionPanelComponent;
  let fixture: ComponentFixture<LightExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightExpansionPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
