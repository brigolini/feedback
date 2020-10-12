## Important points
1. It took me 9 hours to finished up all the project. As the exercise time limit was 8 hours, I prefer to stop. I delivered all features on my document, but some part of the code could be better. I will let you know in the session "What can be better".
2. The answer data is in sessionStorage. I created very simple and tiny a API mock layer to save it.
3. The app was really enough to don't need global state. I create one just to let you know how I would approach an easy global state. 

## What can be better (What I did not complete)

1. Some component's code need to be refactor to be easy to read. As an example question-for-answer.tsx needs to be refactoring and maybe break.
2. Error handling could be a lot better, maybe an automatic retry, definitely error-page send back to the page that calls it.
3. Next button should not be able if you don't answer question. I did it for multiple choice but need to be done for the others.
4. Test coverage is very poor. I believe we need at least 3 more hours on testing.
5. Layout needs to be brushed up. As the exercise said it's not a priority, I never change some poor layout.
6. Component directory deserves a good refactoring in order to be easy to maintain.
7. Better patterns do Don't Repeat Myself

## Code hours

My code hours were divided like this:

* Layout / components / containers - 6 hours
* Global state - 1 hour
* Unit tests - 1 hour
* Logic and API - 1 hour

## Changes if I had one week delivered  

1. A lot more unit and integration tests
2. Better layout and CSS
3. I would create some abstractions in order to follow DRY
4. I would love to review the code to find some potential problems.
5. Some code refactoring as I mentioned in "what can be better". 
