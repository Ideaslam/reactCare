 

  const callApi ={};

  callApi.call =(route,method,data ,cb) => {
    // fetch('https://reactcareapi.azurewebsites.net'+route , {
    //     method: method,
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     data: JSON.stringify(data),
    //   }).then((response) => response.json())
    //       .then((responseJson) => {
    //         console.log(responseJson)
    //         cb(responseJson) ;
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //         cb({status:false , message :"error", data :{} , err:error});
    //       });

    console.log(route);
    cb({status :true, data:[{username:'islam'}]} );
};


export default callApi ;