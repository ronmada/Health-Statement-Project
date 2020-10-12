import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomePage } from './home.page'

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: ':UserId',
    loadChildren: () => import('./form-page/form-page.module').then( m => m.FormPagePageModule)
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
