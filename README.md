# Read Me First
"A task of Arkademy (Beginner Backend - Week 4), to create databases and CRUD features of 'Users', 'Tickets' or 'Movies', and 'Transactions'.

#### For the requirements of this task, Arkademy asked me to include a few things in this project :  
1.) Databases (all)  
2.) CRUD features (all)  
3.) Search (tickets)  
4.) Sort from the newest data (tickets & transactions)  
5.) Paginations  
6.) Push to GitHub repository (all)  
7.) Linter (Standard)  
8.) API's flowcharts (all)  
9.) Error handling (all)  
10.) A Postman's API Documentation (CRUD)  
11.) CORS  
12.) Env  

#### Then, what's included in this README.md?    
1.) Algorithms (user only)  
2.) Flowcharts (user only)  
3.) This project's overview/screenshots (all)  
4.) Postman's API Documentation (CRUD) => https://documenter.getpostman.com/view/14851668/Tz5jg1fd  

## 1.) Algorithms combined with Flowcharts (user only)
#### 1.1) CREATE
1.) Start.   
2.) First, take inputs from the user (real name, username, email, password).  
3.) After that, make some variables of user's input (realName, userName, userEmail, userPassword) with values from the body request of them (req.body).  
4.) Now, create a variable named "hashedUserPassword", that contains a value from variable "userPassword" then hashes it (in this case, I was using bCrypt to help me for the hashing process when an input came from the user).  
5.) Then, create a variable again named "newData" that'll be sent as a parameter to database query process, contains an object value with keys and values based by the user's first variables input in number 2 (realName, userName, userEmail, userPassword).  
6.) After that, create a function named "newUserData" with a paramater value passed from "newData", in this function we'll query the user's database and order it to insert the data into user's database.  
7.) Now, we make a statement for the result, if there's no error then give the result, else console an error message.  
8.) At last, execute the function newUserData(newData) and in no time the result will shown based on the statement in number 7 as JSON format.   
9.) End.  
#### 1.2) READ
1.) Start.  
2.) First, take GET or the READ request from the user (with no data input, ofc).  
3.) After that, we just need to query user's database with a line syntax that selecting all data from the database then returns all of them in JSON format.  
4.) Lastly, the result will shown to you, as easy as that!  
5.) End.  
#### 1.3) UPDATE
1.) Start.   
2.) First, take inputs from the user (targeted user's id to be updated, real name, username, email, password).  
3.) After that, make some variables of user's input (realName, userName, userEmail, userPassword) with values from the body request of them (req.body).  
4.) Now, create a variable named "hashedUserPassword", that contains a value from variable "userPassword" then hashes it (in this case, I was using bCrypt to help me for the hashing process when an input came from the user).  
5.) Then, create a variable again named "updatedData" that'll be sent as a parameter to database query process, contains an object value with keys and values based by the user's first variables input in number 2 (realName, userName, userEmail, userPassword).  
6.) After that, create a function named "updatedUserData" with a paramater value passed from "updatedData", in this function we'll query the user's database and order it to update the data into user's database based on the user's id.  
7.) Now, we make a statement for the result, if there's no error then give the result, else console an error message.  
8.) At last, execute the function updatedUserData(updatedData) and in no time the result will shown based on the statement in number 7 as JSON format.    
9.) End.  
#### 1.4) DELETE
1.) Start.  
2.) First, take input from the user (targeted id to be deleted).  
3.) After that, we just need to query user's database to delete the targeted data based on inputted user's id.  
4.) Lastly, the targeted data will be deleted, very simple right?    
5.) End.  

## 2.) Project's Overview / Screenshots (all)
Place screenshots here
