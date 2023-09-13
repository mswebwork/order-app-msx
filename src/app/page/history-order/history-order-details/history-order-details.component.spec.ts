import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOrderDetailsComponent } from './history-order-details.component';

describe('HistoryOrderDetailsComponent', () => {
  let component: HistoryOrderDetailsComponent;
  let fixture: ComponentFixture<HistoryOrderDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryOrderDetailsComponent]
    });
    fixture = TestBed.createComponent(HistoryOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
