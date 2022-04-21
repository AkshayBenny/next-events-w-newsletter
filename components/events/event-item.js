import Link from 'next/link';
import Image from 'next/image';

const EventItem = (props) => {
  const { title, image, date, location, id } = props;
  const prettyDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const prettyLocation = location.replace(', ', '\n');
  return (
    <div className='p-4 space-y-4 rounded border  border-gray-100 hover:shadow-sm'>
      <Image
        className='rounded w-full h-96 object-cover'
        src={'/' + image}
        alt={title}
        height={240}
        width={540}
      />
      <h1 className='text-xl semibold text-gray-800'>{title}</h1>
      <h3 className='text semibold text-gray-600'>{prettyLocation}</h3>
      <p>{prettyDate}</p>

      <Link href={`/events/${id}`}>
        <button className='px-2 py-2 rounded bg-gray-700 text-white hover:bg-white border border-gray-700 hover:text-gray-700'>
          Explore event
        </button>
      </Link>
    </div>
  );
};

export default EventItem;
