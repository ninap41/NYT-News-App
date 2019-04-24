import { Component, OnInit } from '@angular/core';
import { JqueryService } from '../../services/jquery.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-ntysearch',
  templateUrl: './ntysearch.component.html',
  styleUrls: ['./ntysearch.component.scss']
})
export class NTYsearchComponent implements OnInit {

  constructor(
    private _jq: JqueryService,
    private _ds: DataService,
  ) { }

  ngOnInit() {
  }

  onSearch(queryVal, news_deskVal, pageVal) {
    this._ds.getAllNews(queryVal, news_deskVal, pageVal);
  }

}
