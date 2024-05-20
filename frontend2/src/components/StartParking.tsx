import React, { useState } from 'react';
import axios from 'axios';

const StartParking: React.FC = () => {
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [area, setArea] = useState('');
    const [message, setMessage] = useState('');

    const handleStartParking = async () => {
        try {
            const response = await axios.post('http://localhost:3000/parking/start', { email, city, area });
            setMessage(`Parking started: ${response.data.id}`);
        } catch (error: any) {
            setMessage(`Error: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <div>
            <h2>Start Parking</h2>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <input
                type="text"
                placeholder="Area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
            />
            <button onClick={handleStartParking}>Start Parking</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default StartParking;
