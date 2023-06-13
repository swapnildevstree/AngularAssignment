import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home/home.component';
import { FirstComponent } from './home/first/first.component';
import { SecondComponent } from './home/second/second.component';
import { ThirdComponent } from './home/third/third.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [

{
  path:'',
  redirectTo:'login',
  pathMatch:'full'
},

{
  path: 'login',
  component:LoginComponent,
  // loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
},

{
  path: '',
  component:HomeComponent,
  children:[
    {
      path: "Dog",
     component: FirstComponent,
    //  loadChildren: () => import('./home/first/first.module').then(m => m.FirstModule)
    },
    {
      path: "Cat",
      canActivate:[AuthGuard],  

      component: SecondComponent,
      
    },
    {
      path: "Mice",
      component: ThirdComponent,
    },
    {
      path:'**',
      redirectTo:'Dog'
    }
    
  ]
},
{ path :'page-not-found',component:NotFoundComponent},

{ path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
