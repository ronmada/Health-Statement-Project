import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomePage } from './home.page'

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'mainform',
    loadChildren: () => import('./main-form/main-form.module').then( m => m.MainFormPageModule)
  },
  {
    path: 'formStudent',
    loadChildren: () => import('./form-student/form-student.module').then( m => m.FormStudentPageModule)
  },
  {
    path: 'formEmployee',
    loadChildren: () => import('./form-employee/form-employee.module').then( m => m.FormEmployeePageModule)
  },
 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
