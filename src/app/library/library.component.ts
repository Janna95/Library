import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LibraryService } from './library.service';
// import { BookComponent } from './book/book.component';

interface Library {
  title: string;
  author: string;
  year: number;
  quote: string;
  img?: string;
  id: number;
}

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})

export class LibraryComponent implements OnInit {
  public library: Library[];
  @Output() public booksAmount = new EventEmitter();
  public fromParent = "";
  public books: number;
  public book: object;
  /**
   * passCount
   */
  public passBooksAmount() {
    this.books = this.library.length;
    this.booksAmount.emit(this.books);
  }
  constructor(private libraryService: LibraryService ) { }

  ngOnInit(){
  
    this.libraryService
    .getLibrary()
    .subscribe((response: Library[]) => {
     
      this.library = response;
      // this.booksCount = this.library.length;
      console.log(this.library);
      // console.log(this.booksCount);
      // this.library.map(book => {
        
      //   this.bookCover = "./../../assets/bookCovers/" + book['img'];
    
      //   console.log(this.bookCover);
      // });
      
   
    })
  }
  
}

