(function (window) {
  const myPlugin = {}
  myPlugin.install = function (Vue, option) {
    Vue.globalMethod = function () {
      console.log('globalMethods');
    };
    Vue.directive('heng-directive', function(el, binding) {
      console.log(el);
      el.innerHTML = binding.value + 'hengge';
    });
    Vue.prototype.$method = function () {
      console.log('vm\'s method');
    }
  }


  window.myPlugin = myPlugin;
}(window))