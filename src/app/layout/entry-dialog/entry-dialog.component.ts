import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-entry-dialog',
  templateUrl: './entry-dialog.component.html',
  styleUrls: ['./entry-dialog.component.css']
})
export class EntryDialogComponent implements OnInit {
  name: string;
  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<EntryDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.name = this.data;
    this.form = new FormGroup({
      'nameX': new FormControl('', [Validators.required]),
      'name0': new FormControl('', [Validators.required])
    });
  }

  closeDialog() {
    this.dialogRef.close([this.form.get('nameX').value, this.form.get('name0').value]);
  }
}
