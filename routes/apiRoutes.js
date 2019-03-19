var path = require("path");
var destinationsData = require("../data/destinationsData.js")

module.exports = function(app){
    app.get("/api/destinations", function(req,res){
        res.json(destinationsData)
    })

app.post("/api/destinations", function(req, res){
    var match = {
        location: "",
        image: "",
        matchDifference: Infinity
    }
    //the user's survey results being parsed
    var userInput = req.body;
    var userScore = userInput.scores

    var scoreDifference;
    //looping through all the matches in the db
    for (var i = 0; i < destinationsData.length; i++){
        var destination = destinationsData[i];
        totalDifference = 0;

        for (var x = 0; x < destination.scores.length; x++){
            var destinationScore = destination.scores[x];
            var userScores = userScores[x];

            totalDifference += Math.abs(parseInt(userScores) - parseInt(destinationScore))
        }

        if (totalDifference <= match.matchDifference){
            match.location = destination.location;
            match.image = destination.image;
            match.matchDifference = totalDifference;
        }
    }
    destinations.push(userInput)
    res.json(match)

}); //end of app.post

};