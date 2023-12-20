import {renderGallery} from'./picturesGallery.js';
import { getData } from './api.js';
import { showAlert } from './alerts.js';
import { showFilters } from './filter.js';
import './form.js';
import './scalePhoto.js';
import './effects.js';

const loadingPictures = async () => {
  try {
    const data = await getData();
    renderGallery(data);
    showFilters(data);
  }
  catch (err){
    showAlert(err.message);
  }
};

loadingPictures();
