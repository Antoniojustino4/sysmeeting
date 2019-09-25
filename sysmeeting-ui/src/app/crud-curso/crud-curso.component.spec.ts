import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCursoComponent } from './crud-curso.component';

describe('CrudCursoComponent', () => {
  let component: CrudCursoComponent;
  let fixture: ComponentFixture<CrudCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
