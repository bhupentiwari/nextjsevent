import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data"
import EventList from '../../components/events//event-list';
import EventSearch from "../../components/events/events-search";

export default function AllEventsPage() {

  const router = useRouter();

  const events = getAllEvents();

    const searchHandler = (year,month) => {
      const path = `/events/${year}/${month}`;
      console.log(year);
      console.log(month);

      router.push(path);

    }
    return (
      <div>
        <EventSearch onSearch = {searchHandler}></EventSearch>
        <EventList items = {events}></EventList>
      </div>
    )
  }
  