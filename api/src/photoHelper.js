import url from 'url';

// Parse the URL given an address and return
const parseUrl = (address) => url.parseUrl(address);

// Get the width from the parsedUrl.
const getWidth = (parsedUrl) => parsedUrl.params[1];

// Get the height from the parsedUrl.
const getHeight = (parsedUrl) => parsedUrl.params[2];

// Helper class to iterate and filter photos by the filter options.
const photoHelper = {
  // Filter the photos given the filters passed in
  filterPhotos: (photos, filters) => {
    const filteredPhotos = photos.filter(photo => {

    });
    const start = page * limit;

    return filteredPhotos.slice(start, (limit - 1));
  },
};

export default photoHelper;
