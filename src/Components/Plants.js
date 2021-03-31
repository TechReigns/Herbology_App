import React from 'react';
import { useQuery } from 'react-query';

const fetchPlants = async () => {
    const res= await fetch('http://trefle.io/api/v1/plants?token=qrbYXSsfNwVJLOQI24d-itX0n3dPO3GJ5veUkHz1J7o');
    return res.json();
}

const Plants = () => {
    const { data, status } = useQuery('Plants', fetchPlants);
    console.log(data);

    return (
        <div>
            <h2>Plants</h2>
        </div>
    );
}

export default Plants;