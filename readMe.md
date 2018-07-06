Week 4 Day 4 Afternoon Lab (instead of lab-express-spotify)
Create an Express app 
    - create a folder
    - cd into that folder
    - run `npm init`
    -run `npm install express hbs mongoose body-parser --save`
    - create a file called app.js
    - require in express, hbs, mongoose, & body-parser 
    - use mongoose to connect to your database (create a new DB for this project)
Create some things in the Database
    - use compass to create some entries in the DB (it's up to you what you 
    do.  you can do users, or cats, or tv shows, anything)
Create a route
    - in this route, query your database and get the list of all the documents in your primary collection (if you're doing cats, get a list of all the cats)
    - in the view, do an #each loop over your array and display some piece of information about your all your cats/users/tvShows on the page.  
Create your 2nd route
    - in this route, include a parameter.  (like '/users/:userID')
      use req.params to access the parameter in the URL and query your databse
      get the cat/user/tvShow with that ID.  
      - in the view, display all the information of this particular cat/user.
Connect the 2 pages
    - on your first route, for each cat/user/tvShow, provide a link that the user can click that will take them to the page with all the details of that one cat/user.  
