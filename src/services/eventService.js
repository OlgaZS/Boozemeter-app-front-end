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
    return this.event.get(`/event/${eventId}`).then(({ data }) => data);
  }

  // getEvent(date) {
  //   return this.event.get(`/event/${eventId}`).then(({ data }) => data);
  // }

  getEventsByDate(date) {
    return this.event.get(`/date-events/${date}`).then(({ data }) => data);
  }

  getDrinkLabels() {
    return this.event.get('/drink').then(({ data }) => data);
  }

  getHealthLabels() {
    return this.event.get('/health').then(({ data }) => data);
  }

  addEvent(eventData) {
    return this.event.post('/events', eventData).then(({ data }) => data);
  }
}

const eventService = new EventService();

export default eventService;
