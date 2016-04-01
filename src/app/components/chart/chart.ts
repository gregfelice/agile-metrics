
import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {AgileMetrics} from '../../services/agilemetrics';

@Component({
    selector: 'chart',
    templateUrl: 'app/components/chart/chart.html',
    styleUrls: ['app/components/chart/chart.css'],
    providers: [],
    directives: [],
    pipes: []
})
export class Chart {

    public metrics;
    public foo = "FOO VALUE";

    constructor(http: Http) {
        var backend = new AgileMetrics(http);
        this.metrics = backend.fetchMetrics();
    }

    ngOnInit() {
    }
}
