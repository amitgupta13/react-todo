import React from 'react';

const Todos = ({todos})=>{
    const todoList = todos.length ? (
        todos.map(todo=>{
            return(
                <div className="collection-item">
                    
                </div>
            )
        })
    ) : (
        <p className="center">You have no todos left</p>
    );

    return (
        <div className="todos collection">

        </div>
    )
}