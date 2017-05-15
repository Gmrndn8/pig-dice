//BS logic


//UI logic
$(document).ready(function() {
  var result = 0;
  var yourscore = 0;
  var myarray = [1, 2, 3, 4, 5, 6];
  $("input#btnSearch").click(function() {

    var random1 = myarray[Math.floor(Math.random() * myarray.length)];

    result += random1;
    if (random1 === 1) {
      alert("Sorry you rolled a '1'. Hand over the mouse");
      result = 0;
    }
    $("span#message").text(random1);
    $("span#thisRound").text(result);


    $("input#endTurn").click(function() {

      yourscore += result;

      $("span#your-score").text(yourscore);
      if (yourscore >= 100) {
        alert("You win Player 1");
      }

      result = 0;
      $("span#message").empty();
      $("span#thisRound").empty();
    });
  });
  result = 0;
  var result1 = 0;
  var opponentscore = 0;

  $("input#btnSearch1").click(function() {

    var random2 = myarray[Math.floor(Math.random() * myarray.length)];

    var temp = $("span#message1");
    result1 += random2;
    if (random2 === 1) {
      alert("Sorry you rolled a '1'. Hand over the mouse");
      result1 = 0;
    }
    $("span#message1").text(random2);
    $("span#thisRound1").text(result1);
    $("input#endTurn1").click(function() {

      opponentscore += result1;

      $("span#opponent-score").text(opponentscore);
      if (opponentscore >= 100) {
        alert("You win Player 2");
      }

      result1 = 0;
      $("span#message1").empty();
      $("span#thisRound1").empty();
    });
  });
});
