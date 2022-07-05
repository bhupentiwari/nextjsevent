import { Fragment } from "react";
import {
  getEventById,
  getFeaturedEventsFromHelper,
} from "../../helpers/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail//event-logistics";
import EventContent from "../../components/event-detail/event-content";

export default function AllEventsDetailsPage(props) {
  const { event } = props;

  if (!event) {
    return <div className="center">No Event found !!!</div>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const events = await getEventById(eventId);

  return {
    props: {
      event: events,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const allEvents = await getFeaturedEventsFromHelper();
  const formatPath = allEvents.map((event) => ({
    params: { eventId: event.id },
  }));
  return {
    paths: formatPath,
    //fallback: true,
    fallback: 'blocking',
  };
}
