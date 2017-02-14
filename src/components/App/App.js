import React from 'react';
import ExerciseList from '../ExerciseList/ExerciseList';
import ExerciseInput from '../ExerciseInput/ExerciseInput';

const App = ()=>{
    return(
        <div className={'app-container'}>
            <ExerciseInput />
            <ExerciseList />
        </div>
    );
};

export default App