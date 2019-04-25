import { Http, Response} from '@angular/http';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators'; import 'rxjs/operators/map';

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
randArticle: Observable<any>;
singleArticle:  Observable<any>;
query;
news_desk;
page;
formattedForDisplayQuery;
httptest;

public serverWithApiUrl;
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
    console.log(this.serverWithApiUrl);
      setTimeout(() => this._router.navigateByUrl('/nytnews'), 2000 );
      return this.http.get(this.serverWithApiUrl)
        .subscribe((data: Response) => {
          this.newsData = data.json().response;
          console.log(data.json());
          console.log(this.newsData);
        });
}

public getArticle(querypassed, news_deskVal, pageVal, string_for_elements, random: boolean) {
  const _this = this;
  const serverWithApiUrl = this.queryObjectNYC.createQuery(querypassed, news_deskVal, pageVal);
    _this._jq.fadeOut(string_for_elements);
    return  _this.http.get(serverWithApiUrl)
        .subscribe((data: Response) => {
          const res = data.json().response.docs;
          _this.randArticle = res[Math.floor(Math.random() * res.length)];
        },
          (err) => console.error(err),
          () => ( _this._jq.fadeOut(string_for_elements),
                  _this._jq.fadeIn(string_for_elements)
          )
        );

}

showArticlePage(obj) { // object, and random boolean
  //single query maker 
  // https://api.nytimes.com/svc/search/v2/articlesearch.json?&_id=5cc0f43a49f0eacbf1f87447&api-key=V9AatSDViVuWKGhb35hv6EBQIKphCn7J
  console.log(obj);
  this.singleArticle = obj;
  setTimeout(() => this._router.navigateByUrl('/showArticle'), 2000);
  return;
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
