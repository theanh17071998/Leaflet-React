import React from "react";
import {
  Map,
  TileLayer,
  Popup,
  Marker,
  Tooltip,
} from "react-leaflet";
import InfoDetail from "./infoDetail";
import { Meteor } from "meteor/meteor";


// const DEFAULT_LATITUDE = 21.0245;
// const DEFAULT_LONGITUDE = 105.84117;
const DEFAULT_LATITUDE = 51.505;
const DEFAULT_LONGITUDE = -0.09;

export const App = () => {
// on the client 
//   Meteor.call('getData', function (error, result) {
//     if (error) {
//        console.log(error);
//     } else {
//        console.log('getData result is: ' + result);
//     }
//  });
  return (
    <div>
      <Map
        center={[DEFAULT_LATITUDE, DEFAULT_LONGITUDE]}
        zoom={12}
        style={{ width: "100%", height: "100vh" }}
      >
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.51, -0.09]}>
          <Popup>
            <InfoDetail/>
          </Popup>
          <Tooltip>
            <div>
              <span>You here</span>
            </div>
          </Tooltip>
        </Marker>
      </Map>
    </div>
  );
};
