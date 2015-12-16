import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import DashboardComponent from "../dashboard/dashboard.component";

@Component({
	selector: "app",
	template: require("./home.component.html"),
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: "/dashboard", name: "Dashboard", component: DashboardComponent, useAsDefault: true},
])

export default class HomeComponent {
	public title = "NG2-SERVICES Example";
}
