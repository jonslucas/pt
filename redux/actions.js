let nextExercise = 0;

const addExercise = (name) => {
    return {
        type: 'ADD_EXERCISE',
        id: nextExercise++,
        name
    }
};

const completeExercise = (id, details) => {
    return {
        type: 'COMPLETE_EXERCISE',
        id,
        details
    }
};

export  { addExercise, completeExercise };