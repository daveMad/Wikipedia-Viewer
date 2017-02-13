import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {
    api = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=';

    constructor(private http: Http) {

    }

    searchData(params: string) {

    }

    getSample() {
        return this.http
            .get('https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein')
            .map((response: Response) => <any[]>response.json().data).do(data => console.log(data))
    }

    private buildQuery(title: string){
        return this.api + title;
    }
}