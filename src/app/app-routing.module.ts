import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/views/home/home.component';
import { LayoutsComponent } from 'src/views/layouts/layouts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'layouts', component: LayoutsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
