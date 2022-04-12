import React, { useState } from 'react';

const GetComment = (props) => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const getData = () => {
    setShowComments(!showComments);
    try {
      fetch(`/api/comment/${props.eventId}`)
        .then((res) => res.json())
        .then((data) => setComments(data.comments));
    } catch (err) {
      console.log(err);
    }
  };
  console.log('Res commments dta>>>>>>>>>>>>', comments);

  //   const filteredComments = comments.comments.filter(
  //     (item) => item.eventId === props.event.Id
  //   );
  //   console.log('Filtered Comments>>>', filteredComments);

  return (
    <div>
      <button
        className='px-2 py-2 rounded bg-black text-white border-black hover:bg-white hover:text-black'
        onClick={getData}
      >
        Show comments
      </button>
      {showComments &&
        comments.length > 0 &&
        comments
          .filter((item) => item.eventId === props.eventId)
          .map((item, index) => {
            return (
              <div key={index} className='border rounded my-2'>
                <p className='font-light'>Comment by {item.name}</p>
                <p className='font-semibold pt-4'>{item.comment}</p>
              </div>
            );
          })}
    </div>
  );
};

export default GetComment;
