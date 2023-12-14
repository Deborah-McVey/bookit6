import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookit6';

  pageDisplayed = "bookshelf"

  onNavigatePage(page: string) {
    this.pageDisplayed = page;
  }
}
