import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOrgaoComponent } from './form-orgao.component';

describe('FormOrgaoComponent', () => {
  let component: FormOrgaoComponent;
  let fixture: ComponentFixture<FormOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
