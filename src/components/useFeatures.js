import { useState, useEffect } from 'react';

export default function useFeatures(features) {
    const [ones, setOnes] = useState([]);
    const [twos, setTwos] = useState([]);
    useEffect(() => {
        const ONES = features.filter(feature => feature.category === 'one');
        const TWOS = features.filter(feature => feature.category === 'two');
        setOnes(ONES);
        setTwos(TWOS);
    }, [features]);
    return [ones, twos];
}