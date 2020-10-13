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
 
 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
