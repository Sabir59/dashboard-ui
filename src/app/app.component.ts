import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
// import { HeaderComponent } from './components/partials/header/header.component';
import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { HeaderComponent } from './components/dashboard/header/header.component';
import { TableComponent } from './components/ui/table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    LoginComponent,
    ButtonModule,
    SidebarComponent,
    TableComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dashboard-ui';
  cities: any[] = [
    { id: 1, name: 'New York' },
    { id: 2, name: 'Los Angeles' },
    { id: 3, name: 'Chicago' },
    { id: 4, name: 'Houston' },
    // Add more cities as needed
  ];

  // Define a variable to hold the selected city
  selectedCity: any;
}
