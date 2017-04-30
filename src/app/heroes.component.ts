import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import  {Hero} from './hero';

import { HeroService } from './hero.service';

import { HeroDetailComponent } from './heroes-detail.component';

import { DashboardComponent } from './dashboard.component';


@Component({
	selector: 'my-heroes',
	templateUrl: './heroes.component.html',
	providers: [HeroService]

})


export class HeroesComponent implements OnInit { 


	constructor(private router: Router,
    private heroService: HeroService){

	}

	ngOnInit(): void{
		this.getHeroes();
	}


	name = 'Angular'; 
	heroes: Hero[];
	title = 'My Heroes App';

	selectedHero: Hero;

	getHeroes(): void{
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	gotoDetail():void{
		this.router.navigate(['/detail',this.selectedHero.id])
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

}
