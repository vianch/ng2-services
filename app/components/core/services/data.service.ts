import {Injectable, Component} from  "angular2/core";
import {Http, RequestOptionsArgs, Headers} from "angular2/http";

@Component({

})

@Injectable()
export default class DataService implements IDataService {
	public getData(restUrl: string): any {
		return undefined;
	}
}
