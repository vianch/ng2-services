import {Injectable, Component} from  "angular2/core";
import {Http} from "angular2/http";

@Component({
})
@Injectable()
export default class DataService implements IDataService {
	private people;

	constructor(private _http: Http) { }

	public getData(restUrl: string) {
		console.log(restUrl);
		this._http.get(restUrl).subscribe(res => {
			this.people = res.json();
			console.log(res);
		});
	}
}
