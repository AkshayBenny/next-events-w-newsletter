import { useState } from 'react';

const NewsLetter = (props) => {
  const [email, setEmail] = useState('');

  const reqBody = {
    email: email,
  };

  const submitHandler = (e) => {
    e.preventDefault();

    fetch('/api/newsletter', {
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
    <form>
      <label htmlFor='email'>Enter your email:</label>
      <input
        type='email'
        name='email'
        onChange={(e) => setEmail(e.target.value)}
        className='border-2'
        placeholder='email'
      />
      <button className='bg-black text-white' onClick={submitHandler}>
        Submit
      </button>
      <p>{email}</p>
    </form>
  );
};

export default NewsLetter;
