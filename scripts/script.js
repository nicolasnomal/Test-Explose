$('#menu').on('click',function(){

    $('#menumodal').fadeIn(600);
    $('#defaultmain').fadeOut(600);
    $('#menu').fadeOut(200);
    $('#close').fadeIn(200);
   
 
});

$('#close').on('click',function(){

    $('#menumodal').fadeOut(600);    
    $('#defaultmain').fadeIn(600);

    $('#menu').fadeIn(200);
    $('#close').fadeOut(200);
   
   
});

$('#accept').on('click',function(){

    $('#cookiepolicy').fadeOut(200);    
  
});