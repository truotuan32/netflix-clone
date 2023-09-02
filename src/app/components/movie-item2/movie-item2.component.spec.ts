import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItem2Component } from './movie-item2.component';

describe('MovieItem2Component', () => {
  let component: MovieItem2Component;
  let fixture: ComponentFixture<MovieItem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieItem2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
