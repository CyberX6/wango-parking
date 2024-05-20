import React, { useState } from 'react';
import axios from 'axios';

const StopParking: React.FC = () => {
    const [parkingId, setParkingId] = useState('');
    const [message, setMessage] = useState('');

    const handleStopParking = async () => {
        try {
            const response = await axios.post('http://localhost:3000/parking/stop', { id: parkingId });
            setMessage(`Parking stopped. Price: $${response.data.price}`);
        } catch (error: any) {
            setMessage(`Error: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <div>
            <h2>Stop Parking</h2>
            <input
                type="text"
                placeholder="Parking ID"
                value={parkingId}
                onChange={(e) => setParkingId(e.target.value)}
            />
            <button onClick={handleStopParking}>Stop Parking</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default StopParking;
