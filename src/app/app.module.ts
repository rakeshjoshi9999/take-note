import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AddnoteComponent } from './addnote/addnote.component';
import { ShownoteComponent } from './shownote/shownote.component';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';


import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SearchNotesPipe } from './search-notes.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotesComponent,
    AddnoteComponent,
    ShownoteComponent,
    SearchNotesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB3kw6a2U5nHfU__zVKOlwJKOhyUnoXuPI",
      authDomain: "short-note.firebaseapp.com",
      databaseURL: "https://short-note.firebaseio.com",
      projectId: "short-note",
      storageBucket: "short-note.appspot.com",
      messagingSenderId: "887867827716",
      appId: "1:887867827716:web:4bf0992b60907026"
    }),
    AngularFirestoreModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
