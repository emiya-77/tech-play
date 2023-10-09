import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';


export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [eventsList, setEventsList] = useState();
    const [blogList, setBlogList] = useState();
    const [discoverList, setDiscoverList] = useState();

    useEffect(() => {
        fetch('/data/service.json')
            .then(res => res.json())
            .then(res => setEventsList(res))
    }, [])

    useEffect(() => {
        fetch('/data/blog.json')
            .then(res => res.json())
            .then(res => setBlogList(res))
    }, [])

    useEffect(() => {
        fetch('/data/discover.json')
            .then(res => res.json())
            .then(res => setDiscoverList(res))
    }, [])

    const data = {
        eventsList,
        blogList,
        discoverList,
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