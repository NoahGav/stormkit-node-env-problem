import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Badge from "primevue/badge";

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("Badge", Badge);
  // Add any other PrimeVue components here.
});