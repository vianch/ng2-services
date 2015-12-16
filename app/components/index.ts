import {bootstrap} from "angular2/platform/browser";
import {ROUTER_PROVIDERS} from "angular2/router";
import HomeComponent from "./home/home.component";

bootstrap(HomeComponent, [
	ROUTER_PROVIDERS
]);
