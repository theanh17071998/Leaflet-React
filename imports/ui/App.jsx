import React, { useState } from "react";
import {
  Map,
  TileLayer,
  Popup,
  Marker,
  Tooltip,
} from "react-leaflet";
import InfoDetail from "./infoDetail";
import {DataCollection} from "../api/links"
import { useTracker } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor'


const DEFAULT_LATITUDE = 20.98369839999999;
const DEFAULT_LONGITUDE = 105.86362570000006;

export const App = () => {
  const data = useTracker(() => DataCollection.find({}).fetch());
  console.log(data);
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
        <Marker position={[DEFAULT_LATITUDE, DEFAULT_LONGITUDE]}>
          <Popup>
            <InfoDetail/>
          </Popup>
          <Tooltip >
            <div>
              <span>You here</span>
            </div>
          </Tooltip>
        </Marker>
      </Map>
    </div>
  );
};
