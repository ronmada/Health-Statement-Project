import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { MainFormPageRoutingModule } from './main-form-routing.module'
import { FormStudentComponent } from './components//form-student/form-student.component'
import { FormEmployeeComponent } from './components/form-employee/form-employee.component'
import { MainFormPage } from './main-form.page'

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MainFormPageRoutingModule],
  declarations: [MainFormPage, FormStudentComponent, FormEmployeeComponent],
})
export class MainFormPageModule {}
