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






## Getting Started

The application should have a `db.json` file on the back end, which will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).

## Bonus

You haven’t learned how to handle DELETE requests, but this application has that functionality in the front end. As a bonus, see if you can add the DELETE route to the application using the following guideline:

* `DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application to Heroku.
* [Heroku Deployment] (https://fierce-brook-17475.herokuapp.com/)

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
