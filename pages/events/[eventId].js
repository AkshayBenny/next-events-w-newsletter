import Comment from '../../components/comment.js';
import GetComment from '../../components/getcomment';
const EventPage = (props) => {
  const date = new Date(props.event[0].date).toLocaleDateString('en-US', {
    date: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  if (!props.event[0]) {
    return <p>No event found...</p>;
  } else {
    return (
      <div>
        <div className='grid justify-center items-center gap-12 grid-cols-2'>
          <img
            src={`/${props.event[0].image}`}
            alt={props.event[0].title}
            className='w-full rounded object-cover'
          />
          <div className='space-y-5'>
            <h1 className='text-4xl text-gray-600 font-bold'>
              {props.event[0].title}
            </h1>
            <p className='text-xl text-gray-500 font-semibold'>
              On {date} at {props.event[0].location}
            </p>
            <p className='font-light'>{props.event[0].description}</p>
          </div>
        </div>
        <Comment eventId={props.event[0].id} />
        <GetComment eventId={props.event[0].id} />
      </div>
    );
  }
};

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const res = await fetch(`http://localhost:3000/products?id=${eventId}`);
  const data = await res.json();
  return {
    props: {
      event: data,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/products?isFeatured=true');
  const data = await res.json();
  const paths = data.map((event) => ({
    params: {
      eventId: event.id,
    },
  }));
  return {
    paths: paths,
    fallback: true,
  };
}

export default EventPage;
