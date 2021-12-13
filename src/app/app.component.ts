import { Component } from '@angular/core';

export interface Colleagues {
  id: number;
  name: String;
  skill: any;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  public hiddenColleagues = [11, 12];
}
