import { Component, OnInit } from '@angular/core';
import { a12 } from 'src/hiru.model';
import { IBook } from 'src/app/book.model';
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  books: a12[] = [];
  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks4().subscribe((res: a12[]) => {
      this.books = res;
    })
  }

}
