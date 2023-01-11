"use strict";

var GM = {
  init: function init() {
    this.initCache();
    this.initMap();
  },
  initCache: function initCache() {
    this.$body = $('body');
  },
  initMap: function initMap() {
    var coordinates = {
        lat: 55.69191966153841,
        lng: 37.658783456241366
      },
      markerImage = 'img/img-maps-tooltip.svg',
      zoom = 15,
      map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: zoom,
        disableDefaultUI: true,
        scrollwheel: false
      }),
      marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: markerImage
      });
  }
};
$(document).ready(function () {
  GM.init();
});