# Question-Answer-React-Native
A dynamic Questions and Answers section for your react-native app. 


![](QAscreen.GIF)

# Buil with 
React Native

## Import *AnswerInput* from answerInput.js and *QuestionAnswered* from questionAnswered.js from the files 

```javascript
import AnswerInput from './answerInput';
import QuestionAnswered from './questionAnswered';
```
# Prerequisites
Libraries you need to install 
```javascript 
import React from 'react';
import { StyleSheet, video,ListView, ScrollView,FlatList, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {RkButton} from 'react-native-ui-kitten';
import Swipeout from 'react-native-swipeout';
import ViewMoreText from 'react-native-read-more-text';
```

# Usage
Under every question, there is an input when pressin *Answer*. After answering, the answer and the question go to the other page, under 'Answered'. 

Examples:
```javascript
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

```
