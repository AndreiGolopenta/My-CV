import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAutoplayComponent } from './dialog-autoplay.component';

describe('DialogAutoplayComponent', () => {
  let component: DialogAutoplayComponent;
  let fixture: ComponentFixture<DialogAutoplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAutoplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAutoplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
