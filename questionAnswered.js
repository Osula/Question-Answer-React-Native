import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, video,ListView, ScrollView,FlatList, DatePickerIOS, Modal, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { NavigatorIOS, WebView,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StackNavigator } from 'react-navigation';
import DateTimePicker from 'react-native-modal-datetime-picker';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import ViewMoreText from 'react-native-read-more-text';
import { ImagePicker } from 'expo';
import moment from 'moment';



class QuestionAnswered extends Component {
    constructor(props) {
        super(props);

        var questionFrmoProps = this.props.question;

        this.state = {
            question: questionFrmoProps,
            title: '',
           question:'',
        }
    }
    

    renderQuestionAnswered(question) {
        return(
            <View style={styles.cardRight}> 

                <View style={{flex:1, alignItems:'left'}}>
                    <Text style={styles.userName}>{question.title}</Text>
                </View>

                    <ViewMoreText
                        numberOfLines={2}
                        onReady={this._handleTextReady}>

                        <Text style={styles.cardText}>
                            {question.question}
                        </Text>
                    </ViewMoreText>
            </View>
        )
    }

    render(){
        return(
        this.renderQuestionAnswered(this.state.question)
        )
    }
}

  export default QuestionAnswered;



const styles = StyleSheet.create({

    screenContainer:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    
    ToDoList:{
    
        flexDirection:'column',
    },
    
    
    card: {
        padding: 10,
        borderRadius: 3,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        backgroundColor: 'white',
    },
    
    cardRight: {
        padding: 10,
        borderRadius: 3,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        backgroundColor: 'white',
        margin:10,
    },
    
    cardText: {
    fontSize: 12,
    color:'grey',
    },
    
    
    ToDoTaskList:{
        flexDirection:'column',
        backgroundColor:'red',
        margin:10,
    },
    
    
    descriptionTAsk:{
        margin:10,
    },
    
    singleInput:{
        backgroundColor:'transparent',
        borderRadius:5,
        borderBottomWidth:2,
        borderColor:'#99A3A4',
        height:50,
        padding:5,
        width:300,
        margin:10,
        marginBottom:30,
        
    },
    
    taskListTitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5,
    },
    
    answer:{
        marginLeft:10,
        flexDirection:'column',
    },
    
    delete:{
        marginLeft:10,
    
    },
    
    closedTaskTag:{
        color:'#808B96',
        fontSize:14,
        fontWeight:'bold',
    },
    
    pressedStyle:{
        borderRightWidth:1,
        borderColor:'white',
        backgroundColor:'#34495E',
        width:190,
        height:50,
        paddingLeft:70,
        paddingTop:15,
    },
    
    TaskTag:{
        color:'#34495E',
        fontSize:15,
        fontWeight:'bold',
    },
    
    userName:{
        color:'#34495E',
        fontSize:15,
        fontWeight:'bold',
        marginRight:10,
    },
    
    dueDateTask:{
        color:'#34495E',
        fontSize:12,
        marginRight:10,
        marginTop:3,
    },
    
    TaskDescription:{
        color:'#2E4053',
        fontSize:12,
    
    },
    TaskDescription2:{
        flexDirection:'row',
        width:330,
        height:30,
        marginTop:20,
        justifyContent:'space-between',
        backgroundColor:'transparent',
    },
    
    taskOptions:{
        flexDirection:'row',
        height:50,
        backgroundColor:'#212F3C',
    },
    
    toDo:{
        borderRightWidth:1,
        borderColor:'white',
        backgroundColor:'#34495E',
        width:190,
        height:50,
        paddingLeft:70,
        paddingTop:15,
    },
    toDoNotActive:{
        borderRightWidth:1,
        borderColor:'white',
        backgroundColor:'#212F3C',
        width:190,
        height:50,
        paddingLeft:70,
        paddingTop:15,
    },
    
    closedTask:{
        borderLeftWidth:1,
        borderColor:'white',
        backgroundColor:'#212F3C',
        width:190,
        height:50,
        paddingLeft:65,
        paddingTop:15,
    },
    
    toDoStyle:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
    
    headerContainer:{    
        height:100,
        borderBottomWidth:1,
        borderColor:'#F8F9F9',
        flex: 1, 
        marginBottom:10,
    },
    
    
    descriptionSubText:{
        color:'#AEB6BF',
        fontSize:13,
        
    },
    
    teamProject:{
        height:80,
        width:100,
        borderColor:'#F8F9F9',
        borderRightWidth:1,
    },
    
    teamProjectStyle:{
        height:50,
        width:80,
        alignItems:'center',
        marginTop:20,
    },
    
    dateProject:{
        height:80,
        width:130,
        padding:20,
        borderColor:'#F8F9F9',
        borderRightWidth:1,
    },
    
    dateProjectSub:{
    marginLeft:10,
    },
    
    dateProjectStyle:{
        fontSize:12,
    },
    
    addTask:{
        height:80,
        width:120,
    },
    addTaskStyle:{
        height:50,
        width:80,
        marginLeft:20,
        alignItems:'center',
        marginTop:20,
    },
    
    
    });