import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Collegues {
  name: String;
  skill: any;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public url = '/api/colleagues';

  constructor(http: HttpClient) {}

  ngOnInit() {
    this.http.get<Colleagues[]>(this.url);
  }
  name = 'Angular';
}
