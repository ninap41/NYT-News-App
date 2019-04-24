

export class Query {
    baseURL: string;
    apiKey: string;
    finalConcatURL: string;
    constructor(_baseURL: string, _apiKey: string)  {
        this.baseURL = _baseURL;
        this.apiKey = _apiKey;
    }
}

export class NytQuery extends Query {
    constructor(
        _baseURL: string = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?', 
        _apiKey: string = '&api-key=V9AatSDViVuWKGhb35hv6EBQIKphCn7J') {
        super( _baseURL, _apiKey);
    }

    public createQuery(querypassed, news_deskVal, pageVal) {
        const q = new NytQuery();
            console.log(q);
        pageVal === undefined ? pageVal = 1 : pageVal = pageVal;

        q.finalConcatURL = q.baseURL  + '&q=' + querypassed;
            if (news_deskVal === undefined || news_deskVal === 'Choose...') {
                q.finalConcatURL +=  `&page=` + pageVal + q.apiKey;
            }  else {
                q.finalConcatURL +=  `&page=` + pageVal + `&fq=news_desk:("` + news_deskVal + `")` + q.apiKey;
            }
        console.log(q.finalConcatURL);
        return q.finalConcatURL;
    }
}
