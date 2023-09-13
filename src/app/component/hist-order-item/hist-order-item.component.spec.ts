import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistOrderItemComponent } from './hist-order-item.component';

describe('HistOrderItemComponent', () => {
  let component: HistOrderItemComponent;
  let fixture: ComponentFixture<HistOrderItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistOrderItemComponent]
    });
    fixture = TestBed.createComponent(HistOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
