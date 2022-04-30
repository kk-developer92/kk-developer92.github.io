function sendcallback()
{

var data1 = $('#q1').val();
var data2 = $('#q2').val();

$.ajax({
 type: "POST",
 url: "sendcallback.php",
 data: "data1="+data1+"&data2="+data2,
                
success: function(html) {
 $("#result_sendcallback").empty();
 $("#result_sendcallback").append(html);
 $('#q2').val('');
}
        });

}


function sendcallback2()
{

var data3 = $('#q3').val();
var data4 = $('#q4').val();

$.ajax({
 type: "POST",
 url: "sendcallback2.php",
 data: "data3="+data3+"&data4="+data4,
                
success: function(html) {
 $("#result_sendcallback2").empty();
 $("#result_sendcallback2").append(html);
 $('#q4').val('');
}
        });

}


