import { Meteor } from "meteor/meteor";
import { HTTP } from "meteor/http";

Meteor.startup(() => {
  Meteor.call("getData")
});

// Meteor.methods({
//   getData: function () {
//     HTTP.call(
//       "POST",
//       "https://pamair.org/pamenviad/no/ref/122",
//       { "method": "get" },
//       function (error, result) {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log(result);
//         }
//       }
//     );
//   },
// });

Meteor.call('booking', 1)
