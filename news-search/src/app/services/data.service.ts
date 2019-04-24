import { Http, Response} from '@angular/http';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import example from '../../assets/example.json';
import { JqueryService } from './jquery.service';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { Router, NavigationStart } from '@angular/router';
import { RouterModule, Routes} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Query, NytQuery } from '../classes/query';



@Injectable()
export class DataService {
newsData: Observable<any>;
singleArticle;
query;
news_desk;
page;
formattedForDisplayQuery;
httptest;
public serverWithApiUrl;
private actionUrl: string;
public queryObjectNYC = new NytQuery('', '');


  constructor(
    private http: Http,
    private _jq: JqueryService,
    private _router: Router,
    private _route: ActivatedRoute,
    ) {
      this.query = '';
      this.formattedForDisplayQuery = '';
    }


  public getAllNews(querypassed, news_deskVal, pageVal) {
    this.newsData = null;
    this.formattedForDisplayQuery = this.capitalText(querypassed);
    this.news_desk = news_deskVal;
    this.news_desk = this.formatQuery(news_deskVal);
    this.query = this.formatQuery(querypassed);
    this.page = pageVal;
    console.log(this.query);
    this.serverWithApiUrl = this.queryObjectNYC.createQuery(this.query, news_deskVal, this.page);
    console.log(this.query);
      setTimeout(() => this._router.navigateByUrl('/nytnews'), 2000 );
      return this.http.get(this.serverWithApiUrl)
        .subscribe((data: Response) => {
          this.newsData = data.json().response;
          console.log(data.json());
          console.log(this.newsData);
        });
}

public getPopularArticle(querypassed, news_deskVal, pageVal) {
  const serverWithApiUrl = this.queryObjectNYC.createQuery(querypassed, news_deskVal,  pageVal);
    return this.http.get(serverWithApiUrl)
      .subscribe((data) => {
        const res = data.json().response.docs;
        this.singleArticle = res[Math.floor(Math.random() * res.length)];
      });
}

 public formatQuery(query) {
   if (query !== undefined) {
    return query.replace(/ /g, '+');
   }
 }

 public capitalText(text) {
  text = text.replace(/(\b[a-z](?!\s))/g, function(x) {
    return x.toUpperCase();
  });
  return text;
 }
 
}
