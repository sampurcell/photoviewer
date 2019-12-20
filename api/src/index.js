import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import controller from './photosController';

const app = express();

const photoFilterOptions = {
  width: null,
  height: null,
  grayscale: false,
  page: 0,
  limit: 10,
};

app.use(cors());

app.get('/photos', async (req, res) => {
  let photos;

  // Sanitize query parameters
  Object.keys(photoFilterOptions).forEach(key => {
    // If the query parameter is allowed, set the value.
    if (req.query[key] !== undefined) {
      photoFilterOptions[key] = req.query[key];
    }
  });

  try {
    photos = await controller.getPhotos(photoFilterOptions);
  } catch (e) {
    // Log the error that occurred getting the photos.
    console.log(e);
  }

  res.json({ photos });
});

app.listen(process.env.APP_PORT, () =>
  console.log(`Photo viewer is listening on port ${process.env.APP_PORT}!`),
);
