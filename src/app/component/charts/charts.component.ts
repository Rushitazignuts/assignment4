import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexAnnotations,
  ApexNonAxisChartSeries,
  ApexLegend,
  ChartComponent,
} from 'ng-apexcharts';
import { series } from '../../data';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  annotations: ApexAnnotations;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  labels: string[];
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
};

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent {
  //pie chart
  chartSeries: ApexNonAxisChartSeries = [78, 50, 110, 70, 40];
  chartDetails: ApexChart = {
    type: 'pie',
    height: 300,
  };

  chartLabels = ['apple', 'fb', 'ms', 'google', 'oracle'];
  chartTitle: ApexTitleSubtitle = {
    text: 'company',
    align: 'left',
  };
  chartDataLabels: ApexDataLabels = {
    enabled: true,
  };

  chartLegend: ApexLegend = {
    position: 'left',
  };

  //line chart
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Data series1',
          data: series.monthDataSeries1.prices,
        },
        {
          name: 'Data series2',
          data: series.monthDataSeries2.dates,
        },
      ],

      chart: {
        type: 'line',
        height: 400,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
      },

      annotations: {
        points: [
          {
            x: new Date('13 Nov 2017').getTime(),
            y: 8900,
            marker: {
              size: 10,
              fillColor: '#fff',
              strokeColor: 'black',
              radius: 2,
            },
            label: {
              text: 'Data feature',
              borderColor: 'black',
              offsetY: 0,
              style: {
                color: '#fff',
                background: 'black',
              },
            },
          },
        ],
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
        width: 3,
      },
      grid: {
        padding: {
          right: 30,
          left: 20,
          top: 30,
        },
      },
      title: {
        text: 'ApexChart',
        align: 'left',
      },
      labels: series.monthDataSeries1.dates,

      xaxis: {
        type: 'datetime',
      },
    };
  }
}
