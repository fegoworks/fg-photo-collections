# React Image Gallery

This is a React app, bootstrapped using Vite. The API is hosted with Render at this [**URL**](https://fg-ph-clctns.onrender.com/) and the static page is live on this url - [**Gallery**](https://fg-ph-clctns-fe.onrender.com/)

## Table of Contents
- [React Image Gallery](#react-image-gallery)
  - [Table of Contents](#table-of-contents)
  - [App Features](#app-features)
  - [Concepts and APIs Employed](#concepts-and-apis-employed)
  - [Built with](#built-with)
  - [Installation](#installation)
  - [Future Improvements](#future-improvements)

<!-- basic flow -->

## App Features

- A user visiting the app, is greeted with the gallery page 🤭 where there's a view of previously uploaded pictures.
- Upon clicking **upload image**, the user is redirected to page where they can select and upload a picture.
- Once a picture is uploaded they are shown a success message.

<!-- concepts and apis employed -->

## Concepts and APIs Employed

- The API employed can be found: [here](https://github.com/fegoworks/fg-photo-collections).
- This app employs the use of React concepts like:
  - Components structuring
  - Routing and templating with [react route dom v6](https://www.npmjs.com/package/react-router-dom)
  - API integration with [axios](https://www.npmjs.com/package/axios)
  - Data fetching management with [@redux](https://www.npmjs.com/package/@tanstack/react-query)
  - Custom hooks
  - Typescript concepts like (generics, interfaces, etc)
  - Form validation with [formik](https://www.npmjs.com/package/formik) and [yup](https://www.npmjs.com/package/yup)
  - Simple form generator with validation using formik and yup

<!-- BUILT wITH -->

## Built with

- HTML5
- CSS3
- TypeScript
- React
<!-- INSTALLATION -->

## Installation

1. Install [**Node JS**](https://nodejs.org/en/).
2. Clone the [**repository here**](https://github.com/fegoworks/fg-photo-collections)
3. [**cd**] into the root of the **project directory**.
4. [**cd**] into the `/client` folder.
5. Run `yarn install` on the terminal to install project dependecies
6. Create a `.env` file in the root directory of the application. Example of the content of a `.env` file is shown in the `.env.sample`

7. Start the application:

```
yarn dev
```
<!-- FUTURE IMPROVEMENTS -->

## Future Improvements

- Add tests
- Add lazy loading to images
- Add skeleton loader for when api is loading and images is empty
- Add carousel slider for easy navigation in modal select
- Add extra file validation
- Add authentication and authorization
