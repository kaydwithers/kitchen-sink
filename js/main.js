// Toggle
Vue.component('v-toggle', {
  template: '#v-toggle',
  props: ['name'],
  data: function() { 
    return { 
      toggleActive: false
    }
  },
  methods: {
    toggle: function() {
      this.toggleActive = !this.toggleActive;
    }
  }
});

var app = new Vue({
  el: '#v-app',
  data: {
    toggleActive: false,
  },
  methods: {}
});
