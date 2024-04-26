import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
// import { HeaderComponent } from './components/partials/header/header.component';
import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { HeaderComponent } from './components/dashboard/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    LoginComponent,
    ButtonModule,
    SidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dashboard-ui';
}
