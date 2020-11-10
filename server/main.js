import { Meteor } from "meteor/meteor";
import { HTTP } from "meteor/http";
import {DataCollection} from "../imports/api/links"


Meteor.startup(() => {
  if(Meteor.isServer) {
    DataCollection.remove({})
  }
})

if (Meteor.isServer) {
  Meteor.methods({
    'getData': getData,
    // 'getData2': getData2
  });
}

const insertData = data => DataCollection.insert({ data });

function getData() {
  HTTP.call(
    "POST",
    "https://pamair.org/pamenviad/no/ref/122",
    {
      data: { method: "get" },
    },
    function(error, result) {
      if(error){
        console.log(error);
      } else {
        DataCollection.remove({})
        insertData(result)
      }
    }
  );
}
function getData2() {
  HTTP.call(
    "POST",
    "https://pamair.org/pamenviad/no/ref/13",
    {
      data: { method: "get" },
    },
    function(error, result) {
      if(error){
        console.log(error);
      } else {
        insertData(result)
      }
    }
  );
}
