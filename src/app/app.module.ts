import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }     from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HeroDetailComponent } from './heroes-detail.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService }          from './hero.service';







@NgModule({
	imports:[ 
	BrowserModule,
	FormsModule,
	AppRoutingModule
	],
	declarations: [ 
	AppComponent,
	HeroesComponent,
	HeroDetailComponent,
	DashboardComponent
	],
	providers: [ HeroService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
