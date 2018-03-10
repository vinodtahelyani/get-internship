//todo 1
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
var rp = require('request-promise');

app.use(express.static(__dirname+'/views/public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html');
});

app.get('/scrape',(req,res)=>{
    var items = {};
    var url = 'https://internshala.com/internships/javascript%20development-internship/';
    internship_list_container = [];
    var url2 = 'http://www.letsintern.com/internships?search=nodejs';
    rp(url).then((html)=>{
        var $ = cheerio.load(html);
        var internship_list_container = [];
        $('.individual_internship').each(function(ele){
            var item = {
                header : {
                    title:$('.individual_internship_header .table-cell',this).children().children().html(),
                    company:$('.individual_internship_header .table-cell',this).children().next().children().html(),
                    link:$('.individual_internship_header .table-cell h4',this).children().attr('href'),
                    location:$('.individual_internship_details span',this).next().children().html(),
                },
                detials:{
                    
                    start_date:$('.individual_internship_details table #start-date-first',this).html(),
                    duration:$('.individual_internship_details table',this).children().next().children().children().next().html(),
                    stipend:$('.individual_internship_details table .stipend_container_table_cell',this).text(),
                    posted_on:$('.individual_internship_details table',this).children().next().children().children().eq(3).html(),
                    apply_by:$('.individual_internship_details table',this).children().next().children().children().eq(4).html(),
                    type:$('.full-time-container',this).text().trim(),  
                }                  
            };
                internship_list_container.push(item);               
        });
        items.internshala = {
            internships:internship_list_container
        };
        return rp(url2);
    }).then((html)=>{
        var $ = cheerio.load(html,{
            normalizeWhitespace: true
        });
        $('.single-job-card','#main-jobs').each(function(){
            var item = {
                header : {
                    title:$('.job-title h4',this).html(),
                    company:$('.company-name a',this).html(),
                    link:$('.job-title h4',this).parent().attr('href'),
                    location:$('.job-locations a',this).html(),
                },
                detials:{
                    
                    start_date:$('.job-info ul li a',this).eq(2).text(),
                    apply_by:$('.job-application-deadline',this).text().trim(),
                    stipend:$('.job-info ul li a',this).eq(1).text()
                }                  
            };
        internship_list_container.push(item);
        });
        items.letsintern = {
            internships:internship_list_container
        };
        res.json(items);       
    }).catch((err)=>{
        res.status(500).send();
    });
});


app.listen(3000,'localhost');