import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer AFTx6qguB4wjngBhfH7AwhoxcHPGHJKr_hvqT3GYPjzUcXMxzqzsQKyPu5zFIfkPhQ-I89vUofpiwejYo_HVvRSIc6YQ_tDCD2bFzZU5ZM9GdWMKmqHpIIhVu5OdYXYx',
  },
});
