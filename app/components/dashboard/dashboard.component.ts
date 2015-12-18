import {Component, OnInit } from "angular2/core";
import {Router} from "angular2/router";
import {DashboardService} from "./dashboard.service";

@Component({
	selector: "my-dashboard",
	templateUrl: "app/components/dashboard/dashboard.component.html",
	providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
	public heroes: Hero[] = [];
	constructor(private _dashboardService: DashboardService, private _router: Router) { }


	ngOnInit() {
		this._dashboardService.getHeroes().subscribe(res => {
			this.heroes = res.json();
			console.log(this.heroes);
		});
	}	

}
