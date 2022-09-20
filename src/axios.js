import axios from "axios";

const instance = axios.create({
  //THE API CLOUD FUNCTION URL
  baseURL: 'https://us-central1-challenge-d5898.cloudfunctions.net/api'

});

export default instance;

//http://localhost:5001/challenge-d5898/us-central1/api