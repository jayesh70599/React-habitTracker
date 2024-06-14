import React from "react";
import { Link } from "react-router-dom";
import DayView from "./DayView";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const WeekView = () => {
  // call use selector hook for getting state from reducer
  let habitsState=useSelector((state)=>state.habits);
  
  // getting habit from habits state acording to local storage id and set it on habit
  let habit={}
  for(let i=0;i<habitsState.length;i++){
    if(habitsState[i].id===Number(localStorage.getItem("id"))){
      habit=habitsState[i];
    }
  }
  
  return (
    <>
      <Navbar name="Week View" />
      <h1 className="text-center" style={{textTransform:"capitalize", fontFamily:"-moz-initial", marginTop:"30px", fontWeight:"600", color:"antiquewhite"}}>Weekly Stats for "{habit.name}"</h1>
      <div className="days-container">
        {habit.weekLog.map((day,index)=><DayView day={day} key={index}/>)}
      </div>
      <div className="buttons">
        <div>
        <i className="fa-solid fa-circle-check circle-icon green" ></i>
        <span>: Completed</span>
        </div>
        <div>
        <i className="fa-solid fa-circle-xmark circle-icon red" ></i>
        <span>: Not Completed</span>
        </div>
        <div>
        <i className="fa-solid fa-circle-minus circle-icon active" ></i>
        <span>: No Action Taken</span>
        </div>
     
      </div>
      <div className="d-grid gap-2 col-6 mx-auto mt-5">
        <button className="btn btn-primary btn1" type="button">
          <Link to="/" style={{color:"black"}}>Back to Home</Link>
        </button>
      </div>
    </>
  );
};

export default WeekView;
