import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  rentedBooks = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      image: 'https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg',
      rentDate: new Date('2023-06-15'),
      dueDate: new Date('2023-06-22'),
      status: 'active',
      finePerDay: 100
    },
    {
      id: 2,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      image: 'https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg',
      rentDate: new Date('2023-06-10'),
      dueDate: new Date('2023-06-17'),
      status: 'overdue',
      finePerDay: 100
    }
  ];

  getDaysRemaining(dueDate: Date): number {
    const today = new Date();
    const diffTime = dueDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  isOverdue(dueDate: Date): boolean {
    return new Date() > dueDate;
  }

  calculateFine(dueDate: Date, finePerDay: number): number {
    const today = new Date();
    if (today <= dueDate) return 0;
    
    const diffTime = today.getTime() - dueDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays * finePerDay;
  }
}