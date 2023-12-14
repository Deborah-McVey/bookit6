import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  @Output() currentSelectedBook = new EventEmitter<Book>();

  myBooks: Book[] = [];

  handleBookSelected(book: Book) {
    this.currentSelectedBook.emit(book);
  }
}
