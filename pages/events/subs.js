import React, { useState, useEffect } from 'react';

const Subs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const dataFetcher = async () => {
      setLoading(true);
      try {
        await fetch('/api/subs')
          .then((res) => res.json())
          .then((data) => setData(data.myData));
       
      } catch (error) {
        console.log('Error fetching data>>>>', error);
      }
    };
    dataFetcher();
    setLoading(false);
  });
  return (
    <div>
      {loading && <p>Loading...</p>}
      <ul className='space-y-2 px-12'>
        {data.map((item, index) => {
          return (
            <li key={index} className='border-b-2 border rounded '>
              <p className='font-bold'>{item.name}</p>
              <p className='font-light'>{item.email}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Subs;
