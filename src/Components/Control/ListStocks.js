import {useState, useEffect} from 'react';

const ListStocks = props => {
    const [display, setDisplay] = useState([]);

    useEffect(() => {
        let displayList = props.stocks.filter(stock => !props.hiddenStocks.includes(stock));
        setDisplay(displayList.slice(0, props.listMaxSize)); 
    }, [props]);
    
    return (
        <ul>
            {display.map(stock => (
                <button key={stock.symbol}  onClick={() => props.onChange(stock)}>
                    {stock.name}
                </button>
            ))}
        </ul>
    );
};

export default ListStocks;