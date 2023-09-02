import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieList2Component } from './movie-list2.component';

describe('MovieList2Component', () => {
  let component: MovieList2Component;
  let fixture: ComponentFixture<MovieList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieList2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
