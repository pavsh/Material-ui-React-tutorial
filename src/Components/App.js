import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import {muscles,exercises} from "../store.js"



export default class extends Component {

  state={
    exercises
  }
  getExercisesByMuscles(){
    return Object.entries(
      this.state.exercises.reduce((exercises,exercise)=>{
      const {muscles} = exercise
      exercises[muscles] = exercises[muscles] 
      ? [...exercises[muscles], exercise]
      : [exercise]
      return exercises
      },{})
    )
    }
  render() {
    const orderedbymusclesexercises= this.getExercisesByMuscles()
    console.log(orderedbymusclesexercises)
    return (
      <Fragment>
        <Header />
        <Exercises 
        exercises={orderedbymusclesexercises}
        />
        <Footer 
        muscles={muscles}/>
      </Fragment>
    );
  }
}
