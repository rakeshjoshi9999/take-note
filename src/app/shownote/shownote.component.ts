import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shownote',
  templateUrl: './shownote.component.html',
  styleUrls: ['./shownote.component.scss']
})
export class ShownoteComponent implements OnInit {
  collection: AngularFirestoreCollection;
  note;
  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const ref = this.db.collection('notes').doc(id);
    ref.get().subscribe((doc) => this.note = doc.data());
  }

}
