import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-nytshow-article',
  templateUrl: './nytshow-article.component.html',
  styleUrls: ['./nytshow-article.component.scss']
})
export class NYTshowArticleComponent implements OnInit {
article: Observable<any>;
  constructor(
    private _ds: DataService
  ) {
    this.article = this._ds.singleArticle;


  }

  ngOnInit() {

  }

}
