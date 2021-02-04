// Imports
const fetch = require('node-fetch'); // only works in NODE


// fetch('https://espn.com') // url, endpoint
//     .then((response) => {
//         return response.text(); // an extra that happens to see the text
//     })
//     .then((html) => {
//         console.log(html);
//     });

// request to a third art database that returns a json object
/*
fetch('https://api.github.com/users/aharri64') //endpoint
    .then(response => {
        return response.json(); // change this responce so we can work with it in javaScript
    })
    .then(data => {
        console.log(data);
    })
*/
fetch('https://api.spacexdata.com/v3/capsules')
    .then(response => {
        return response.json()
    })
    .then(dataArray => {
        console.log(dataArray);
        let c102Object = dataArray[1];
        let capsuleSerial = c102Object['capsule_serial'];
        let capsuleStatus = c102Object.status;
        console.log(c102Object);
        console.log(capsuleSerial);
        console.log(capsuleStatus);
    })