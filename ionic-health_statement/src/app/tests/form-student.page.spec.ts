import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormStudentPage } from '../home/form-student/form-student.page';

describe('FormStudentPage', () => {
  let component: FormStudentPage;
  let fixture: ComponentFixture<FormStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
