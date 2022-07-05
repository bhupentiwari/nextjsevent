import {useRouter} from 'next/router';
import EventList from '../../components/events/event-list';
import { getFilteredEvents } from '../../helpers/api-util';

function FilteredEventsPage(props){

   // const router = useRouter();
    //const filterValue = router.query.slug;
   // console.log(filterValue);

    // if(!filterValue){
    //     return <p className='center'>Loading ....</p>
    // }

    // const month = filterValue[1];
    // const year = filterValue[0];

    // const numMonth = +month;
    // const numYear = +year;

    // const data = getFilteredEvents({
    //     'year': numYear,
    //     'month' : numMonth
    // });
    //debugger
    if(props.data.length == 0){
        return <p>No data found</p>
    }
    else
    return (
        <div>
            <h1>Filtered Events</h1>
            <EventList items = {props.data} />
        </div>
    )
}

export default FilteredEventsPage

export async function getServerSideProps(context) {

    const filterValue = context.params.slug;
  
     if(!filterValue){
         return {
            props : {hasError : true}
     }
    }
     const month = filterValue[1];
     const year = filterValue[0];
 
     const numMonth = +month;
     const numYear = +year;
    
     const data = await getFilteredEvents({
        'year': numYear,
        'month' : numMonth
    });

    return {
        props : {
            data : data,
            year : {
                month : numMonth,
                year : numYear
            }
        }
    }

}