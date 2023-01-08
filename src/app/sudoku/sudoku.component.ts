import { Component, OnInit } from '@angular/core';
import { Grid, Cell } from '../models/Sudoku';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss'],
})
export class SudokuComponent {
  grid: Grid;

  constructor() {
    this.grid = new Grid();
    document.addEventListener('keydown', ({ key }) => {
      switch (key.toLowerCase()) {
        case 'w':
          this.grid.navigateTo(-1, 0);
          return;
        case 'a':
          this.grid.navigateTo(0, -1);
          return;
        case 's':
          this.grid.navigateTo(1, 0);
          return;
        case 'd':
          this.grid.navigateTo(0, 1);
          return;
          55;
      }
      console.log(key);
      if (+key) this.grid.setCell(+key);
    });
  }
}
