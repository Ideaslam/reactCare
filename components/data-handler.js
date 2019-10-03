
import React, { Component } from "react";
import { AppRegistry,  StyleSheet, Dimensions, View  ,ActivityIndicator } from "react-native";
import { Container,Text  } from "native-base";
 import  callApi  from '../services/call-api'; 


class DataHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
        loading: true,
        dataSource:[]
       };


  }


  componentDidMount(){
   var self =this;

    var res ={status :true, data:[{username:'islam'}]} ;//
    
    callApi.call('user','GET',{},function(res){
      self.setState({
        loading:!res.status ,
        dataSource:res.data 
      })
      console.log(res) ;
    });
    
 

    
    }


    render(){


        if(this.state.loading){
         return( 
           <View style={styles.loader}> 
             <ActivityIndicator size="large" color="#0c9"/>
           </View>
       )}


       return(
        <View style={styles.container}>
        <Text>{this.state.dataSource[0].username }</Text>
       </View>
       )
    
    }
     



}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
     },
    loader:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff"
     },
    list:{
      paddingVertical: 4,
      margin: 5,
      backgroundColor: "#fff"
     }
  });

  export   default DataHandler;
