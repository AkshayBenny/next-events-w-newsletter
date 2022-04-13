// import React, { useState, useEffect } from 'react';

// const Subs = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(async () => {
//     try {
//       await fetch('/api/subs')
//         .then((res) => res.json())
//         .then((data) => setData(data.myData));
//     } catch (error) {
//       console.log('Error fetching data>>>>', error);
//     }
//   });
//   console.log(loading);

//   if (!data) {
//     return <p>No data found</p>;
//   }

//   if (data.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <ul className='space-y-2 px-12'>
//         {loading ? (
//           <p>Loading</p>
//         ) : (
//           data.map((item, index) => {
//             return (
//               <li key={index} className='border-b-2 border rounded '>
//                 <p className='font-bold'>{item.name}</p>
//                 <p className='font-light'>{item.email}</p>
//               </li>
//             );
//           })
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Subs;
