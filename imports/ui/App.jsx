import React, { useEffect, useState, useMemo } from "react";
import { Map, TileLayer, Popup, Marker, Tooltip } from "react-leaflet";
import InfoDetail from "./infoDetail";
import { DataCollection } from "../api/links";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

const DEFAULT_LATITUDE = 20.98369839999999;
const DEFAULT_LONGITUDE = 105.86362570000006;

export const App = () => {
  const [dataMap, setDataMap] = useState({});
  useEffect(() => {
    Meteor.call("getData", 1, (error, result) => {
      return 0;
    });
  }, []);
  const data = useTracker(() => DataCollection.find({}).fetch());
  console.log(data[0]?.data?.data?.PHHAPI?.body);
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
        {data[0]?.data?.data?.PHHAPI?.body.map((item) =>
          item?.children.map((item2) => (
           item2.children.map((item3, index) => (
            <Marker key={index} position={[item3.lat, item3.lng]}>
            <Popup>
              <InfoDetail info={item3} city={item2} city1={item}/>
            </Popup>
            <Tooltip>
              <div>
                <span>{item3.name}</span>
              </div>
            </Tooltip>
          </Marker>
           )) 
          ))
        )}
      </Map>
    </div>
  );
};
