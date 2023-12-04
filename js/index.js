function openNav(){
    $(".menubar").css("display","block");
    if( $(".opennav").css ("left","20%")){
       
        $(".opennav").click( function(){

            closeNav();
            $(".opennav").css ("left","2%");
        });
    }
 
    
}


function closeNav(){
    $(".menubar").css("display","none");
    $(".opennav").css ("left","2%");
   
}
$("h2").click(function(eventInfo){
    $(eventInfo.target).siblings().slideToggle();

    $(".singer div").not($(eventInfo.target).next()).slideUp(500);
})
;

// let singernum=$(".singer-num")
// let singerinfo=$(".singer-info")
//     singernum.click(function(eventInfo){
//         $(eventInfo.target).siblings(singerinfo).slideToggle();

     
//     })

       // for(let i=0;i<singernum.length;i++){}
        // $(eventInfo.target).eq(0).siblings(singerinfo).eq(0).slideToggle();
        // $(eventInfo.target).eq(i).siblings(singerinfo[i]).slideToggle();
         // $(eventInfo.target).siblings(singerinfo[2]).slideToggle();
        // $(eventInfo.target).siblings(singerinfo[3]).slideToggle();




// function countdown() {
//     var now = new Date(); 
//     var partyDate = new Date(2024, 3,25);
//     var remTime = partyDate -  now ;
//     var s = Math.floor(remTime / 1000);
//     var m = Math.floor(s / 60);
//     var h = Math.floor(m / 60);
//     var d = Math.floor(h / 24)-30 ;
//     h %= 24;
//     m %= 60;
//     s %= 60;
//      $("#days").html( "<h3>" + d + " D" + "</h3>");
//      $("#days").html( "<h3>" + d + " D" + "</h3>");
// 	 $("#hours").html( "<h3>" + h + " h" + "</h3>");
//      $("#minutes").html( "<h3>" + m + " m" + "</h3>");
// 	 $("#seconds").html( "<h3>" + s + " s" + "</h3>");		
//         setTimeout(countdown, 1000);
//         }
        
//         countdown();


        window.onload = function() {
   
            countDownToTime("10 october 2025 9:56:00");
          }
        
          function countDownToTime(countTo) {
          
                let futureDate = new Date(countTo);
            futureDate = (futureDate.getTime()/1000);
        
            let now = new Date();
            now = (now.getTime()/1000);
        
            timeDifference = (futureDate- now);
                
           let days = Math.floor( timeDifference / (24*60*60));
           let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
           let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
           let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
        
        
           $("#days").html(`${days} D`);
           $("#hours").html(`${hours} h`);
           $("#minutes").html(`${ mins } m`);
           $("#seconds").html(`${ secs} s`)
        
          
            setInterval(function() {  countDownToTime(countTo); }, 1000);
          }




// var maxLength = 100;
// $('textarea').keyup(function() {
//   var textlen = maxLength - $(this).val().length;
//   $('#char').text(textlen);

// });

var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});
