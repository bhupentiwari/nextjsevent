export async function getAllEvents() {
  const response = await fetch(
    "https://next-js-course-5ba6f-default-rtdb.firebaseio.com/events.json"
  );
  const events = [];
  const data = await response.json();
  for (const key in data) {
    events.push({
      id: key,
      // title : data[key].title,
      // description : data[key].description
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEventsFromHelper() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  console.log(`year : ${year} & month : ${month}`);
  const allEvents = await getAllEvents();
  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
