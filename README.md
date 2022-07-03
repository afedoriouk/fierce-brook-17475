# 11 Express.js: Note Taker

## Your Task
## Appearance and Functionality

The following images show the web application's appearance and functionality: 
<img width="937" alt="11-Express Project" src="https://user-images.githubusercontent.com/98120553/175752980-0424ce47-701a-443a-bea3-1952f1b3d1be.png">

APP URL<img width="936" alt="note taker app screenshot" src="https://user-images.githubusercontent.com/98120553/175753001-3dc376bf-354b-4e1f-b868-279af4fbf380.png">

<img width="1079" alt="Heroku Dashboard Screenshot" src="https://user-images.githubusercontent.com/98120553/175753010-0a39993f-076e-4e06-9509-d992de6423a2.png">



This application is called Note Taker can be used to write and save notes. Note taker will be implementing Express.js back end and will save and retrieve note data from a JSON file. The application’s front end has already been created. The finnished application is deployed to Heroku.

## User Story

```
A n small business owner I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```



## Functionality
The application is connected to `db.json` file on the back end. It is used to store and retrieve the notes.

The HTML routes are created:
* `GET /notes` returning the `notes.html` file.
* `GET *`returning the `index.html` file.
The API routes are created:
* `GET /api/notes`read the `db.json` file and return saved notes as JSON.
* `POST /api/notes`receive a new note and add it to the `db.json` file.


## Review

* URL of the deployed application to Herok:
* [Heroku Deployment] (https://fierce-brook-17475.herokuapp.com/)

* URL of the GitHub repository:
https://github.com/afedoriouk/fierce-brook-17475
- - -
