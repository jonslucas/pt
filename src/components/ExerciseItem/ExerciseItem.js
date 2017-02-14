import React from 'react';
import item from './styles.modules.css';

const ExerciseItem = ({
    onClick,
    completed,
    name
}) => {
    console.log(onClick);
    console.log(completed);
    return (
    <div onClick={ onClick } className={completed? item.finished:item.active}>
        { name }
    </div>
    );
};

export default ExerciseItem
