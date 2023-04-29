# Node Express Cloudinary Image Upload
A simple image uploader using multer and cloudinary

## Routes
### POST /upload
- Handles a file upload form
- Example html:
```html
<html>
  <body>
    <form ref='uploadForm' 
      id='uploadForm' 
      action='http://localhost:3000/api/images' 
      method='post' 
      encType="multipart/form-data">
        <input type="file" name="inputFile" />
        <input type='submit' value='Upload!' />
    </form>     
  </body>
</html>
```

## Create .env file and provide values for the following:*