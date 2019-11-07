import axios from 'axios';

class EventService {
  constructor() {
    this.event = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_BASE_URL + '/api',
      withCredentials: true,
    });
  }

  getEvents() {
    return this.event.get('/events').then(({ data }) => data);
  }

  getEvent(eventId) {
    return this.event.get('/event/' + eventId).then(({ data }) => data);
  }
}

const eventService = new EventService();

export default eventService;
