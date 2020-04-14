import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsComponent } from './cms.component';
import { CmsHomeComponent } from './home/home.component';


const cmsRoutes: Routes = [
  {
    path: 'cms',
    component: CmsComponent,
    children: [
      { path: 'home', component: CmsHomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(cmsRoutes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
