import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioReuniaoPreComponent } from './calendario-reuniao-pre.component';

describe('CalendarioReuniaoPreComponent', () => {
  let component: CalendarioReuniaoPreComponent;
  let fixture: ComponentFixture<CalendarioReuniaoPreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioReuniaoPreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioReuniaoPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
