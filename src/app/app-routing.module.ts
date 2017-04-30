
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }     from './heroes.component';
import { NotFoundComponent } from './not-found.component';

import { HeroDetailComponent }  from './heroes-detail.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}