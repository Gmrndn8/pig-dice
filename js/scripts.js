//BS logic


//UI logic
$(document).ready(function() {
  var result = 0;
  var yourscore = 0;
  var myarray = [1, 2, 3, 4, 5, 6];
  $("input#btnSearch").click(function() {


    var random1 = myarray[Math.floor(Math.random() * myarray.length)];

    var temp = $("span#message");
    result += random1;

    $("span#message").text(random1);
    $("span#thisRound").text(result);


    $("input#endTurn").click(function() {

      yourscore += result

      $("span#your-score").text(result);

      $("span#message").empty();
      $("span#thisRound").empty();
    });
  });
  var result1 = 0;
  var yourscore1 = 0;

  $("input#btnSearch1").click(function() {

    var random2 = myarray[Math.floor(Math.random() * myarray.length)];

    var temp = $("span#message1");
    result1 += random2;

    $("span#message1").text(random2);
    $("span#thisRound1").text(result1);
    $("input#endTurn1").click(function() {

      var yourscore = parseInt($("span#opponent-score").val());

      $("span#opponent-score").text(result1);

      $("span#message1").empty();
      $("span#thisRound1").empty();
    });
  });
});
