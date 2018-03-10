var cheerio = require('cheerio');
var request = require('request');
var url = 'https://internshala.com/internships/javascript%20development-internship/';
    request(url,(error,response,html)=>{
            var $ = cheerio.load(html);
            var item = $('#internship_list_container').children();
            res.send(item);
            
    });
