import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { trigger, animate, style, group, query, transition, state, stagger, keyframes } from '@angular/animations';
import { fadeAnimation} from '../../animate';
import { DataService } from '../../services/data.service';
import { JqueryService } from '../../services/jquery.service';

import { $$ } from 'protractor';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public popular = {};
  constructor(
    private _ds: DataService,
    private _jq: JqueryService,

  ) { }

  ngOnInit() {
    this.updatePage();
  }

  updatePage() {
    this._ds.getPopularArticle('', 'Politics', '0', '.changeArt');
  }
}
