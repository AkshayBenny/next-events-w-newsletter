import React, { useState } from 'react';

const Comment = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const reqBody = {
    eventId: props.eventId,
    name: name,
    email: email,
    comment: comment,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className='flex justify-center items-center'>
      <form className='space-y-4' onSubmit={submitHandler}>
        <div className='flex gap-6 '>
          <input
            onChange={(e) => setName(e.target.value)}
            type='text'
            placeholder='Name'
            className='border-gray-700 border-2 rounded px-4 py-2'
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            placeholder='Email'
            className='border-gray-700 border-2 rounded px-4 py-2'
          />
        </div>
        <textarea
          onChange={(e) => setComment(e.target.value)}
          className='border-gray-700 w-full border-2 rounded px-4 py-2'
          name='comment'
          id='comment'
          placeholder='Comment'
        ></textarea>
        <button className='bg-black px-4 py-2 text-white rounded'>
          Add comment
        </button>
      </form>
    </div>
  );
};

export default Comment;
