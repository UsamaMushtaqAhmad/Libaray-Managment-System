import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  categories = [
    { id: 1, name: 'New Collection' },
    { id: 2, name: 'Top Rated' },
    { id: 3, name: 'All Books' }
  ];

  activeCategory = 1;

  books = [
    // New Collection (15 books)
    {
      id: 1,
      title: 'The Midnight Library',
      author: 'Matt Haig',
      description: 'Between life and death there is a library where you can try different versions of your life.',
      price: 599,
      rent: 35,
      rating: 4.5,
      image: 'https://m.media-amazon.com/images/I/81h2gWPTYJL._AC_UF1000,1000_QL80_.jpg',
      category: 1,
      isNew: true
    },
    {
      id: 2,
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      description: 'A lone astronaut must save Earth from disaster in this science-based thriller.',
      price: 650,
      rent: 40,
      rating: 4.7,
      image: 'https://m.media-amazon.com/images/I/91Q5dC+2LvL._AC_UF1000,1000_QL80_.jpg',
      category: 1,
      isNew: true
    },
    {
      id: 3,
      title: 'Klara and the Sun',
      author: 'Kazuo Ishiguro',
      description: 'An AI companion observes human behavior in this dystopian novel.',
      price: 549,
      rent: 32,
      rating: 4.3,
      image: 'https://m.media-amazon.com/images/I/71fWB1Kb1XL._AC_UF1000,1000_QL80_.jpg',
      category: 1,
      isNew: true
    },
    {
      id: 4,
      title: 'The Push',
      author: 'Ashley Audrain',
      description: 'A psychological drama about motherhood and inherited trauma.',
      price: 499,
      rent: 28,
      rating: 4.2,
      image: 'https://m.media-amazon.com/images/I/81k4+JZ+5kL._AC_UF1000,1000_QL80_.jpg',
      category: 1,
      isNew: true
    },
    {
      id: 5,
      title: 'The Sanatorium',
      author: 'Sarah Pearse',
      description: 'A detective investigates murders at a remote hotel in the Alps.',
      price: 525,
      rent: 30,
      rating: 4.0,
      image: 'https://m.media-amazon.com/images/I/91B7d8g3Q5L._AC_UF1000,1000_QL80_.jpg',
      category: 1,
      isNew: true
    },
    {
      id: 6,
      title: 'Malibu Rising',
      author: 'Taylor Jenkins Reid',
      description: 'A famous family throws an epic party in 1980s Malibu.',
      price: 575,
      rent: 33,
      rating: 4.4,
      image: 'https://m.media-amazon.com/images/I/81fyoFoaxlL._AC_UF1000,1000_QL80_.jpg',
      category: 1,
      isNew: true
    },
    {
      id: 7,
      title: 'The Last Thing He Told Me',
      author: 'Laura Dave',
      description: 'A woman searches for the truth about her husband’s disappearance.',
      price: 499,
      rent: 29,
      rating: 4.1,
      image: 'https://m.media-amazon.com/images/I/91m+8KfQOUL._AC_UF1000,1000_QL80_.jpg',
      category: 1,
      isNew: true
    },
    {
      id: 8,
      title: 'The Four Winds',
      author: 'Kristin Hannah',
      description: 'A family struggles during the Great Depression in Texas.',
      price: 550,
      rent: 31,
      rating: 4.6,
      image: 'https://m.media-amazon.com/images/I/91Szm8FpdfL._AC_UF1000,1000_QL80_.jpg',
      category: 1,
      isNew: true
    },
    {
      id: 9,
      title: 'The Paris Library',
      author: 'Janet Skeslien Charles',
      description: 'A librarian in Nazi-occupied Paris protects her beloved library.',
      price: 525,
      rent: 30,
      rating: 4.3,
      image: 'https://m.media-amazon.com/images/I/91yX+lN+A5L._AC_UF1000,1000_QL80_.jpg',
      category: 1,
      isNew: true
    },
    {
      id: 10,
      title: 'The Rose Code',
      author: 'Kate Quinn',
      description: 'Three female codebreakers work at Bletchley Park during WWII.',
      price: 599,
      rent: 34,
      rating: 4.7,
      image: 'https://m.media-amazon.com/images/I/91X5SIGd+VL._AC_UF1000,1000_QL80_.jpg',
      category: 1,
      isNew: true
    },

    // Top Rated (15 books)
    {
      id: 11,
      title: 'The Silent Patient',
      author: 'Alex Michaelides',
      description: 'A woman shoots her husband and then never speaks another word.',
      price: 550,
      rent: 30,
      rating: 4.8,
      image: 'https://m.media-amazon.com/images/I/71X3O0Uji7L._AC_UF1000,1000_QL80_.jpg',
      category: 2,
      isBestseller: true
    },
    {
      id: 12,
      title: 'Where the Crawdads Sing',
      author: 'Delia Owens',
      description: 'The story of the "Marsh Girl" who survives alone in the North Carolina marshes.',
      price: 525,
      rent: 32,
      rating: 4.9,
      image: 'https://m.media-amazon.com/images/I/81O1oy0y9eL._AC_UF1000,1000_QL80_.jpg',
      category: 2,
      isBestseller: true
    },
    {
      id: 13,
      title: 'Atomic Habits',
      author: 'James Clear',
      description: 'Build good habits and break bad ones with proven strategies.',
      price: 499,
      rent: 28,
      rating: 4.8,
      image: 'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg',
      category: 2,
      isBestseller: true
    },
    {
      id: 14,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      description: 'A shepherd boy journeys to Egypt to find treasure and his destiny.',
      price: 450,
      rent: 25,
      rating: 4.7,
      image: 'https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg',
      category: 2,
      isBestseller: true
    },
    {
      id: 15,
      title: 'The Subtle Art of Not Giving a F*ck',
      author: 'Mark Manson',
      description: 'A counterintuitive approach to living a good life.',
      price: 475,
      rent: 27,
      rating: 4.6,
      image: 'https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg',
      category: 2,
      isBestseller: true
    },
    {
      id: 16,
      title: 'Educated',
      author: 'Tara Westover',
      description: 'A memoir about a woman who leaves her survivalist family to pursue education.',
      price: 525,
      rent: 30,
      rating: 4.7,
      image: 'https://m.media-amazon.com/images/I/71y6rFAyckL._AC_UF1000,1000_QL80_.jpg',
      category: 2,
      isBestseller: true
    },
    {
      id: 17,
      title: 'Becoming',
      author: 'Michelle Obama',
      description: 'The former First Lady’s memoir about her journey from Chicago to the White House.',
      price: 599,
      rent: 35,
      rating: 4.9,
      image: 'https://m.media-amazon.com/images/I/81h2gWPTYJL._AC_UF1000,1000_QL80_.jpg',
      category: 2,
      isBestseller: true
    },
    {
      id: 18,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      description: 'A brief history of humankind from the Stone Age to the 21st century.',
      price: 550,
      rent: 32,
      rating: 4.8,
      image: 'https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg',
      category: 2,
      isBestseller: true
    },
    {
      id: 19,
      title: 'The Power of Now',
      author: 'Eckhart Tolle',
      description: 'A guide to spiritual enlightenment through living in the present moment.',
      price: 475,
      rent: 27,
      rating: 4.7,
      image: 'https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg',
      category: 2,
      isBestseller: true
    },
    {
      id: 20,
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      description: 'Explores the two systems that drive how we think and make decisions.',
      price: 525,
      rent: 30,
      rating: 4.6,
      image: 'https://m.media-amazon.com/images/I/71y6rFAyckL._AC_UF1000,1000_QL80_.jpg',
      category: 2,
      isBestseller: true
    },

    // All Books (20 additional books - category 3)
    {
      id: 21,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'A classic novel about racial injustice in the American South.',
      price: 450,
      rent: 25,
      rating: 4.8,
      image: 'https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg',
      category: 3
    },
    {
      id: 22,
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel about totalitarianism and surveillance.',
      price: 399,
      rent: 22,
      rating: 4.7,
      image: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg',
      category: 3
    },
    // ... (Add 18 more books here)
  ];

  get filteredBooks() {
    if (this.activeCategory === 3) return this.books;
    return this.books.filter(book => book.category === this.activeCategory);
  }

  setCategory(categoryId: number) {
    this.activeCategory = categoryId;
  }
}