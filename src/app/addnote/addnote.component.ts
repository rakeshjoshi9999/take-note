import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {

  title;
  description;

  collection: AngularFirestoreCollection;

  constructor(private db: AngularFirestore, private router: Router) {
    this.collection = db.collection('notes');
  }

  ngOnInit() {
  }
  addNote() {
    const data = {
      title: this.title,
      description: this.description
    }
    this.collection.add(data).then(() => {
      this.router.navigateByUrl('notes')
    }).catch(err => console.log('Err: ', err))
  }

}
