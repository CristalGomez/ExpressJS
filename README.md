# Destination Discoverer 

Destination Discoverer will find your next travel destination. The user completes a 10 question survey in which they rate their responses from *1 (very unlike me)* to *5 (most like me)*. When the user hits the submit button, they will be presented with their next travel destination. 
## Destination Discoverer Link
https://destinationdiscoverer.herokuapp.com/

## Resources
1. NodeJS
1. ExpressJS
1. Path
1. jQuery
1. Bootstrap

## How it Works

First, you are presented with the home page, which is set to default if the appropriate parameters are not typed into the browser. It's a simple page with links to the Github repo, API page, and the button to begin the survey.
![index]https://github.com/CristalGomez/ExpressJS/blob/master/assets/githubImgs/index.png

Next, you are presented with the survey page. Notice that every dropdown is set to the value of 1. This prevents the user from leaving any answers blank. If the user happens to skip this question, the page reads their score as 1 (very unlike me) and will factor this score when matching them with a destination.
![surveyPage]https://github.com/CristalGomez/ExpressJS/blob/master/assets/githubImgs/surveyHTML.png

The survey page will not allow the user to proceed if they leave the name field blank. This is presented with an alert and not a modal. 
![alert]https://github.com/CristalGomez/ExpressJS/blob/master/assets/githubImgs/surveyAlert.png

Once the user has typed in their name and answered the survey questions, a modal will pop up with their next destination!
![modal]https://github.com/CristalGomez/ExpressJS/blob/master/assets/githubImgs/surveyModal.png

