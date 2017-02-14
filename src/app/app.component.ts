import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title = 'app works!';
  wikidata: Array<any>;
  searchkey = 'Albert';
  constructor(private service: AppService) { }

  getWikiData(param) {
    this.service.searchData(param)
      .subscribe(
      data => this.wikidata = data.query.search,
      error => console.log(error)
      );
  }

  goToPage(title) {
    window.location.href = '//en.wikipedia.org/wiki/' + title;
  }

  goToRandomPage(){
    window.location.href = '//en.wikipedia.org/wiki/Special:Random';
  }

}
