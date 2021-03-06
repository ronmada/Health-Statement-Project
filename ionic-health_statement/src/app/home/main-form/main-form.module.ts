import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { MainFormPageRoutingModule } from './main-form-routing.module';
import { FormStudentComponent } from './components//form-student/form-student.component';
import { FormEmployeeComponent } from './components/form-employee/form-employee.component';
import { MainFormPage } from './main-form.page';
import { SigPopComponent } from './components/sig-pop/sig-pop.component';
import { SignatureComponent } from './components/signature/signature.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainFormPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MainFormPage,
    FormStudentComponent,
    FormEmployeeComponent,
    SigPopComponent,
    SignatureComponent,
  ],
})
export class MainFormPageModule {}
