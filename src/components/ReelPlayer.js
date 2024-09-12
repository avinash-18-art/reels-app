import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ReelPlayer() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    const fetchReels = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/reels');
        setReels(res.data);
      } catch (error) {
        console.error('Failed to load reels');
      }
    };
    fetchReels();
  }, []);

  return (
    <div>
      <h2>Play Reels</h2>
      {reels.map((reel) => (
        <div key={reel._id}>
          <h3>{reel.title}</h3>
          <video controls width="500">
            <source src={`http://localhost:5000/${reel.videoUrl}`} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
}

export default ReelPlayer;
