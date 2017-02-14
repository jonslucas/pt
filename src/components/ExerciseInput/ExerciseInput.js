import React from 'react';
import { connect } from 'react-redux';
import { addExercise } from '../../../redux/actions';

let ExerciseInput = (
    {dispatch}
) => {
  let input;
    return (
        <div >
            <input ref={ node=>{ input = node; } } placeholder='Add Exercise Here' />
            <button onClick={()=>{
                if (input.value) dispatch(addExercise(input.value));
                input.value = '';
            }} >
                Add Exercise
            </button>
        </div>
    );
};

ExerciseInput = connect()(ExerciseInput);

export default ExerciseInput