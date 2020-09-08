const express = require("express")
const https = require("https")

const app = express()

app.get("/", function (req, res) {
    const url = "https://api.unsplash.com/photos?q=dogs&client_id=2ZAv_Qa3YRhUJ1QHyRBGlG1LuSYSXpWfmy3FBQwXouw"

    https.get(url, function(response){
        console.log(response.statusCode)

        response.on("data", function(data) {
            console.log(data)
        }
    )

    res.send("Server is up and running.")
    })
})
// const canvasUnsplash = document.getElementById('canvas-unsplash')
// const canvasContext = canvasUnsplash.getContext('2D')

// canvasContext.fillStyle = 'green';
// canvasContext.fillRect(10, 10, 150, 100);
// console.log(canvasContext)





app.listen(3000, function() {
    console.log("Server is running on port 3000.");
})
