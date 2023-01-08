import { Component } from '@angular/core';
import { Grid, Cell } from './models/Sudoku';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sudoku';
  constructor() {}
}
