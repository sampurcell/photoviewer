import fs from 'fs';
import { promisify } from 'util';
import path from 'path';

import photoHelper from './photoHelper';

const readFileAsync = promisify(fs.readFile);

const controller = {
  getPhotos: async (filterOptions) => {
    const photoPath = path.join(__dirname, 'data', 'photos.txt');
    let photos;

    try {
      photos = await readFileAsync(photoPath, 'utf-8');

      // Get the photos in an array then filter them
      photos = photos.trim().split('\n');
      photos = photoHelper.filterPhotos(filterOptions);
    } catch (e) {
      console.log(e);
    }

    return photos;
  },
};

export default controller;
