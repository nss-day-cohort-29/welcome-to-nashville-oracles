console.log("hello data.js")



const data =  {

    name: "Data Module/Component",
    
    parksArray: [],
    //the below fetch call was modeled heavily on Dan Brewer/Team Valkyrie. with permission from Dan.
    parksFetch (bloopvalue) {
      fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=9nMovoqrdCLtuY3H8ZlKhwEj1&${bloopvalue}=Yes`)
          .then(response => response.json())
          .then(response => {
              response.forEach(parksObject => {
                  let parkName = parksObject.park_name;
                  console.log(parkName);
                //   let parkAddress = parksObject.mapped_location_address;
                //   parksArray.push(parkName + " " + parkAddress);
                //   console.log(parkName + " " + parkAddress);
                // console.table(parksObject)
                });
          })
    },

}