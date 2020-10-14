import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CanLoadMainFormService } from './home/main-form/can-load-main-form.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'mainform',
        canLoad: [CanLoadMainFormService],
        loadChildren: () =>
          import('./home/main-form/main-form.module').then(
            (m) => m.MainFormPageModule
          ),
      },
    ],
  },

  // {
  //   path: 'form-student',
  //   loadChildren: () => import('./form-student/form-student.module').then( m => m.FormStudentPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  providers: [CanLoadMainFormService],
})
export class AppRoutingModule {}
