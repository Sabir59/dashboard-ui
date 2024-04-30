import { Component } from '@angular/core';
import { getImports } from './constants/getImports';
import { Reports, Column } from './types';
import { ReportsService } from '../../../services/reportSites';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [...getImports],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [ReportsService],
})
export class TableComponent {
  reportId: string = '';
  reports: Reports[] = [];

  cols!: Column[];

  constructor(
    private reportsService: ReportsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.reportId = params['id'] || '';
    });

    this.reportsService.getReportsById([this.reportId]).then((data) => {
      this.reports = data;
    });
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'description', header: 'Description' },
    ];
  }
}
