$(document).ready(function(){
    $(".login").click(function(){
     $("#Modal-register").show();
    });
   
    var total_cart=0;
    $("#add1").click(function(){
      var p1 =$("#snack1-price span").text();
      var n1 =$("#snack1-name").text();
      var q1 =$("#snack1-quantity").val();
      var t1 = parseInt(p1) * parseInt(q1);
      var row1="<tr><td>"+ n1 +"</td><td>"+ p1 +"</td><td>" + q1 + "</td><td>" + t1 + "</td> <td> </td> </tr>";
      
      $("table").append(row1);
      total_cart = parseInt(total_cart) + parseInt(q1);
      $("#all-total").text(total_cart);
    });
  
    $("#add2").click(function(){
      var p2 =$("#snack2-price span").text();
      var n2 =$("#snack2-name").text();
      var q2 =$("#snack2-quantity").val();
      var t2 = parseInt(p2) * parseInt(q2);
      var row2="<tr><td>"+ n2 +"</td><td>"+ p2 +"</td><td>" + q2 + "</td><td>" + t2 + "</td> <td> </td> </tr>";
      $("table").append(row2);
      total_cart = parseInt(total_cart) + parseInt(q2);
      alert(q2);
      $("#all-total").text(total_cart);
    });
  
    $("#add3").click(function(){
      var p3 =$("#snack3-price span").text();
      var n3 =$("#snack3-name").text();
      var q3 =$("#snack3-quantity").val();
      var t3 = parseInt(p3) * parseInt(q3);
      var row3="<tr><td>"+ n3 +"</td><td>"+ p3 +"</td><td>" + q3 + "</td><td>" + t3 + "</td> <td> </td> </tr>";
      
      $("table").append(row3);
    });
  
    $("#add4").click(function(){
      var p4 =$("#snack4-price span").text();
      var n4 =$("#snack4-name").text();
      var q4 =$("#snack4-quantity").val();
      var t4 = parseInt(p4) * parseInt(q4);
      var row4="<tr><td>"+ n4 +"</td><td>"+ p4 +"</td><td>" + q4 + "</td><td>" + t4 + "</td> <td> </td> </tr>";
      
      $("table").append(row4);
    });
  
    $("#add5").click(function(){
      var p5 =$("#snack5-price span").text();
      var n5 =$("#snack5-name").text();
      var q5 =$("#snack5-quantity").val();
      var t5 = parseInt(p5) * parseInt(q5);
      var row5 ="<tr><td>"+ n5 +"</td><td>"+ p5 +"</td><td>" + q5 + "</td><td>" + t5 + "</td> <td> </td> </tr>";
  
      $("table").append(row5);
    });
   
  
    $("#add6").click(function(){
      var p6 =$("#snack6-price span").text();
      var n6 =$("#snack6-name").text();
      var q6 =$("#snack6-quantity").val();
      var t6 = parseInt(p6) * parseInt(q6);
      var row6 ="<tr><td>"+ n6 +"</td><td>"+ p6 +"</td><td>" + q6 + "</td><td>" + t6 + "</td> <td> </td> </tr>";
      
      $("table").append(row6);
    });
  
   
    
  
    
  
      
    
      
      
      
    
  
  
  
  
  });