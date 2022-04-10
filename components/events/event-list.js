import EventItem from './event-item';

const EventList = (props) => {
  const { items } = props;
  return (
    <div>
      <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
        {items.map((event, index) => {
          return (
            <EventItem
              key={index}
              id={event.id}
              title={event.title}
              date={event.date}
              location={event.location}
              image={event.image}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default EventList;
