import { Injectable } from '@angular/core';

@Injectable()
export class ReportsService {
  private data = [
    {
      id: 'cooking-reports',
      name: 'Cooking Reports',
      description: 'Product Description',
      image: '../../imag-1.png',
      url: '/cooking-reports',
    },
    {
      id: 'tip-reports',
      name: 'Tip Reports',
      description: 'Product Description',
      image: '../../imag-2.png',
      url: '/tip-reports',
    },
    {
      id: 'ingredient-reports',
      name: 'Ingredients Reports',
      description: 'Product Description',
      image: '../../imag-3.png',
      url: '/ingredient-reports',
    },
    {
      id: 'revenue-reports',
      name: 'Revenue Reports',
      description: 'Product Description',
      image: '../../imag-4.png',
      url: '/revenue-reports',
    },
    {
      id: 'route-reports',
      name: 'Route Reports',
      description: 'Product Description',
      image: '../../imag-5.png',
      url: '/route-reports',
    },
  ];

  getData() {
    return this.data;
  }

  getSitesCards() {
    return Promise.resolve(this.getData());
  }

  getReportsById(ids: string[]) {
    return Promise.resolve(
      this.getData().filter((report) => ids.includes(report.id))
    );
  }
}
