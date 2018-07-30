import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { EntryDialogComponent } from './layout/entry-dialog/entry-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {User} from './classes/user';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    EntryDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [EntryDialogComponent],
  providers: [User],
  bootstrap: [AppComponent]
})
export class AppModule { }
