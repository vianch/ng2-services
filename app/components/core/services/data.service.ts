import {Injectable, Component} from  "angular2/core";
import {Http} from "angular2/http";

@Component({
})
@Injectable()
export default class DataService implements IDataService {

	constructor(private _http: Http) { }

	public getData(restUrl: string) {
		return this._http.get(restUrl);
	}
}
