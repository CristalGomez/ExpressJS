var path = require("path");
var destinationsData = require("../data/destinationsData.js")

module.exports = function(app){
    app.get("/api/destinations", function(req,res){
        res.json(destinations)
    })

app.post("/api/destinations", function(req, res){
    var userInput = req.body;
    var userScore = userInput.scores;

    var matchLocation = "";
    var matchImg = "";
    var matchNum = 10000
    //looping through res.json(destinations)
    for (var i = 0; i < destinations.length; i++){
        var diff = 0;
        for (var x = 0; x < userScore.length; x++){
            //math.abs returns the absolute value of a number --- prevents the computer from analyzing a negative number

            //diff = diff(0) + abs of looping through destinations' scores at x - user's score at x(their total added up)
            diff += (Math.abs(parseInt(destinations[i].scores[x] - parseInt(userScore[x]))))

            if (diff < matchNum){
                matchNum = diff;
                matchLocation = destinations[i].location;
                matchImg = destinations[i].image
            }//end of if condition
        }//end of for loop [x]

    } //end of for loop [i]
    destinations.push(userInput);
    var nextDes = destinations[matchNum];
    res.json(nextDes)

}); //end of app.post

};