import React, {useState, useEffect} from 'react';
import { fetchData } from './api';

function ApiTest(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData('/getAllSwipes')
            .then(data => setData(data))
            .catch(error => console.error(error));

    }, []);

    return (
        <div>
            {data.map(item => (
                <div key={item.id}>
                    {item.name}
                    </div>
            ))}
        </div>
    );
}

export default ApiTest;