 //canavas clock
 var canvas = document.getElementById("canvas");
 var ctx = canvas.getContext("2d");
 var radius = canvas.height / 2;
 ctx.translate(radius, radius);
 radius = radius * 0.90
 setInterval(drawClock, 1000);

 function drawClock() {
   drawFace(ctx, radius);
   drawNumbers(ctx, radius);
   drawTime(ctx, radius);
 }

 function drawFace(ctx, radius) {
   var grad;
   ctx.beginPath();
   ctx.arc(0, 0, radius, 0, 2*Math.PI);
   ctx.fillStyle = 'white';
   ctx.fill();
   grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
   grad.addColorStop(0, '#333');
   grad.addColorStop(0.5, 'white');
   grad.addColorStop(1, '#333');
   ctx.strokeStyle = grad;
   ctx.lineWidth = radius*0.1;
   ctx.stroke();
   ctx.beginPath();
   ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
   ctx.fillStyle = '#333';
   ctx.fill();
 }

 function drawNumbers(ctx, radius) {
   var ang;
   var num;
   ctx.font = radius*0.15 + "px arial";
   ctx.textBaseline="middle";
   ctx.textAlign="center";
   for(num = 1; num < 13; num++){
     ang = num * Math.PI / 6;
     ctx.rotate(ang);
     ctx.translate(0, -radius*0.85);
     ctx.rotate(-ang);
     ctx.fillText(num.toString(), 0, 0);
     ctx.rotate(ang);
     ctx.translate(0, radius*0.85);
     ctx.rotate(-ang);
   }
 }

 function drawTime(ctx, radius){
   var now = new Date();
   var hour = now.getHours();
   var minute = now.getMinutes();
   var second = now.getSeconds();
   //hour
   hour=hour%12;
   hour=(hour*Math.PI/6)+
   (minute*Math.PI/(6*60))+
   (second*Math.PI/(360*60));
   drawHand(ctx, hour, radius*0.5, radius*0.07);
   //minute
   minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
   drawHand(ctx, minute, radius*0.8, radius*0.07);
   // second
   second=(second*Math.PI/30);
   drawHand(ctx, second, radius*0.9, radius*0.02);
 }

 function drawHand(ctx, pos, length, width) {
   ctx.beginPath();
   ctx.lineWidth = width;
   ctx.lineCap = "round";
   ctx.moveTo(0,0);
   ctx.rotate(pos);
   ctx.lineTo(0, -length);
   ctx.stroke();
   ctx.rotate(-pos);
 }




$(Document).ready(function(){
  /* modal - login on load body
 $("#Modal-login").modal('show');
 $("a.login").click(function(){
 $("#Modal-login").show();
 }); */


 // add cart -- snacks section--
 var total_cart = 0;
  var total_price = 0 ;
  $(".add1").click(function(){
    var p1 = $(this).parent().find(".snack-price span").text();
    var n1 = $(this).parent().find(".snack-name").text();
    var q1 = $(this).parent().find(".snack-quantity").val();
    var remove = "<button class='remove'> X </button>";
    var t1 = parseInt(p1) * parseInt(q1); 
    var row1="<tr class='new'><td>"+ n1 + "</td><td>"+ p1 +"</td><td class='quantity-items'>" + q1 + "</td ><td class='price-items'>" + t1 + "</td> <td> "+ remove +"</td> </tr>"  ;
    $("table tbody").append(row1);
     total_cart = parseInt(total_cart) + parseInt(q1);
    $(".badge").text(total_cart) ;  
    total_price = parseInt(total_price) + parseInt(t1);
    $(".total-price-items").text("Total Price Is:  " + total_price +"$") ;

       
  });
   
   
  // remove items ..... snacks
  $("table tbody").on("click", ".remove", function(){
    var t1_rem = $(this).closest("tr").find(".price-items").text(); 
    var q1_rem = $(this).closest("tr").find(".quantity-items").text(); 
    $(this).closest("tr").remove();
      
    total_price = parseInt(total_price) - parseInt(t1_rem);
    total_cart = parseInt(total_cart) - parseInt( q1_rem);
    $(".total-price-items").text("Total Price Is:  " + total_price +"$") ;
    $(".badge").text(total_cart) ; 

  });



  // add cart -- meals section--
 var total_cart2 = 0;
 var total_price2 = 0 ;
 $(".add2").click(function(){
   var p2 = $(this).parent().find(".meal-price span").text();
   var n2 = $(this).parent().find(".meal-name").text();
   var q2 = $(this).parent().find(".meal-quantity").val();
   var remove2 = "<button class='del'> X </button>";
   var t2 = parseInt(p2) * parseInt(q2); 
   var row2 ="<tr><td>"+ n2 + "</td><td>"+ p2 +"</td><td class='quantity2-items'>" + q2 + "</td><td class='price2-items'>" + t2 + "</td> <td> "+ remove2 +"</td> </tr>"  ;
   $("table tbody").append(row2);
    total_cart2 = parseInt(total_cart2) + parseInt(q2);
   $(".badge").text(total_cart2) ;  
   total_price2 = parseInt(total_price2) + parseInt(t2);
   $(".total-price-items").text("Total Price Is:  " + total_price2 +"$") ;
 });

  // remove items ..... meals
  $("table tbody").on("click", ".del", function(){
    var t2_rem = $(this).closest("tr").find(".price2-items").text(); 
    var q2_rem = $(this).closest("tr").find(".quantity2-items").text(); 
    $(this).closest("tr").remove();
      
    total_price2 = parseInt(total_price2) - parseInt(t2_rem);
    total_cart2 = parseInt(total_cart2) - parseInt( q2_rem);
    $(".total-price-items").text("Total Price Is:  " + total_price2 +"$") ;
    $(".badge").text(total_cart2) ; 

  });

  
 // go to top
  $("#up").click(function(){
  window.scrollTo(0,0)
  });
  
 //dark mode to body
 $(".darken").click(function(){
   $("body").toggleClass("dark-mode");
 });

 //typing ....................... carousel 
 var typed = new Typed('.type-carousel', {
  strings: ["Welcome We wish you to have great time with the most delicious dishes"],
  loop: true,
  startDelay: 3000,
  typeSpeed: 30
 });
 //typing ....................... about-header
 var typed1 = new Typed('.type', {
  strings: ["Thank you for choosing our restaurant"],
  loop: true,
  startDelay:5000,
  typeSpeed: 30
 });
  
 var typed2 = new Typed('.sending-msg', {
  strings: ["Send Us A Message"],
  startDelay: 6000,
  loop: true,
  typeSpeed: 30
 });

 
 

});



