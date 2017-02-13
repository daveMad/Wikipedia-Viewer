import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import './rxjs-extensions';

@Injectable()
export class AppService {
    api = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=';
    headers = new Headers();
    constructor(private http: Http) {
        this.headers.append('Origin','http://localhost:4200/');
    }

    searchData(params: string) {
        return this.http.get(this.buildQuery(params))
        .map((response : Response) => <any>response.json());
    }

    getSample() {
        return this.http
            .get('https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein',{
                headers: this.headers
            })
            .map((response: Response) => <any[]>response.json().data).do(data => console.log(data))
    }

    private buildQuery(title: string){
        return this.api + title+'&origin=*';
    }
}