import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../dashboard/sidebar/sidebar.component';
import { HeaderComponent } from '../../dashboard/header/header.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, RouterOutlet, TableComponent],
})
export class DetailsComponent implements OnInit {
  id: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'] || ''; // Set default value if id is undefined
    });
  }
}
