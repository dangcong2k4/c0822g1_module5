import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCuatomerComponent } from './create-cuatomer.component';

describe('CreateCuatomerComponent', () => {
  let component: CreateCuatomerComponent;
  let fixture: ComponentFixture<CreateCuatomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCuatomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCuatomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
