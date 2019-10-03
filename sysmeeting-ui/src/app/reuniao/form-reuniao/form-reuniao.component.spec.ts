import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReuniaoComponent } from './form-reuniao.component';

describe('FormReuniaoComponent', () => {
  let component: FormReuniaoComponent;
  let fixture: ComponentFixture<FormReuniaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReuniaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReuniaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
