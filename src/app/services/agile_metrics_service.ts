

import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

import {AgileMetric} from './agile_metric';

@Injectable()
export class AgileMetricsService {

    constructor(private http: Http) { }

    public fetchMetrics() {
        return this.http.get(this._url)
            .map(res => this.process(res))
            .catch(this.handleError);
    }

    private _url = '/metrics.json';
    private metrics: Array<AgileMetric> = [];

    private process(res: Response) {

        let data: Object[] = res.json().data;

        for (let item in data) {
            let measurement = new AgileMetric(
                data[item]['FIELD27'],
                data[item]['FIELD35'],
                data[item]['FIELD36'],
                data[item]['FIELD37']
            );
            this.metrics.push(measurement);
        }
        return this.metrics;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

// see https://auth0.com/blog/2015/10/15/angular-2-series-part-3-using-http/
// https://www.thepolyglotdeveloper.com/2016/01/include-external-javascript-libraries-in-an-angular-2-typescript-project/
// http://papaparse.com/
