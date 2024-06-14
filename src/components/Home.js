import React from 'react'
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/features/habitSlice";
import Habits from './Habits'
import Navbar from './Navbar'

const Home = () => {

  const dispatch = useDispatch();

  // function for add habit 
  const handleSave=(e)=>{
    const habitName=document.getElementById("habitName").value;
    if(habitName === ""){
      return;
    }
    dispatch(addHabit(habitName));
    document.getElementById("habitName").value="";
  }
  return (
    <>
      <Navbar name="Detail View"/>
      <div className='form'>
      <input
                  type="text"
                  className="form-control"
                  id="habitName"
                  placeholder="Start a Habit"
                  autoComplete="off"
      />
      <button type="button" className="btn btn-primary"  onClick={handleSave}>
                Save
              </button>
      </div>
    
      <Habits/>
    </>
  )
}

export default Home
