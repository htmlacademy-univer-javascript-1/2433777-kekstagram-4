import {renderGallery} from'./picturesGallery.js';
import { getData } from './api.js';
import { showAlert } from './alerts.js';
import './form.js';
import './scalePhoto.js';
import './effects.js';

const loadingPictures = async () => {
  try {
    renderGallery(await getData());
  }
  catch (err){
    showAlert(err.message);
  }
};

loadingPictures();
