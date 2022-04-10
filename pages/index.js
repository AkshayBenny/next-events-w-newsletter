import Link from 'next/link';
import EventList from '../components/events/event-list';
import Head from 'next/head';
const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name='description'
          content='Find events that might help you learn programming quickly'
        />
      </Head>

      <EventList items={props.products} />
      <Link href='/events'>
        <p className='text-xl rounded py-4 text-center w-full bg-slate-400 mt-16 cursor-pointer hover:text-gray-700 border border-slate-400'>
          Browse All Events
        </p>
      </Link>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/products?isFeatured=true');
  const data = await res.json();

  const featuredEvents = [];
  data.map((product) => {
    featuredEvents.push(product);
  });

  return {
    props: {
      products: featuredEvents,
    },
    revalidate: 60,
  };
}

export default HomePage;
