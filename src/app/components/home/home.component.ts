import { Component } from '@angular/core';
import { TopRatedComponent } from "../top-rated/top-rated.component";


@Component({
  selector: 'app-home',
  imports: [TopRatedComponent, ],
  templateUrl: './home.component.html',
 styleUrls: ['./home.component.css'] // ✅ s laga dein
})
export class HomeComponent {

}
