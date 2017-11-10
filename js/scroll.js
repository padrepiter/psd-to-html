    $(document).scroll(function(){
     $('.myDiv').toggleClass('scrolled', $(this).scrollTop() > 5);
 });
