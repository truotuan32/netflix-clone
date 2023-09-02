import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerInfoComponent } from './layer-info.component';

describe('LayerInfoComponent', () => {
  let component: LayerInfoComponent;
  let fixture: ComponentFixture<LayerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
