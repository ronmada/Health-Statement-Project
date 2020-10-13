import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormEmployeePage } from '../home/form-employee/form-employee.page';

describe('FormEmployeePage', () => {
  let component: FormEmployeePage;
  let fixture: ComponentFixture<FormEmployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEmployeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
