import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {EntryDialogComponent} from './entry-dialog/entry-dialog.component';
import {User} from '../classes/user';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  cells = [1, 2, 3];
  userX: User;
  user0: User;
  winner: string;
  stepNumber: number;
  isReset = false;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
   this.userX = new User();
   this.user0 = new User();
   this.initState();
  }

  initState() {
    this.stepNumber = 0;
    this.winner = '';
    this.userX.isGoing = true;
    this.user0.isGoing = false;
  }

  openDialog() {
    const dialogRef = this.dialog.open(EntryDialogComponent, {
      data: 'playerX',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.userX.name = result[0];
      this.user0.name = result[1];
    });
  }

  setId(indRow, indCell) {
    return indRow + '' + indCell;
  }

  onCellClick(indRow, indCell, event) {
    if (!this.winner) {
      if (this.stepNumber === 0) {
        this.isReset = true;
      }
      if (event.target.innerHTML === '') {
        event.target.innerHTML = this.userX.isGoing ? 'X' : '0';
        this.userX.isGoing = !this.userX.isGoing;
        this.user0.isGoing = !this.user0.isGoing;
        this.stepNumber++;
      }
      this.checkWinner(indRow, indCell, event.target);
    }
  }

  checkWinner(indRow, indCell, htmlElem) {
    const ind = 0;
    // checking rows
    let a = document.getElementById(indRow + '' + ind).innerText;
    let b = document.getElementById(indRow + '' + (ind + 1)).innerText;
    let c = document.getElementById(indRow + '' + (ind + 2)).innerText;
    if (a !== '' && b !== '' && c !== '') {
      if (a.localeCompare(b) === 0 && a.localeCompare(c) === 0) {
        this.setWinner();
      }
    }
    // checking columns
    a = document.getElementById((ind) + '' + indCell).innerText;
    b = document.getElementById((ind + 1) + '' + indCell).innerText;
    c = document.getElementById((ind + 2) + '' + indCell).innerText;
    if (a !== '' && b !== '' && c !== '') {
      if (a.localeCompare(b) === 0 && a.localeCompare(c) === 0) {
        this.setWinner();
      }
    }

    // checking diagonals
    if ((htmlElem.id === '00' || htmlElem.id === '02' || htmlElem.id === '11'
      || htmlElem.id === '20' || htmlElem.id === '22')
      && document.getElementById('11').innerHTML !== '') {
      if (document.getElementById('00').innerHTML.localeCompare(document.getElementById('11').innerHTML) === 0 &&
        document.getElementById('00').innerHTML.localeCompare(document.getElementById('22').innerHTML) === 0) {
        this.setWinner();
      }
      if (document.getElementById('02').innerHTML.localeCompare(document.getElementById('11').innerHTML) === 0 &&
        document.getElementById('02').innerHTML.localeCompare(document.getElementById('20').innerHTML) === 0) {
        this.setWinner();
      }
    }
  }

  setWinner() {
    this.winner = this.userX.isGoing ? this.user0.name ? this.user0.name : 'player 0'
      : this.userX.name ? this.userX.name : 'player X';
  }

  reset() {
    for (let i = 0; i < 9; i++) {
      document.getElementsByClassName('cell')[i].innerHTML = '';
    }
   this.initState();
  }
}
