import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const date = new Date().toISOString().slice(0, 10);
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`);
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const result = await response.json();
                setData(result[currency] || {});
            } catch (error) {
                console.error('Error fetching currency data:', error);
            }
        };
        
        fetchCurrencyData();
    }, [currency]);
    
    return data;
}

export default useCurrencyInfo;
