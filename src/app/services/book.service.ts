import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { det } from '../detail.model';
import { Observable } from 'rxjs';
import { IBook } from '../book.model';
import { NgForm } from '@angular/forms';
import { veh } from '../vehicle.model';
import { quar } from '../quar.model';
import { a12 } from 'src/hiru.model';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private firestore: Firestore) { }
  addBook(book: IBook) {
    const booksRef = collection(this.firestore, 'Bank'); 
    return addDoc(booksRef, book);
  }
  getBooks(): Observable<IBook[]> {
    const booksRef = collection(this.firestore, 'Bank');
    return collectionData(booksRef, { idField: 'id' }) as Observable<IBook[]>;
  }
  getBooks4(): Observable<a12[]> {
    const booksRef = collection(this.firestore, 'users');
    return collectionData(booksRef, { idField: 'id' }) as Observable<a12[]>;
  }
  getBooks1(): Observable<det[]> {
    const booksRef1 = collection(this.firestore, 'Details');
    return collectionData(booksRef1, { idField: 'id' }) as Observable<det[]>;
  }
  deleteBook(book: IBook) {
    const bookDocRef = doc(this.firestore, `Bank/${book.id}`);
    return deleteDoc(bookDocRef);
  }
  deleteBook1(book: det) {
    const bookDocRef = doc(this.firestore, `Details/${book.id}`);
    return deleteDoc(bookDocRef);
  }
  getBookByID(id: string) {
    const bookRef = doc(this.firestore, `Bank/${id}`);
    return docData(bookRef, { idField: 'id' }) as Observable<IBook>;
  }
  getBookByID1(id: string) {
    const bookRef12 = doc(this.firestore, `Details/${id}`);
    return docData(bookRef12, { idField: 'id' }) as Observable<det>;
  }
  
  updateBook(book: IBook) {
    const bookDocRef = doc(this.firestore, `Bank/${book.id}`);
    return setDoc(bookDocRef, book);
  }
  updateBook1(book: det) {
    const bookDocRef = doc(this.firestore, `Details/${book.id}`);
    return setDoc(bookDocRef, book);
  }
  
  modifyBookPrice(book: IBook, account: string) {
    const bookDocRef = doc(this.firestore, `Bank/${book.id}`);
    return updateDoc(bookDocRef, { account : account });
  }
  addB(book: veh) {
    const booksRef = collection(this.firestore, 'Vehicle'); 
    return addDoc(booksRef, book);
  }
  addQ(book : quar){
    const booksRef = collection(this.firestore, 'Quarter'); 
    return addDoc(booksRef, book);
  }
  addd(book : det){
    const booksRef = collection(this.firestore, 'Details'); 
    return addDoc(booksRef, book);
  }

}
