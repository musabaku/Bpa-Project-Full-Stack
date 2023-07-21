import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ContentInput = () => {
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };

  const handleSubmit = () => {
    // Code to submit the content to the backend and store it in the database
    // You will need to implement this part with the appropriate API call to your backend.
    console.log('Content submitted:', content);
  };

  return (
    <div>
      <h2>Content Input</h2>
      <ReactQuill value={content} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ContentInput;
