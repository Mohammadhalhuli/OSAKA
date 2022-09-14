let homeHeight = $('#home').outerHeight();
console.log(homeHeight);
let y=$('#about').offset();
console.log(y);


$(window).scroll(function(){
    let x=$(window).scrollTop();
    console.log(x);
    /*if(x>=300){
        $('.navbar').addClass('bg-dark');
        $('.navbar').removeClass('bg-transparent');
    }
    else{
        $('.navbar').addClass('bg-transparent');
        $('.navbar').removeClass('bg-dark');;
    }
    */
       if(x>=homeHeight){
        $('.navbar').addClass('bg-dark');
        $('.navbar').removeClass('bg-transparent');
        $('.btn-up').fadeIn(1000);
    }
    else{
        $('.navbar').addClass('bg-transparent');
        $('.navbar').removeClass('bg-dark');
        $('.btn-up').fadeOut(1000)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         (1000);
    }
})

$('.btn-up').click(function(){
    $(window).  scrollTop(0);
   /* $(body,html).animate({
        scrollTop:0
    },3000);*/
})