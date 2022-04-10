import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import NewsLetter from '../../components/newsletter/newsletter';

const EventsPage = ({ allEvents }) => {
  return (
    <div>
      <NewsLetter />
      <EventsSearch />
      <EventList items={allEvents} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/products');
  const data = await res.json();
  const allEvents = data.map((event) => event);
  return {
    props: {
      allEvents: allEvents,
    },
    revalidate: 60,
  };
}

export default EventsPage;
