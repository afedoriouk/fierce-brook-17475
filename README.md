# Express.js Project - 11 


## Note Taker

## Appearance and Functionality


The following images show the web application's appearance and functionality: 


<img width="937" alt="11-Express Project" src="https://user-images.githubusercontent.com/98120553/175752980-0424ce47-701a-443a-bea3-1952f1b3d1be.png">

APP URL<img width="936" alt="note taker app screenshot" src="https://user-images.githubusercontent.com/98120553/175753001-3dc376bf-354b-4e1f-b868-279af4fbf380.png">

<img width="1079" alt="Heroku Dashboard Screenshot" src="https://user-images.githubusercontent.com/98120553/175753010-0a39993f-076e-4e06-9509-d992de6423a2.png">



## User Story
```
Many small business owners have to juggle multiple projects on a daily basis. 
They are looking for the solution that would streamline the process of taking and retrieving the notes. 
With this simple Note Taker app users would be able to write and save notes. 
They can organize their thoughts and keep track of tasks that are needed to be completed.
```

## Implementation

```
This application is called Note Taker can be used to write and save notes. 
Express.js is a back end web application framework for Node.js. 
It is implemented as a back end application and will save and retrieve note data from a JSON file. 
The application’s front end has already been created. 
The finnished application is deployed to Heroku.

When users opens the Note Taker - they are presented with a landing page with a link to a notes page. 
By clicking on the link to the notes page users are presented with a page with existing notes listed in the left-hand column.
Users can enter a new note title and the note’s text and save the note with the Save icon in the navigation at the top of the page.
The new note that users entered is saved and appears in the left-hand column with the other existing notes.

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

* URL of the deployed application to Heroku:
* [Heroku Deployment] (https://fierce-brook-17475.herokuapp.com/)

* URL of the GitHub repository:
https://github.com/afedoriouk/fierce-brook-17475
- - -
