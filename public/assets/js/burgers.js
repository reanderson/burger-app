$(function() {

// Button to add new burger
$("#newBurger").on("submit", function(event) {
  event.preventDefault()
  $("#valid").empty()

  if ($("#burger_name").val().trim() === "") {
    $("#valid").text("Please enter a burger")
    return false;
  }

  const newBurger = {
    burger_name: $("#burger_name").val().trim()
  }

  // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(
    function() {
      console.log(`Inserted Burger: ${newBurger.burger_name}`);
      // Reload the page to get the updated list
      location.reload();
    })
})

// Button to eat a burger
$(".eatBurger").on("click", function() {
  const id = $(this).data("id")

  // Send the PUT request.
  $.ajax("/api/burgers/" + id, {
    type: "PUT"
  }).then(
    function() {
      console.log("burger eaten");
      // Reload the page to get the updated list
      location.reload();
    }
  );
})


})