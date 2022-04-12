import React, { useState } from 'react';

const Subs = () => {
  const [data, setData] = useState([]);
  const dataFetcher = async () => {
    const res = await fetch('/api/subs');
    const data = await res.json();
    setData(data);
  };
  console.log(data);
  return (
    <div>
      <button onClick={dataFetcher}>Get data</button>
      <ul>
        {/* {subs.map((item, index) => {
          return (
            <li>
              <p className='font-bold'>{item.email}</p>
            </li>
          );
        })} */}

      </ul>
    </div>
  );
};

export default Subs;
