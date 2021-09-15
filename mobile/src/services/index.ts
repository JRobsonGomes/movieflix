import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://movieflix-robson.herokuapp.com'
});

export const TOKEN = 'Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMzQ1Ng==';
