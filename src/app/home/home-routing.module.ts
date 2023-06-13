import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThirdComponent } from './third/third.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children:[
      {
        path: "First",
        component: FirstComponent,
      },
      {
        path: "second",
        component: SecondComponent,
      },
      {
        path: "third",
        component: ThirdComponent,
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
