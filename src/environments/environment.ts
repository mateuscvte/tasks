// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyB_-2xbmeHoFZB_R3oGnPVUCO3CDQ6ASmU",
    authDomain: "tasks-b48c9.firebaseapp.com",
    databaseURL: "https://tasks-b48c9.firebaseio.com",
    projectId: "tasks-b48c9",
    storageBucket: "tasks-b48c9.appspot.com",
    messagingSenderId: "344187537803",
    appId: "1:344187537803:web:bdec5fa8319ff90a91078e"
  },
  API: 'https://us-central1-tasks-b48c9.cloudfunctions.net/api'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
