import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// mount function to start up the app
const mount = (el) => {
   const app = createApp(Dashboard);
   app.mount(el);
};

//check if the app is run id development
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_dashboard-dev-root');

    if(devRoot){
        mount(devRoot);
    }
}

//check if the app is run in container
export { mount };