import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 44b85162bda7ef3a2a478d25b81d0e0c5930a9d13d084837554f864c3f3dac23'
  }
});