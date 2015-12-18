import {bootstrap} from "angular2/platform/browser";
import {ROUTER_PROVIDERS} from "angular2/router";
import {AppComponent} from "./home/home.component";

bootstrap(AppComponent, [
	ROUTER_PROVIDERS
]);
