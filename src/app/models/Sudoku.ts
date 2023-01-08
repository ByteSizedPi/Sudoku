import { constrain, EmptyGrid } from './const';

export class Cell {
  bg: string = '#FFFFFF';
  isSelected: boolean = false;
  isHilighted: boolean = false;

  constructor(public value: number, public x: number, public y: number) {}

  select = () => {
    this.isSelected = true;
    this.bg = '#8888FF';
  };

  deselect = () => {
    this.isSelected = false;
    this.bg = '#FFFFFF';
  };

  rowCol = () => {
    if (!this.isSelected && !this.isHilighted) this.bg = '#BBBBFF';
  };

  deHilight = () => {};
}

export class Grid {
  grid: Cell[][] = [];
  private curCell: Cell;

  constructor(grid: number[][] = EmptyGrid) {
    grid.forEach((row, i) => {
      this.grid.push([]);
      row.forEach((cell, j) => this.grid[i].push(new Cell(cell, i, j)));
    });
  }

  getRow = (index: number): Cell[] => this.grid[index];
  getColumn = (index: number): Cell[] => this.grid.map((row) => row[index]);

  navigateTo(row: number, col: number) {
    const { x, y } = this.curCell;
    this.selectCell(constrain(x + row, 0, 8), constrain(y + col, 0, 8));
  }

  selectCell(i: number, j: number) {
    if (this.curCell) {
      this.getRow(this.curCell.x).forEach((cell) => cell.deselect());
      this.getColumn(this.curCell.y).forEach((cell) => cell.deselect());
      this.curCell.deselect();
    }
    this.curCell = this.grid[i][j];
    this.curCell.select();
    this.getRow(this.curCell.x).forEach((cell) => cell.rowCol());
    this.getColumn(this.curCell.y).forEach((cell) => cell.rowCol());
  }

  setCell(val: number) {
    this.curCell.value = val;
  }
}
