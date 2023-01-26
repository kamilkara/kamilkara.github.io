
function hideDiv(clicked_id) {
    //alert(clicked_id)
    var divIDhenlow = document.getElementById("henlowAcademy")
    var divIDqueens = document.getElementById("queensRoad")

    if (clicked_id === "button2") {
      if (divIDhenlow.style.display === "block") {
        divIDhenlow.style.display = "none"
        divIDqueens.style.display = "block"
        document.getElementById("button1").style.backgroundColor = "white";
        document.getElementById("button2").style.backgroundColor = "red";
      }
    } else if (clicked_id === "button1") {
      if (divIDhenlow.style.display === "none") {
        divIDhenlow.style.display = "block"
        divIDqueens.style.display = "none"
        document.getElementById("button2").style.backgroundColor = "white";
        document.getElementById("button1").style.backgroundColor = "red";
      }
    }
}
