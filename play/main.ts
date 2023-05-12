import { createApp } from 'vue';
import App from './app.vue';
import Bdesign from '@Bdesign/components';
const app = createApp(App);
app.use(Bdesign);
app.mount('#app');
