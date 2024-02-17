import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsviewComponent } from './chartsview.component';

describe('ChartsviewComponent', () => {
  let component: ChartsviewComponent;
  let fixture: ComponentFixture<ChartsviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsviewComponent]
    });
    fixture = TestBed.createComponent(ChartsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
