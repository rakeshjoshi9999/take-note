import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-shownote',
  templateUrl: './shownote.component.html',
  styleUrls: ['./shownote.component.scss']
})
export class ShownoteComponent implements OnInit {
  collection: AngularFirestoreCollection;
  note;
  constructor(private db: AngularFirestore, private route: ActivatedRoute,private router:Router,
    private _snackBar: MatSnackBar) {
      
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const ref = this.db.collection('notes').doc(id);
    ref.get().subscribe((doc) => this.note = doc.data());
  }

      openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 2000,
      });
    }
  deleteNote(){
    const id = this.route.snapshot.paramMap.get('id');
    this.db.collection('notes').doc(id).delete().then(()=>{
      console.log('Deleted!');
      this.router.navigateByUrl('/notes');
      this.openSnackBar('Note Deleted successfully!', 'X')
    }).catch((e)=>{
      console.log('Error',e);
    });
  }

  goBack(){
    this.router.navigateByUrl('notes');
  }

}
