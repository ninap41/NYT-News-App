# News Search Api

A news app  created with Typescript Classes, Angular, Bootstrap, Font-Awesome, and SCSS calling the NYT API (.subscribe(), .map())  to filter down JSON data with article information and display them asynchronously based on three of parameters in the URL. Uses script formatting functions and Services for Data as well as Jquery.

`query`
`news_desk`
`page number`

### Url Example

`https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=Dumb+News&page=0&fq=news_desk:("Politics")&api-key=V9AatSDViVuWKGhb35hv6EBQIKphCn7J`

response of first article main title:

`main: "President Dumb and Dumber"`

Contains a Query class with a NYT subclass to create dynamic calls potentially different API news services

Potential Development Ideas:

- Vice news... Washington Post


- Sync up to Firebase (or maybe use MongoDB) to create `Users` that can pin articles as `Forum` topics. From there, other users can share `comments`  on Forum Topics

- Create User Dashboard, where the user can filter down their favorite news sources by   `news_desk`  type and view curated content when logging in.

![](dumbnews.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g c component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
