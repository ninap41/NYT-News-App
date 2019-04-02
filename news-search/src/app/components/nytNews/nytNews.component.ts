import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { fadeAnimation} from '../../animate';
import { JqueryService } from '../../services/jquery.service';
import { DataService } from '../../services/data.service';

// viceNews
// 0a2cfc324b1b4b2681bca7de27305353
// https://newsapi.org/v2/top-headlines?sources=vice-news&apiKey=0a2cfc324b1b4b2681bca7de27305353
declare var $: any;

@Component({
  selector: 'app-nytnews',
  templateUrl: './nytNews.component.html',
  styleUrls: ['./nytNews.component.scss'],
  animations : [
    fadeAnimation
  ]
})
export class NytNewsComponent implements OnInit {
char;
data;
items;
imgtest;
values;
private actionUrl: string;


  constructor(
    private _jq: JqueryService,
    private _ds: DataService,
    private http: HttpClient ) {
    }


  ngOnInit() {
    this._ds.getAllNews(this._ds.query, this._ds.news_desk, this._ds.page);
  }

  stateHandler(stateString) {
  }


  onEnter(box) {

  }
}
