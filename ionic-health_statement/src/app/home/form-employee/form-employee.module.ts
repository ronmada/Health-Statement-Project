import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormEmployeePageRoutingModule } from './form-employee-routing.module';

import { FormEmployeePage } from './form-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormEmployeePageRoutingModule
  ],
  declarations: [FormEmployeePage]
})
export class FormEmployeePageModule {}
