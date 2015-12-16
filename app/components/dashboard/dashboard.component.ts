import {Component, OnInit} from "angular2/core";

@Component({
	selector: "dashboard"
})

export default class DashboardComponent implements IDashboard {
	public dashboardHelloMessage: string = "";

	ngOnInit() {
		this.dashboardHelloMessage = "Dashboard initialized!!!";
	}
}
