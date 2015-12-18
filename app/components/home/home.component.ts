import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {Http, HTTP_PROVIDERS} from "angular2/http";
import {DashboardComponent} from "../dashboard/dashboard.component";
import DataService from "../core/services/data.service";

@Component({
	selector: "my-app",
	template: require("./home.component.html"),
	directives: [ROUTER_DIRECTIVES],
	providers: [DataService, Http, HTTP_PROVIDERS]
})

	@RouteConfig([
		{ path: "/", name: "Dashboard", component: DashboardComponent, useAsDefault: true },
		{ path: "/heroes", name: "Heroes", component: DashboardComponent },
	])

export class AppComponent {
	public title = "Tour of Heroes";
}

