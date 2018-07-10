import React from 'react';
import { StyleSheet, video,ListView, ScrollView,FlatList, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {RkButton} from 'react-native-ui-kitten';
import Swipeout from 'react-native-swipeout';
import ViewMoreText from 'react-native-read-more-text';
import AnswerInput from './answerInput';
import QuestionAnswered from './questionAnswered';



export default class page2 extends React.Component {
    static navigationOptions = {
        title: 'Questions'
    };

    constructor() {
        super();

        this.state = {
            
                viewToRender:'answer',
                message:'',
                allowVerticalScroll: true,
                cardVisible: true,


                questionAnswered: [{

                    question: "1 Con l'espressione guerra fredda si indica la contrapposizione politica, ideologica e militare che venne a crearsi intorno al 1947 (non tutti gli studiosi concordano), tra le due potenze principali emerse vincitrici dalla seconda guerra mondiale: gli Stati Uniti d'America e l'Unione Sovietica. Ben presto si giunse alla divisione ",
                    title:"Lorem Ipsum asked:",
                }],

                questions : [{
                    id:1,
                    title:"Lorem Ipsum asked:",
                    cardVisible: true,
                    status:false,
                    answer:"Answer",
                    delete:'Delete',
                    date:'20 May 2018',
                    question: "1 Con l'espressione guerra fredda si indica la contrapposizione politica, ideologica e militare che venne a crearsi intorno al 1947 (non tutti gli studiosi concordano), tra le due potenze principali emerse vincitrici dalla seconda guerra mondiale: gli Stati Uniti d'America e l'Unione Sovietica. Ben presto si giunse alla divisione ",
                },
                {   
                    id:2,
                    title:"Lorem Ipsum asked:",
                    status:false,
                    cardVisible: true,
                    answer:"Answer",
                    delete:'Delete',
                    date:'20 May 2018',
                    question: "2 Con l'espressione guerra fredda si indica la contrapposizione politica, ideologica e militare che venne a crearsi intorno al 1947 (non tutti gli studiosi concordano), tra le due potenze principali emerse vincitrici dalla seconda guerra mondiale: gli Stati Uniti d'America e l'Unione Sovietica. Ben presto si giunse alla divisione ",
                },
                {   
                    id:3,
                    title:"Lorem Ipsum asked:",
                    status:false,
                    cardVisible: true,
                    answer:"Answer",
                    delete:'Delete',
                    date:'20 May 2018',
                    question: "3 Con l'espressione guerra fredda si indica la contrapposizione politica, ideologica e militare che venne a crearsi intorno al 1947 (non tutti gli studiosi concordano), tra le due potenze principali emerse vincitrici dalla seconda guerra mondiale: gli Stati Uniti d'America e l'Unione Sovietica. Ben presto si giunse alla divisione ",
                },
            ],

            answers : [{
                id:1,
                title:"You answered: ",
                edit:"Edit",
                delete:'Delete',
                date:'20 May 2018',
                answer: "Con l'espressione guerra fredda si indica la contrapposizione politica, ideologica e militare che venne a crearsi intorno al 1947 (non tutti gli studiosi concordano), tra le due potenze principali emerse vincitrici dalla seconda guerra mondiale: gli Stati Uniti d'America e l'Unione Sovietica. Ben presto si giunse alla divisione ",
            },
            {   
                id:2,
                title:"You answered:",
                edit:"Edit",
                delete:'Delete',
                date:'20 May 2018',
                answer: "Con l'espressione guerra fredda si indica la contrapposizione politica, ideologica e militare che venne a crearsi intorno al 1947 (non tutti gli studiosi concordano), tra le due potenze principali emerse vincitrici dalla seconda guerra mondiale: gli Stati Uniti d'America e l'Unione Sovietica. Ben presto si giunse alla divisione ",
            },
            {   
                id:3,
                title:"You answered:",
                edit:"Edit",
                delete:'Delete',
                date:'20 May 2018',
                answer: "Con l'espressione guerra fredda si indica la contrapposizione politica, ideologica e militare che venne a crearsi intorno al 1947 (non tutti gli studiosi concordano), tra le due potenze principali emerse vincitrici dalla seconda guerra mondiale: gli Stati Uniti d'America e l'Unione Sovietica. Ben presto si giunse alla divisione ",
            },
        ],

            taskSwipeBtn : [{
                text:'Delete',
                buttonWidth: 150,
                backgroundColor: 'tomato',
                underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
                scroll:()=> {},
                onPress: () => { this.closeTask() },
            }],
            
        }
        
    }

closeTask(questionsId){
    var questions = [];
    for (var i=0; i<this.state.questions.length; i++){
        if (this.state.questions[i].id != questionsId ){
            questions.push(this.state.questions[i]);
        }
    }
    
    this.setState({questions:questions})
    
}
    isFormCompleted(){
        return this.state.message != ''
    }
    
    ShowHideTextComponentView = () =>{
    
        if(this.state.status == true)
        {
            this.setState({status: false})
        }
        else
        {
            this.setState({status: true})
        }
    }

    SwipeScrollEvent(allowParentScroll) {
        if (this.state.allowVerticalScroll != allowParentScroll) {
            this.setState({'allowVerticalScroll': allowParentScroll})
        }
    }

    returnAnswerInputForQuestion(question, i) {
        console.log(question.id)
        return <AnswerInput close={(a) => {
            console.log("calling new Answer in closure")
            this.addNewAnswer(a)}
         } question={question} />;
    }

    addNewAnswer(newAnswer){
        console.log('calling addNewAnswer in questions')
        var newAnswerList = this.state.answers;
        console.log('pushing new answer:' + JSON.stringify(newAnswer))
        newAnswerList.push(newAnswer)
        console.log('updating status with new answers list')
        this.setState({answers: newAnswerList})
        this.setState({status: false})
        console.log('hiding card')
        this.setState({cardVisible: false})
    }


    renderToAnswer(){
        return this.state.questions.map(this.returnAnswerInputForQuestion.bind(this))
    }

renderQuestionUnderAnswer(question, i){
    return(
        <View key={i}>
            <View style={styles.cardRightQuestion}> 
                <View style={{flex:1, alignItems:'left'}}>
                    <Text style={styles.userName}>{question.title}</Text>
                </View>
                <ViewMoreText
                    numberOfLines={2}
                    onReady={this._handleTextReady}>

                    <Text style={styles.cardTextUnderQuestion}>
                        {question.question}
                    </Text>
                </ViewMoreText>
            </View>            
        </View>
    )   
}

renderAnswered(element, i){
    return(
        <View key={i}>

            <View style={styles.ToDoTaskList}>
            
                <Swipeout buttonWidth={150} scroll={this.SwipeScrollEvent.bind(this)} right={this.state.taskSwipeBtn}>
                    <View style={styles.card}>
                        

                        <View style={{flex:1, alignItems:'left'}}>
                            <Text style={styles.userName}>{element.title}</Text>
                        </View>

                            <ViewMoreText
                                numberOfLines={3}
                                onReady={this._handleTextReady}>

                                <Text style={styles.cardText}>
                                    {element.answer}
                                </Text>
                            </ViewMoreText>
                            {this.renderQuestionUnderAnswers(this.state.questionAnswered)}
                        <View style={styles.TaskDescription2}>
                            <View>
                                <Text style={styles.dueDateTask}>{element.date}</Text>
                            </View>
                            <View style={styles.answer}>
                                <Text style={styles.TaskTag}>{element.edit}</Text>
                            </View>
                        </View>
                        
                    </View>
                </Swipeout>

             </View>
            
        </View>
    )
}

    showTodo() {
        this.setState({viewToRender: 'answer'});
    }

    showClosed() {
        this.setState({viewToRender: 'answered'});
    }

    renderQuestionUnderAnswers(data){
        return data.map((element, i) => {
            return this.renderQuestionUnderAnswer(element, i);
        })
    }


    renderAnswereds(answersArray) {
        return answersArray.map((element, i) => {
            console.log(element, i);
            return this.renderAnswered(element, i);
        })
    }

    render() {
        return (

    <ScrollView scrollEnabled={this.state.allowVerticalScroll} style={{backgroundColor:'#EBEDEF'}}>
        <MenuProvider>
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', margin:12,}}>
                <TouchableOpacity  onPress={this.showTodo.bind(this)} >
                    <Text style={this.state.viewToRender == "answer" ? style={color:'tomato', fontWeight:'bold', fontSize:18, marginTop:10}: style={color:'#34495E', fontWeight:'bold', fontSize:15}}>To answer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.showClosed.bind(this) } >
                    <Text style={this.state.viewToRender == "answer" ? style={color:'#34495E', fontWeight:'bold', fontSize:15}: style={color:'tomato', fontWeight:'bold', fontSize:18, marginTop:10}}>Answered</Text>
                </TouchableOpacity>
            </View>


            {this.state.viewToRender!='answer'? this.renderAnswereds(this.state.answers) : this.renderToAnswer(this.state.questions)}
    
        </MenuProvider>

    </ScrollView>



        );
    }
    
}

  
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
    backgroundColor: 'red',
},
cardRightQuestion: {
    padding: 15,
    borderRadius: 3,
    borderColor: 'rgba(0,0,0,0.1)',
    borderLeftWidth:1,
    backgroundColor: 'white',
},

cardText: {
fontSize: 15,
color:'black',
},

cardTextUnderQuestion: {
    fontSize: 13,
    color:'grey',
    },

ToDoTaskList:{
    flexDirection:'column',
    backgroundColor:'transparent',
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
    
},

taskListTitle:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:5,
},

answer:{
    marginLeft:10,
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
