import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Colleagues } from './app.component';

@Component({
  selector: 'app-colleagues-list',
  templateUrl: './colleagues-list.component.html',
  styleUrls: [],
})
export class ColleagesList implements OnInit {
  public url = '/api/colleagues';
  filteredCols;
  hiddenCnt: number;

  @Input()
  hiddenIds: number[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Colleagues[]>(this.url)
      .pipe(
        map((response) => {
          return this.filterCols(response, this.hiddenIds);
        }),
        tap((filteredAndHiddenCount) => {
          this.filteredCols = filteredAndHiddenCount.filteredCols;
          this.hiddenCnt = filteredAndHiddenCount.hidden;
        })
      )
      .subscribe();
  }

  // filter the colleagues
  filterCols(repsonse: Colleagues[], hiddenIds: number[]) {
    let filteredCols = [];
    let hidden = 0;

    repsonse.forEach((col) => {
      if (col && col.id && !hiddenIds.findIndex((id) => id === col.id)) {
        hidden++;
      } else {
        filteredCols.push(col);
      }
    });
    return { filteredCols, hidden };
  }

  makeListLine(col: Colleagues) {
    return col.name + ' (' + col.skill + ')';
  }
}
