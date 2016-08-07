
// toggle button
var app = new Vue({
  el: 'body',
  data: {
    show: false,
  },
  methods: {
    toggleShow: function() {
      this.show = !this.show;
    }
  }
});
