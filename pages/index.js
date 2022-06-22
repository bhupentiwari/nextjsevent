import {getFeaturedEvents} from '../dummy-data'
import EventList from '../components/events/event-list';
export default function HomePage() {

  const getFeaturedEventsData = getFeaturedEvents();

  return (
    <div>
      <EventList items = {getFeaturedEventsData} />
    </div>
  )
}
