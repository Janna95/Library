import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { LibraryService } from './library/library.service';
import { BookComponent } from './library/book/book.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';


@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    ModalComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [LibraryService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
