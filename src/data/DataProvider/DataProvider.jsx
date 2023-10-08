import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';


export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [eventsList, setEventsList] = useState();

    useEffect(() => {
        fetch('/data/service.json')
            .then(res => res.json())
            .then(res => setEventsList(res))
    }, [])

    const data = {
        eventsList,
    };

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default DataProvider;