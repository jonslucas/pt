import React from 'react';
import { connect } from 'react-redux'
import { completeExercise } from '../../../redux/actions';
import ExerciseItem from '../ExerciseItem/ExerciseItem';

const mapStateToProps = (state) => {
    return {
        workout: state.exerciseList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (id, details) => { dispatch(completeExercise(id, details)) }
    };
};

const list = ({
    workout,
    onItemClick
}) => (
    <div className={ 'exercise-list' } >
        { workout.map(ex =>
                <ExerciseItem key={ ex.id } {...ex} onClick={()=> onItemClick(ex.id, '')} />
        )}
    </div>
);

const ExerciseList = connect(
    mapStateToProps,
    mapDispatchToProps
)(list);

export default ExerciseList