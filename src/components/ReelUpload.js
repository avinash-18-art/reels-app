import React, { useState } from 'react';
import axios from 'axios';

function ReelUpload() {
  const [title, setTitle] = useState('');
  const [video, setVideo] = useState(null);

  const handleFileChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('video', video);

    try {
      await axios.post('http://localhost:5000/api/reels/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Reel uploaded successfully!');
    } catch (error) {
      alert('Failed to upload reel');
    }
  };

  return (
    <div>
      <h2>Upload a Reel</h2>
      <form onSubmit={handleUpload}>
        <input type="text" placeholder="Reel Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default ReelUpload;
