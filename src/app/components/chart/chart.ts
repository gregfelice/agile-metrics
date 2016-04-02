
import {Component} from 'angular2/core';

import {AgileMetric} from '../../services/agile_metric';
import {AgileMetricsService} from '../../services/agile_metrics_service';

@Component({
    selector: 'chart',
    templateUrl: 'app/components/chart/chart.html',
    styleUrls: ['app/components/chart/chart.css'],
    providers: [AgileMetricsService],
    directives: [],
    pipes: []
})
export class Chart {

    errorMessage: string;
    metrics: AgileMetric[];

    constructor(private metricsService: AgileMetricsService) { }

    ngOnInit() { this.getMetrics(); }

    getMetrics() {
        this.metricsService.fetchMetrics()
            .subscribe(
            metrics => this.metrics = metrics,
            error => this.errorMessage = <any>error);
        //console.log(this.metrics);
    }

}
