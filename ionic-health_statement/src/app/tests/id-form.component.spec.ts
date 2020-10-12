import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdFormComponent } from '../home/id-form/id-form.component';

describe('IdFormComponent', () => {
  let component: IdFormComponent;
  let fixture: ComponentFixture<IdFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
