import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoupMessageComponent } from './poup-message.component';

describe('PoupMessageComponent', () => {
  let component: PoupMessageComponent;
  let fixture: ComponentFixture<PoupMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoupMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoupMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
