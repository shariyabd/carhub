
// toggle navbar 

$(document).ready(function(){
    $('.side-bar').click(function(){
        console.log('clicked')
        $('nav .nav-items').toggleClass('active')
        $('.side-bar i').toggleClass('active')
    })
})