import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name: string = 'Francisco';

  movies: string[] = [
    'Los tres Huastecos',
    'Alien',
    'Batman',
    'Una pelicula de huevos',
    'Pineapple express'
  ];

  flag: boolean = true;

  constructor() {
    setTimeout(() => {
      this.name = 'Juan';
      this.movies.push('Los 3 Garcia');
    },2000);
  }

  doOnClick() {
    console.log('me hicieron click!');
    this.flag = !this.flag;
  }

  ngOnInit(): void {
    
  }
}
