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
  wikidata: any[];

  constructor(private service: AppService) { }

  getWikiData(param) {
    this.service.searchData(param)
      .subscribe(
      data => this.wikidata = data,
      error => console.log(error)
      );
  }

}
