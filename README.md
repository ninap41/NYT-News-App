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

