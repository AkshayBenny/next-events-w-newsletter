import Link from 'next/link'
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import NewsLetter from '../../components/newsletter/newsletter';

const EventsPage = ({ allEvents }) => {
  return (
    <div>
      <div className="flex justify-between"><NewsLetter /> <Link href='/events/subs'>
        <p className='font-bold cursor-pointer text-red-400'>
          See all subscribers
        </p>
      </Link></div>
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
