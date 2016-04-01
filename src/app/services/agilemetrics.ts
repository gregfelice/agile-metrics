

import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AgileMetrics {
  constructor(private http: Http) { }

  public ss;

  fetchMetrics() {

		// see https://auth0.com/blog/2015/10/15/angular-2-series-part-3-using-http/
		// https://www.thepolyglotdeveloper.com/2016/01/include-external-javascript-libraries-in-an-angular-2-typescript-project/
		// http://papaparse.com/

		this.http.get('http://localhost:3000/metrics.csv')
			.map(res => res.text)
			.subscribe(
				data => console.log(data()),
				err => console.log("error"),
				() => console.log('Random Quote Complete')
			);

    return [
			{ name: this.ss},
      { name: 'Agile Metric 1' },
      { name: 'Agile Metric 2' },
      { name: 'Agile Metric 3' },
      { name: 'Agile Metric 4' },
      { name: 'Agile Metric 5' },
      { name: 'Agile Metric 6' }
    ];

  }

  /*
    ok, need to grab a csv file and parse into JSON.
    grab the csv file from a URL...
  */

}
