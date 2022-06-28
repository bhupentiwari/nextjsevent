import {useRouter} from 'next/router';
import EventList from '../../components/events/event-list';
import { getFilteredEvents } from '../../dummy-data';

function FilteredEventsPage(){

    const router = useRouter();
    const filterValue = router.query.slug;
    console.log(filterValue);

    if(!filterValue){
        return <p>No filter value</p>
    }

    const month = filterValue[1];
    const year = filterValue[0];

    const numMonth = +month;
    const numYear = +year;

    const data = getFilteredEvents({
        'year': numYear,
        'month' : numMonth
    });
    debugger
    if(data.length <=0){
        return <p>No data found</p>
    }
    return (
        <div>
            <h1>Filtered Events</h1>
            <EventList items = {data} />
        </div>
    )
}

export default FilteredEventsPage