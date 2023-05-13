# Node Express Cloudinary Image Upload

A simple image uploader using multer and cloudinary

## Table of Contents
- [Node Express Cloudinary Image Upload](#node-express-cloudinary-image-upload)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Built With](#built-with)
  - [Installation](#installation)
  - [Routes](#routes)
    - [POST /api/images](#post-apiimages)
    - [GET /api/images](#get-apiimages)
  - [Future Improvements](#future-improvements)

<!-- basic flow -->

## Getting Started

This is a backend typescript application built with [**Node JS**](https://nodejs.org/en/) using [**Express**](https://expressjs.com/) framework. The application runs on a PostgreSQL database and is live on render -[fg-ph-clctns](https://fg-ph-clctns.onrender.com/)

## Built With

- Express
- Postgres
- TypeORM

<!-- INSTALLATION -->

## Installation

1. Install [**Node JS**](https://nodejs.org/en/).

2. Clone the [**repository here**](https://github.com/fegoworks/fg-photo-collections)
3. [**cd**] into the root of the **project directory**.
4.  [**cd**] into the `/api` folder.
5. Run `yarn install` on the terminal to install project dependecies
6. Create a `.env` file in the root directory of the application. Example of the content of a `.env` file is shown in the `.env.sample`

7. Start the application:

```
yarn start
```

## Routes

### POST /api/images

- Handles a file upload form
- Example html:

```html
<html>
  <body>
    <form
      ref="uploadForm"
      id="uploadForm"
      action="http://localhost:3000/api/images"
      method="post"
      enctype="multipart/form-data"
    >
      <input type="file" name="inputFile" />
      <input type="submit" value="Upload!" />
    </form>
  </body>
</html>
```

- Sample success response with status 200
  ```
  {
    image: {
      id: 1,
      image_url: "https://cloudinary.com/somerandomgeneratedlink",
      image_caption: "Yellow affair",
      created_at:
    }
  }
  ```

### GET /api/images

- Returns an array of all the uploaded images
- Sample success response 

  ```
  {
    images: [{
      id: 1,
      image_url: "https://cloudinary.com/somerandomgeneratedlink",
      image_caption: "Yellow affair",
      created_at:
    }, 
    {
      id: 2,
      image_url: "https://cloudinary.com/somerandomgeneratedlink",
      image_caption: "Green affair",
      created_at:
    },
    ]
  }
  ```

<!-- FUTURE IMPROVEMENTS -->

## Future Improvements

- Add tests
- Add data validation
- Add authentication and authorization
