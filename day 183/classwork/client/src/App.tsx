//app.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [backendMessage, setBackendMessage] = useState<string>('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/message');
        setBackendMessage(res.data.message);
      } catch (error: any) {
        console.error('Failed to fetch message:', error.message);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div className="p-6 font-sans">
      <p className="mt-4 text-lg">Backend says: <strong>{backendMessage}</strong></p>
    </div>
  );
};

export default App;
