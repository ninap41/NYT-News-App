import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { RouterModule, Routes} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { trigger, animate, style, group, query, transition, state, stagger, keyframes } from '@angular/animations';
import { fadeAnimation} from './animate';

import { JqueryService } from './services/jquery.service';
import { DataService } from './services/data.service';
import example from '../assets/example.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [

    fadeAnimation,
  ],
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';

  constructor (
    private _jq: JqueryService,
    private _ds: DataService,
    private _router: Router,
    private _route: ActivatedRoute,

  ) {

  }

  getRouterState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';

  }

}
