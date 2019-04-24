import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NYTshowArticleComponent } from './nytshow-article.component';

describe('NYTshowArticleComponent', () => {
  let component: NYTshowArticleComponent;
  let fixture: ComponentFixture<NYTshowArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NYTshowArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NYTshowArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
