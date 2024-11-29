
const apiNews = async (req, res) => {
    try {
     

        //Example request
var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2024-11-20&' +
          'sortBy=popularity&' +
          'apiKey=98f2d859b8ca42ab8c6d43ee548012ee';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })


        return res.status(200).json({
            news: news
        })
    } catch (error) {
        console.log(error)
    }


}
module.exports = { apiNews };


//////$ npm install newsapi --save
// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('98f2d859b8ca42ab8c6d43ee548012ee');
// // To query /v2/top-headlines
// // All options passed to topHeadlines are optional, but you need to include at least one of them
// newsapi.v2.topHeadlines({
//   sources: 'bbc-news,the-verge',
//   q: 'bitcoin',
//   category: 'business',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
// });
// To query /v2/everything
// You must include at least one q, source, or domain
// newsapi.v2.everything({
//   q: 'bitcoin',
//   sources: 'bbc-news,the-verge',
//   domains: 'bbc.co.uk, techcrunch.com',
//   from: '2017-12-01',
//   to: '2017-12-12',
//   language: 'en',
//   sortBy: 'relevancy',
//   page: 2
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
// });
// // To query sources
// // All options are optional
// newsapi.v2.sources({
//   category: 'technology',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       sources: [...]
//     }
//   */
// });