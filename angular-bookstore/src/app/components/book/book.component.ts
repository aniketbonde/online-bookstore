import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/common/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books : Book[]

  constructor(private _bookService : BookService) { }

  ngOnInit(): void {
    this.listBooks();
  }

  listBooks(){
    this._bookService.getBooks().subscribe(
      data => {this.books = data,console.log(this.books)}
    )
  }

}
