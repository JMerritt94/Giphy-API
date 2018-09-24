var animalArray = ["dog", "cats", "fish", "shark", "monkey", "ferret", "squirrel"]
var q = "";


function startPage(){
    $("#gifbuttons").empty();
for (var i = 0; i < animalArray.length; i++) {
    var animalButton = $("<button>");
    animalButton.addClass("animal");
    animalButton.attr("data-animal",animalArray[i]);

    // add image inside button
    animalButton.append(animalArray[i]);

    $("#gifbuttons").append(animalButton)
}}

// $("button.animal").on("click", function () {

 function showGifs(){
    var animal = $(this).attr("data-animal");
    

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=gS8Kpc3UURIUDXRISwsCqXzC5kx3iu1c";

    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            
            $("#animal-gifs").empty();
         console.log(queryURL);

            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;
            for (var i = 0; i < 10; i++) {
                var animalDiv = $("<div class='animal'>");

                var p = $("<p>").text("Rating: " + results[i].rating);


                var animalImage = $("<img>");

                animalImage.attr("src", results[i].images.fixed_height.url);


                animalDiv.append(p);
                animalDiv.append(animalImage);
               
                $("#animal-gifs").prepend(animalDiv);


            }
        })
}

$("button#submit").on("click", function () {
    q = $("#query").val().trim();
    console.log(q);
animalArray.push(q);
console.log(animalArray)
startPage();
})
$(document).on("click", ".animal", showGifs);

startPage();