import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import  {Hero} from './hero';
import { HeroService }  from './hero.service';





@Component({
	selector: 'hero-detail',
	templateUrl: './heroes-detail.component.html'
})

export class HeroDetailComponent{
	hero: Hero;
	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
		) {}

	ngOnInit(): void {
		this.route.params
		.switchMap((params: Params) => this.heroService.getHero(+params['id']))
		.subscribe(hero => this.hero = hero);
	}
	]
	goBack(): void {
		this.location.back();
	}
}
