import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from  './hero.service';
import {Router} from 'angular2/router';
// import {Dragula} from '../node_modules/ng2-dragula/src/app/directives/dragula.directive';
import {DragulaService, Dragula} from 'ng2-dragula/ng2-dragula';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/dashboard.component.html',
	styleUrls: ['app/dashboard.component.css'],
	directives: [Dragula],
	viewProviders: [DragulaService]
})

export class DashboardComponent implements OnInit{

	heroes: Hero[] = [];

	constructor(private _heroService: HeroService,
		private _router: Router){}

	ngOnInit(){
		this._heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1, 5));
	}

	gotoDetail(hero: Hero){
		let link = ['HeroDetail', { id: hero.id }];
		this._router.navigate(link);
	}
}