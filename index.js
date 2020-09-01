const cheerio = require('cheerio')
const request = require('request-promise');

async function init(){
   const $ = await request({
       uri: 'http://quotes.toscrape.com/',
       transform: body => cheerio.load(body)
   })
  const title = $('title');
  const heading = $('h1')
  const quotes = $('.quote').find('a')
  const Secondquote = $('.quote').next()
  const thirdquote = $('.quote').next().next()
  const container = $('.row .col-md-8').parent().next()
  /* const allText = $('.quote span.text').each((i,el) => {
      /* console.log(i, $(el).text()) */
      /* const quote_text = $(el).text()
      const quote = quote_text.replace(/(^\“|\”$)/g,"")
      console.log(quote)
  }) */

  $('.quote').each((i,el) => {
      
  })
  

}



init()