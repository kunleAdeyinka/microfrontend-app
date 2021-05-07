import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';


export default () => {
    const ref = useRef(null);
    console.log('getting reference to mount dahshboard');
    useEffect(() => {
        console.log('mounting the dashboard');
        mount(ref.current);
        console.log('gmounted the dahshboard');
    }, []);

    return <div ref={ref} />
};
