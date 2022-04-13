import { useState } from 'react';

const NewsLetter = (props) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const reqBody = {
    email: email,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setLoading(false));
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
      {loading && (
        <p className='text-green-500 font-light'>Submitting data...</p>
      )}
      <button className='bg-black text-white' onClick={submitHandler}>
        Submit
      </button>
    </form>
  );
};

export default NewsLetter;
