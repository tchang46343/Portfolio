$(".projects").on("click", function(event){
    event.preventDefault();
    
    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 10);
    
});

$(".aboutMe").on("click", function(event){
    event.preventDefault();
    
    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 50);
    
});