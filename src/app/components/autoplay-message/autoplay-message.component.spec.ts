import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoplayMessageComponent } from './autoplay-message.component';

describe('AutoplayMessageComponent', () => {
  let component: AutoplayMessageComponent;
  let fixture: ComponentFixture<AutoplayMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoplayMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoplayMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
