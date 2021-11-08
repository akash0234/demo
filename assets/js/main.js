
function calculateDate(range) {
  return new Date(Date.now() - (range-1)*24*60*60*1000);
}

function checkDatebetween(dateFrom, dateTo, dateCheck) {
  var d1 = dateFrom.split("-");
  var d2 = dateTo.split("-");
  var c = dateCheck.split("-");

  var from = new Date(d1[0], parseInt(d1[1])-1, d1[2]);  // -1 because months are from 0 to 11
  var to   = new Date(d2[0], parseInt(d2[1])-1, d2[2]);
  var check = new Date(c[0], parseInt(c[1])-1, c[2]);

  return check >= from && check <= to;
}


$(document).ready(function() {
    
    $("#maxDate").val(new Date().toISOString().slice(0, 10));
    $("#minDate").val(calculateDate(7).toISOString().slice(0, 10));

    $("#daysfilter").on("change", function(){
      $("#minDate").val(calculateDate($(this).val()).toISOString().slice(0, 10));
      $('#example').DataTable().destroy();
      $("#donut-chart").empty();
      $("#bar-chart").empty();
      initTable();
    });
  });
  

  function pieChart() {
    var paper = Raphael("pie-chart");
  paper.piechart(
    100, // pie center x coordinate
    100, // pie center y coordinate
    90,  // pie radius
     [18.373, 18.686, 2.867, 23.991, 9.592, 0.213], // values
     {
     legend: ["Windows/Windows Live", "Server/Tools", "Online Services", "Business", "Entertainment/Devices", "Unallocated/Other"]
     }
   );
  }