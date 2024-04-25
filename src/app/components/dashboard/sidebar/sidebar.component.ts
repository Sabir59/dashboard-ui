import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroUsers,
  heroChevronDown,
  heroDocumentChartBar,
  heroDocument,
  heroChartPie,
  heroBell,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIconComponent, RouterLink, CommonModule],
  viewProviders: [
    provideIcons({
      heroUsers,
      heroChevronDown,
      heroDocumentChartBar,
      heroDocument,
      heroChartPie,
      heroBell,
    }),
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  toggleDropdown: Record<string, boolean> = {
    rooms: false,
    accounts: false,
    devTeam: false,
    bookings: false,
    revenue: false,
    transactions: false,
    settings: false,
  };

  dropdownToggleHandler(targetDropdown: string): void {
    const updatedStates: Record<string, boolean> = {};
    console.log(targetDropdown);

    // Set the clicked dropdown to its opposite state
    updatedStates[targetDropdown] = !this.toggleDropdown[targetDropdown];

    // Close all other dropdowns
    Object.keys(this.toggleDropdown).forEach((key) => {
      if (key !== targetDropdown) {
        updatedStates[key] = false;
      }
    });

    this.toggleDropdown = updatedStates;
  }
}
