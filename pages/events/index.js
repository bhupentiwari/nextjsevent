import { useRouter } from "next/router";

//import { getAllEvents } from "../../dummy-data"
import { getAllEvents} from '../../helpers/api-util';
import EventList from '../../components/events//event-list';
import EventSearch from "../../components/events/events-search";

export default function AllEventsPage(props) {
  console.log(props);
  const router = useRouter();

  const { events } = props;

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
  
  export async function getStaticProps(context) {
   
    const events = await getAllEvents();
    console.log('inside static props');
    console.log(events);
    return {
      props: {
        events: events,
      },
      revalidate: 60,
    };
  }
