var path = require("path");
var destinationsData = require("../data/destinationsData.js")

module.exports = function(app){
    app.get("/api/destinations", function(req,res){
        res.json(destinations)
    })

app.post("/api/destinations", function(req, res){
    var userInput = req.body;
    var userScore = userInput.scores

    var scoreDiff = 1000;

    for (var i = 0; i < destinations.length; i++){
        for (var x = 0; x < userInput.length; x++){
            var compareScores = (Math.abs(destinations[i].scores) - (userScore[x]))
        }

    }

}); //end of app.post

};