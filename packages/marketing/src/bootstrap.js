import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
    ReactDOM.render(<App />, el);
};

//check if the app is run id development
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.getElementById('_marketing-dev-root');

    if(devRoot){
        mount(devRoot);
    }
}

//check if the app is run in container
export { mount };