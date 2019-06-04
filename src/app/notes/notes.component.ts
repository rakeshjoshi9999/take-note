import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})

export class NotesComponent implements OnInit {
  searchKey;
  showSearch = false;
  notes: any;
  note;
  // items: Observable<any>;


  collection: AngularFirestoreCollection;

  constructor(private db: AngularFirestore, private router: Router) {
    this.collection = db.collection('notes');
  }

  ngOnInit() {
    console.log('Here>>>>>');
    this.collection = this.db.collection('notes');
    this.collection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    ).subscribe(notes => this.notes = notes);
  }

  showNote(note) {
    this.router.navigate(['/note', note.id]);
  }
}
