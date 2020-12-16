import * as React from 'react'
import {View,TouchableOpacity,Text,TextInput, Alert} from 'react-native'

export default class RequestScreen extends React.Component(){
          constructor(){
                    super();
                    this.state={
                              itemName:'',
                              Reason:'',
                              userId:firebase.auth().currentUser.email
                    }
          }
          addRequest=(bookName,bookReason)=>{
                    var userId=this.state.userId
                    var randomRequestId=Math.random()

                    db.collection('requested_books').add({
                              "userId":userId,
                              "itemName":itemName,
                              "Reason":Reason,
                              "requestId":randomRequestId
                    })
                    this.setState({
                              itemName:'',
                              randomRequestId:''
                    })
                    return(
                              Alert.alert("ITEM REQUESTED SUCESSFULLY")
                    )

          }
          render(){
                    return(
                              <View>
                                        <Header
                                        centerComponent="REQUEST ITEM"
                                        />
                                        <View>
                                         <TextInput
                                         placeholder="PLEASE ENTER YOUR ITEM NAME"
                                         value={this.state.itemName}
                                         onChangeText={(text)=>{
                                                   this.setState({
                                                             itemName: text
                                                   })
                                         }}
                                         /> 
                                         <TextInput
                                         placeholder="PLEASE MENTION REASON TO REQUEST ITEM"
                                         multiline
                                         onChangeText={(text)=>{
                                                   this.setState({
                                                             Reason: text
                                                   })
                                         }}
                                         value={this.state.Reason}
                                         />   
                                         <TouchableOpacity
                                         onPress={()=>{
                                                   this.addRequest(this.state.itemName,this.state.Reason)
                                         }}>
                                                   <Text>
                                                    REQUEST
                                                   </Text>
                                                   </TouchableOpacity>    
                                        </View>
                              </View>
                    )
          }
}