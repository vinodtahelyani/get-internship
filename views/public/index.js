$(document).ready(function(){
    
    
    $.getJSON( "http://localhost:3000/scrape", function( intern ) {

        $('.ninternshalla').html(intern.internshala.internships.length);
        $('.nletsintern').html(intern.letsintern.internships.length);
        $('.nintern').html(0);
        
     for(var ele in intern.internshala.internships){
       $('.internshalla-internship-list').append(`<hr><div class="individual-internship"><div class="internship-header"><p class="title">${intern.internshala.internships[ele].header.title}</p><p class="company">${intern.internshala.internships[ele].header.company}</p><p class="location">${intern.internshala.internships[ele].header.location}</p> </div><div class="internship-body"><div class="stipend">${intern.internshala.internships[ele].detials.stipend}</div><div class="apply-by">${intern.internshala.internships[ele].detials.apply_by}</div><div class="start">${intern.internshala.internships[ele].detials.start_date}</div></div><div class="internship-footer"><div class="view">View</div><div class="visit">Visit</div></div></div>`);
     }
    
       for(var ele in intern.letsintern.internships){
        $('.letsintern-internship-list').append(`<hr><div class="individual-internship"><div class="internship-header"><p class="title">${intern.letsintern.internships[ele].header.title}</p><p class="company">${intern.letsintern.internships[ele].header.company}</p><p class="location">${intern.letsintern.internships[ele].header.location}</p> </div><div class="internship-body"><div class="stipend">${intern.letsintern.internships[ele].detials.stipend}</div><div class="apply-by">${intern.letsintern.internships[ele].detials.apply_by}</div><div class="start">${intern.letsintern.internships[ele].detials.start_date}</div></div><div class="internship-footer"><div class="view">View</div><div class="visit">Visit</div></div></div>`);
     }
    });

     $('.intern').click(function(){
        $('.yes').addClass('no');
        $('.yes').removeClass('yes');
        $('.intern').addClass('yes');
        $('.present').addClass('absent');
        $('.present').removeClass('present');
        $('.intern-internship-list').addClass('present');
        
     });
     $('.internshalla').click(function(){
        $('.yes').addClass('no');
        $('.yes').removeClass('yes');
        $('.internshalla').addClass('yes');
        $('.present').addClass('absent');
        $('.present').removeClass('present');
        $('.internshalla-internship-list').addClass('present');
        
     });
     $('.letsintern').click(function(){
        $('.yes').addClass('no');
        $('.yes').removeClass('yes');
        $('.letsintern').addClass('yes');
        $('.present').addClass('absent');
        $('.present').removeClass('present');
        $('.letsintern-internship-list').addClass('present');
     });
        
        
    
    
});