var destinationsData = require("../data/destinationsData")

module.exports = function(app){
    app.get("/api/destinations", function(req,res){
        res.json(destinationsData)
    })
};

app.post("/api/destinations", function(req, res){
    destinationsData.push(req.body)
});

