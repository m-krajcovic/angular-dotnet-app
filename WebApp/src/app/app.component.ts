import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void { }

  myData: Array<any>;

  constructor(private http: Http) {

    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(res => this.myData = res);
  }
}