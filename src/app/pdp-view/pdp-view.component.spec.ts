import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpViewComponent } from './pdp-view.component';

describe('PdpViewComponent', () => {
  let component: PdpViewComponent;
  let fixture: ComponentFixture<PdpViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdpViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
