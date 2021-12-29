import { Keyboard, Platform, StatusBar, TextInput, TouchableOpacity } from "react-native";
import React,{useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import Task from './components/Task';
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";

export default function App(){

  const [task, setTask] = useState();
  const [taskItems , setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }
  const completeTask = (index) => {
    let itemsCopy =[...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }





  return(
    <View style={styles.container}>
      {/* Todays task Section */}

    <View style= {styles.taskWrapper} >

      <Text style={styles.sectionTitle}>Today's tasks</Text>
      <View style={styles.lists}>
        {/* takssss will be shown */}
        {
          taskItems.map((item, index)=>{
            return (
              <TouchableOpacity onPress={()=> completeTask(index)}>
                <Task  text={item} key= {index} />
              </TouchableOpacity>
            )
            
            
          })


        }
        {/* <Task text={'Task 01'} />
        <Task text={'Task 02'} /> */}
        
    
      </View>
    </View>
    





    {/* Bottom tab to write tasks */}

    <KeyboardAvoidingView 
        // behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value ={task} onChangeText={text =>setTask(text)} />
        <TouchableOpacity onPress={()=> handleAddTask()}>
          <View style={styles.addTaskWrapper}>
            <Text style={styles.addText}>+</Text>

          </View>
        </TouchableOpacity>
        
      </KeyboardAvoidingView>


    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F9F9F9',
  },
  taskWrapper:{
    paddingTop: 70,
    paddingHorizontal:20,
  },

  sectionTitle:{
    color:'black',
    
    fontSize:24,
    fontWeight:'bold'
    
  },
  lists:{
    marginTop:30
  },




  writeTaskWrapper:{
    position:"absolute",
    bottom:10,
    width:"100%",
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:"center",
    



  },

  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'white',
    width:250,
    height:45,
    borderRadius:60,
   
    borderColor:'#C0C0C0',
    borderWidth:1
  },
  addTaskWrapper:{
    width:60,
    height:60,
    backgroundColor: 'white',
    borderRadius:52,
    justifyContent:'center',
    alignItems:"center",
    borderColor:'#C0C0C0',
    borderWidth:1
  


  },
  addText:{
    justifyContent:'space-between',
  },
        
});

