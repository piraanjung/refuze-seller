import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;
/**
 * Generated class for the FindBuyersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'find-buyers'
})
@Component({
  selector: 'page-find-buyers',
  templateUrl: 'find-buyers.html',
})
export class FindBuyersPage {

  lat:any;
  lng:any;
  Destination:any = ''
  MyLocation:any =''
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public geo: Geolocation
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindBuyersPage');
    // this.geo.getCurrentPosition().then( pos => {
    //   this.lat = pos.coords.latitude;
    //   this.lng = pos.coords.longitude;
    // }).catch( err => console.log(err));
  }

  calculateAndDisplayRoute() {
    let that = this
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    directionsDisplay.setMap(map);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

       
        map.setCenter(pos);
        this.MyLocation = new google.maps.LatLng(pos)
        console.log(pos)
      }, function() {

      });
    } else {
      // Browser doesn't support Geolocation
      console.log('rrr')
    }

    directionsService.route({
      origin: this.MyLocation,
      destination: this.Destination,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}
