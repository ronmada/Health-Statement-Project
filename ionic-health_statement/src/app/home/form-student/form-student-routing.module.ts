import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormStudentPage } from './form-student.page';

const routes: Routes = [
  {
    path: '',
    component: FormStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormStudentPageRoutingModule {}
