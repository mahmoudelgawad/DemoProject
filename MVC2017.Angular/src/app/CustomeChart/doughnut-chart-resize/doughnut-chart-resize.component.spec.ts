import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutChartResizeComponent } from './doughnut-chart-resize.component';

describe('DoughnutChartResizeComponent', () => {
  let component: DoughnutChartResizeComponent;
  let fixture: ComponentFixture<DoughnutChartResizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoughnutChartResizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutChartResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
