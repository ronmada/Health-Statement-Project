import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormStudentPageRoutingModule } from './form-student-routing.module';

import { FormStudentPage } from './form-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormStudentPageRoutingModule
  ],
  declarations: [FormStudentPage]
})
export class FormStudentPageModule {}
