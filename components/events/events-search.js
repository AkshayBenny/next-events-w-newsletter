import { useRouter } from 'next/router';
import { useState } from 'react';

const EventsSearch = () => {
  const route = useRouter();
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  console.log(year, month);

  const clickHandler = (e) => {
    e.preventDefault();
    const fullPath = `/events/${year}/${month}`;
    route.push(fullPath);
  };
  return (
    <form className='border py-10 justify-center items-center space-x-4 border-gray-600 flex'>
      <div>
        <label htmlFor='year'>Select year</label>
        <select onChange={(e) => setYear(e.target.value)} name='year' id='year'>
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
        </select>

        <label htmlFor='month'>Select month</label>
        <select
          onChange={(e) => setMonth(e.target.value)}
          name='month'
          id='month'
        >
          <option value='1'>January</option>
          <option value='2'>February</option>
          <option value='3'>March</option>
          <option value='4'>April</option>
          <option value='5'>May</option>
          <option value='6'>June</option>
          <option value='7'>July</option>
          <option value='8'>August</option>
          <option value='9'>September</option>
          <option value='10'>October</option>
          <option value='12'>November</option>
          <option value='13'>December</option>
        </select>
      </div>
      <button
        className='bg-gray-600 text-white px-3 py-2 rounded'
        onClick={(e) => clickHandler(e)}
        type='submit'
      >
        Filter
      </button>
    </form>
  );
};

export default EventsSearch;
