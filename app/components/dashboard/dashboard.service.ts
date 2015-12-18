import {Injectable} from "angular2/core";
import DataService from "../core/services/data.service";

@Injectable()
export class DashboardService implements IDashboardService {

	constructor(private _dataService: DataService) {}

	getHeroes() {
		this._dataService.getData("services/dashboard.json")
	}

}
