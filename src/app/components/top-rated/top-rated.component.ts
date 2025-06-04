import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-rated',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent {
  books = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A classic novel set in the Roaring Twenties.',
      price: 499,
      rent: 30,
      image: 'https://images-na.ssl-images-amazon.com/images/I/71FTb9X6wsL.jpg'
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'A powerful novel about racial injustice in America.',
      price: 450,
      rent: 25,
      image: 'https://images-na.ssl-images-amazon.com/images/I/71FxgtFKcQL.jpg'
    },
    {
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel on surveillance and totalitarianism.',
      price: 399,
      rent: 20,
      image: 'https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg'
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      description: 'A romantic novel of manners set in 19th-century England.',
      price: 520,
      rent: 30,
      image: 'https://images-na.ssl-images-amazon.com/images/I/71Q1tPupKjL.jpg'
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      description: 'A fantasy adventure that leads to epic journeys.',
      price: 600,
      rent: 35,
      image: 'https://images-na.ssl-images-amazon.com/images/I/710+HcoP38L.jpg'
    },
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      description: 'A practical guide to building better habits.',
      price: 550,
      rent: 25,
      image: 'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg'
    },
    {
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      description: 'A journey of self-discovery and dreams.',
      price: 470,
      rent: 28,
      image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg'
    },
    {
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
      description: 'Learn the mindset and habits of wealthy people.',
      price: 499,
      rent: 22,
      image: 'https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg'
    },
    {
      title: 'The Power of Now',
      author: 'Eckhart Tolle',
      description: 'Live in the moment and awaken to your true self.',
      price: 510,
      rent: 27,
      image: 'https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg'
    },
    {
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      description: 'A brief history of humankind.',
      price: 599,
      rent: 32,
      image: 'https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg'
    }
  ];
}