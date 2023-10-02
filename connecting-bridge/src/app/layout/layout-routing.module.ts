import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/quotation', pathMatch: 'full'
  },
  { path: '', component: LayoutComponent, 
    children: [
      { path: 'login', loadChildren: () => import('../login/login.module').then(m => m.LoginModule) },
      { path: 'quotation', loadChildren: () => import('../activity-view/activity-view.module').then(m => m.ActivityViewModule) }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
