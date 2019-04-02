import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NytNewsComponent } from './components/nytNews/nytNews.component';
import { HomepageComponent } from './components/homepage/homepage.component';


const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full'  },
  { path: 'nytnews', component: NytNewsComponent, pathMatch: 'full'  },
];




@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
