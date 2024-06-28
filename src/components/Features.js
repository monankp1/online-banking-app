import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Features.scss';

const Features = () => {
    // const [features, setFeatures] = useState([]);

    // useEffect(() => {
    //     async function fetchFeatures() {
    //         try {
    //             const response = await axios.get(`${BACKEND_ENDPOINT}/features`);
    //             setFeatures(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     fetchFeatures();
    // }, [])

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'features_fetchFeatures' });
    }, [dispatch])

    const { features } = useSelector(state => state.feature);

    return (
        <div className='features-container'>
            {Array.isArray(features) && features.map((feature) => (
                <div className='features-card'>
                    <div className='features-card-image-container'>
                        <img src={feature.image} alt={feature.title} />
                    </div>
                    <h3>{feature.title}</h3>

                    <p>{feature.description}</p>

                </div>
            ))}
        </div>
    )
}

export default Features