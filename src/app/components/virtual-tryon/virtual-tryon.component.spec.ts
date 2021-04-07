import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualTryonComponent } from './virtual-tryon.component';

describe('VirtualTryonComponent', () => {
  let component: VirtualTryonComponent;
  let fixture: ComponentFixture<VirtualTryonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualTryonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualTryonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
