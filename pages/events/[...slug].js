import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';

const FilteredEvents = () => {
  const route = useRouter();
  const filterData = route.query.slug;

  if (!filterData) {
    return <div>Loading....</div>;
  }

  const filteredYear = filterData[0];
  const numYear = +filteredYear;
  const filteredMonth = filterData[1];
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth)) {
    return <div>Something is wrong...</div>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filter</p>;
  }

  return (
    <div>
      <EventList item={filteredEvents} />
    </div>
  );
};

export default FilteredEvents;
