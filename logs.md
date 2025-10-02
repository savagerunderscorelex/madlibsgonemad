# Logs
9/20  
Started Mad Libs Project. I'm also experimenting with bootstrap.js in this project as well. I started on the home page (index.html) and added the basic html for the introduction and the button to start the 1st Mad Lib.
I plan to create 2-3 Mad Libs for the user to make. 


Mad Lib 1:  
the 1stnoun was verb(ing) down the (2ndnoun), wanting to find a/an (3rdnoun). The 1stnoun entered the store to find the (3rdnoun). The (1st-adjective) (1stnoun) went up to the (servicejobperson) and asked about the (3rdnoun). The (servicejobperson) told the (1stnoun) that the (3rdnoun) cost (number) dollars. [could use if/and statements ] The (1stnoun) looked inside their (color)(4noun) to check their money. 
The (1stnoun) found out they only had (number) dollars.

1. The (1stnoun) realizes that they don't have enough money to buy the (3rd noun). They leave the store, defeated.
2. The (1st noun) has enough money to buy the (3rdnoun). They purchase the (3rdnoun) from the (servicejobperson), elated.

9/21  
I changed the gradiente of the first mad lib form, changed the color of the glow when "focused" (and I'm trying to change it so that it'll changed smoother)
I changed the color of the text, and I think that's pretty much it 

9:03 PM I changed the color of the shadow and border of the 1st mad lib form element inputs

9/22  
5:54 AM I tried to code getting the input from users and storing them in a variable to put in the madlib. I tried to do this by first using code I created in a class and changing the values for this project,
but whenever I tried to test the code it wouldn't work at all. According to the developer tools console log, there aren't any values to log, and when I try the value method it doesn't automatically put the value method (which means the code I'm doing rn is not valid.)

Here is a solution I'm thinking of to check when I come back from school:

    let noun1 = document.getElementbyId("id") (or query selector)

    function (click, submit) OR form.onsubmit {
        1. turn the input into a value (.value)
        2. console log the value
    }
6PM I'm gonna be sick. I spent 25 minutes working on trying to fix the issue of getting the input value from the form but it isn't working at all. One idea I had was that 
the bootstrap is interfering with everything, which makes the code not work. I'll try right now to adjust the code without the bootstrap cdns. 

6:16PM Don't know what the hell I did but it works now :) I tested the feature with the heading and it works now. I know there is a more "practical" and probably better way to do all this (basically actually learning backend) BUTTTTTTTTT that'll take kinda long, and 
I started this as a small project that I can work on in between my bigger project (the music website). so basically I don't want to take hours learning something rn for a smaller project (not saying that I don't want to learn backend, though).

7:32 PM I finished creating variables for the mad lib inputs in javaspt. No this task did not take me an hour, I took a break.

7:38 PM I added the rest of the pages that I will likely need to finish the project. i've reached my goal of coding 2 hours, so I'll get going now :)

9/23  
Around 6PM I moved around the files for my project. I changed the color ocrif the background and centered the submit button. I also made the input fields turn a shade gray when clicked on. 

Currently, I've been trying to figure out how to output the mad lib form inputs onto the template. However, I realized that I ACTUALLY have to do some form of backend to do it, which I don't think I would have time to learn. So, I'm just going to put the form and the result on one page, to make everything easier. I wish I took programming seriously, like 5 years ago.

9/26  
9:46 AM What I planned to do instead was to put the the result on the same page as the form. I finally got it to work (I forgot to update the querySelector value). However, I'm not sure how to format the site for it to work on the same page. 

9:40 PM I think I'll just keep everything on the same page. I deleted the results page so that I could put the results and the form on the same page. 

9:53 PM I changed the code so that there isn't an action on the mad lib form and that the changing of the elements only occurs when the form is actually submitted. However, I just realized something about the action attribute for forms. It goes to the website in the action when the form is submitted. Does that mean
that I can actually have a separate page to show the results without using a database? I'll try to figure that out real soon. Too bad I deleted the results page too early.

10:02 PM My hypothesis was incorrect. It wouldn't work at all. I think that after I finish this project, I'll learn to to use a data base.

11:02 PM I added the result to the same page. I don't want to spoil the mad lib, obviously, so there is a cover that disappears when the user submits the mad lib. I added both and did some basic css. right now my whole site looks hideous, but I think I might focus on styling when I actually figure out how I'm gonna do the mad libs.

9/27  
10:45 AM I'm not sure why, but there was an issue with the paragraph disappearing under the form when the mad lib form is submitted. I don't know what happened that it caused this, since it was working just fine yesterday. even, I had an issue with the site refreshing when submitting the form, which also didn't happen yesterday (see my previous log). Either way, I figured 
out how to fix it by switching the position and zindex values on submitting. I really need to start branching the project when I have issues.

12:59 PM I took a break to start my day for real and hang my laundry. I started the navigation bar, added only 3 links (home, select, links), reorganized the mad lib pages and renamed the select page to be more intuitive.

1:43 PM made the navlinks buttons

2:50 PM added desc under heading and put them together in a div

6:21 PM started on links page: added navigation, heading, and little description paragraph

7:04 PM I adjusted the home page a bit: added margins to the page, edited the button that goes to the mad lib selection page, and adjusted the footer

8:31 PM Changed the buttons so that the anchor element is first, since the whole button wasn't clickable for the link

10:42 PM Last log for the day: I worked on adding the rest of the mad lib to the first mad lib page, and I created the variables for the results in javascript. I would've finished it today but I'm wayyy too tired to do so. I did the code that would show the form variables in the paragraph as well, so I think that's what's
mainly draining me ngl. I did something else but I forgot

9/28  
7:58 AM switched the anchor and button elements around, started on the second mad lib page, connected all the empty elements and form elements in javascript

9:23 AM I made my logs doc a  markdown file :)

12:15 PM I decided to remove the cover because I actually searched up things about mad libs and realized that mad libs aren't a surprise. Maybe I'll put it back later

12:25 PM Yeah I put it back, I saw a mad lib site do what I was doing, so I thought I should actually put this feature back in :)

12:35 PM Making up a mad lib:

John and his friends are going to the movie theater to see moviename. They were so 1excited to see the movie because they had spent 1number 1dollars on the movie tickets. When they got to the movie theater, the 1cashier asked how many people were watching the movie. John said 2number people. After the John and his friends got their tickets, they went inside the movie theater, 1adverbily 1verbing. They sat down to watch the movie, commenting on the 2adjective 1nouns and the adjective 2nouns. The movie went on for 3number 1units of time. When the movie ended, John and his friends left the movie theater to get snacks. They got 1food and 2food, totaling up to 4number 2dollars. They had an 2adjective movie day!

1:24 PM Logs (gonna commit now): wrote the second mad lib, began putting the form inputs in the form and set up the second mad lib page, added the 2nd mad lib script, changed the limit for the number inputs

3:40 PM Finished mad lib 2's form inputs, added a style for all forms so that the styling is more standardized

3:46 PM I'm going to change the mad lib 1 story (not right now though)

3:55 Pm actually nevermind, i'm going to challenge myself lol

7:18 PM Added all the result blanks and the paragraph for the 2nd mad lib

7:32 PM Added the cover for mad lib 2 and also standardized the styling by using classes instead of ids for certain elements

7:43 PM Made variables for the input variables in the 2nd mad lib js file *commit*

7:47 PM Logging off 

9/29
4:59PM Finished adding all of the result variables

5:45 PM Finished coding the part of the function which inserts the form input values into the paragraph's blanks

5:55 PM I updated the Mad Lib 2 form to specify that the nouns are supposed to be plural nouns (I forgot to do this). Also I tested out my mad libs, they're working great :)!!! just one more to go!

?? Also added the js code for the cover layer and the paragraphs + commit

10:03 PM gonna write the last mad lib story draft here:

1st Draft
Pizza is my favorite food! I like pizza because it is awesome, delicious, and tasty. Every day I buy 10 pizzas from the local pizza store. I even spend up to 10000 dollars per year on buying pizzas! My friends say I love pizza too much, and say that my spending is extremely bad. However, I say that they are wrong. Pizza is the best thing in my life, and I will never give it up!

9/30/25 (i think?)
2nd Draft with the "blanks"
Noun1 is my favorite noun2! I like noun1 because it is adj1, adj2, and adj3. Every (unit of time) I buy num1 noun1-plural from the adj4 noun3. I even spend up to num2 1currency per unitoftime2 on buyin noun1. My friend say that I verb2 noun1 too much, and say that my spending is adverb1 adj5. However I think that they are adj6. Noun1 is the adj7 noun2 in my life, and I will adverb2 give it up!

8:42 PM I started the mad lib 3 page, including the heading, description, and the navigation bar (I did this in the morning I think but I forgot to log)

9:05 PM Edited mad lib 3, finished adding all of the mad lib form inputs

9:17 PM changed background and form color, linked the script (i guess I never did that???? idk how) and added part of the mad-lib reveal code

Oct 1
yay first day of the month

4:03 PM I added the result blanks into the result paragraph div in mad lib three

4:13PM Edited Code (changed title in mad lib 2 script)

4:31 Created all of the 3rd mad lib input variables to the js file

8:59 PM Created all of the result mad lib variables in the js file

9:36 Did the code that would put the value of the input into the blanks, added the code to remove the top layer, added form event listner and adjusted the html due to errors

9:40 PM Adjusted an issue where the cover was still visible on submit, it was because I never added a background color to the result paragraph lol

10:22 PM I wanted to make all of the buttons more round, but only the home page buttons are not following the rule I put in the css file for SOME reason. I'll try to figure this out tomorrow