<template>
 <div id="map">
      <GmapMap
          :center="center"
          :zoom="zoom"
          map-style-id="roadmap"
          :options="mapOptions"
          style="width: 100%; height: 55vmin"
          ref="mapRef"
          @click="handleMapClick"
      >
        <GmapMarker
            :position="{ lat: lat, lng: lng }"
            :clickable="true"
            :draggable="true"
            @drag="handleMarkerDrag"
            @click="panToMarker"
        />
      </GmapMap>
<!--      <p>Selected Position: {{ marker.position }}</p>-->
    </div>
</template>

<script>
export default {
  name: "AddGoogleMap",
  props: {
    lat: {
      type: [String, Number]
    },
    lng: {
      type: [String, Number]
    }
  },
  data() {
    return {
      marker: { position: { lat: Number(this.$props.lat), lng: Number(this.$props.lng) } },
      center: { lat: Number(this.$props.lat), lng: Number(this.$props.lng) },
      mapOptions: {
        disableDefaultUI: false,
      },
      zoom: 10,
    };
  },
  async mounted() {
    if (this.$props.lat === null || this.$props.lng === null) {
      this.geolocate();
    }
  },
  updated() {
  },
  methods: {
    changeMarkerPosition(position) {
      this.marker.position = position
      this.$emit('update', this.marker.position)
    },
    //detects location from browser
    geolocate() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.changeMarkerPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
        this.panToMarker();
      });
    },
    //sets the position of marker when dragged
    handleMarkerDrag(e) {
      this.changeMarkerPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() })
    },
    //Moves the map view port to marker
    panToMarker() {
      this.center = this.marker.position
      this.$refs.mapRef.panTo(this.marker.position);
      this.zoom = 12;
    },
    //Moves the marker to click position on the map
    handleMapClick(e) {
      this.changeMarkerPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() })
    },


  },

};
</script>

<style scoped>
#map{
  width: 100%;
  margin-top: 20px;
}
</style>