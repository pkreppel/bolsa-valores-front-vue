import Vue from 'vue';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import Ripple from 'primevue/ripple';
// import Dropdown from 'primevue/dropdown';
// import Button from 'primevue/button';
// import ScrollPanel from 'primevue/scrollpanel';
// import Card from 'primevue/card';
// import Carousel from 'primevue/carousel';
// import Menu from 'primevue/menu';
import Tooltip from 'primevue/tooltip';
// import OverlayPanel from 'primevue/overlaypanel';
// import DeferredContent from 'primevue/deferredcontent';
// import ProgressSpinner from 'primevue/progressspinner';
// import Toast from 'primevue/toast';
// import ProgressBar from 'primevue/progressbar';
// import Chart from 'primevue/chart';
// import DataTable from 'primevue/datatable';
// import Column from 'primevue/column';
// import InputText from 'primevue/inputtext';
// import MultiSelect from 'primevue/multiselect';
// import SplitButton from 'primevue/splitbutton';
//import Skeleton from 'primevue/skeleton';
//import Accordion from 'primevue/accordion';
//import AccordionTab from 'primevue/accordiontab';
//import Dialog from 'primevue/dialog';

Vue.use(PrimeVue, { ripple: true });
Vue.use(ToastService);

Vue.directive('ripple', Ripple);
Vue.directive('tooltip', Tooltip);

Vue.prototype.$appState = Vue.observable({ inputStyle: 'outlined' });

// Vue.component('p-button', Button);
// Vue.component('p-dropdown', Dropdown);
// Vue.component('p-scrollpanel', ScrollPanel);
// Vue.component('p-card', Card);
// Vue.component('p-carousel', Carousel);
// Vue.component('p-menu', Menu);
// Vue.component('p-overlaypanel', OverlayPanel);
// Vue.component('p-deferredcontent', DeferredContent);
// Vue.component('p-spinner', ProgressSpinner);
// Vue.component('p-toast', Toast);
// Vue.component('p-progressbar', ProgressBar);
// Vue.component('p-chart', Chart);
// Vue.component('p-datatable', DataTable);
// Vue.component('p-column', Column);
// Vue.component('p-inputtext', InputText);
// Vue.component('p-multiselect', MultiSelect);
// Vue.component('p-splitbutton', SplitButton);
//Vue.component('p-skeleton', Skeleton);
//Vue.component('p-accordion', Accordion);
//Vue.component('p-accordiontab', AccordionTab);
//Vue.component('p-dialog', Dialog);
