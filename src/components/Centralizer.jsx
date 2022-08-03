import React from 'react'

export const Centralizer = (props) => {
    return (
        <div className="App">
            <div className="center">
                {props.children}
            </div>
        </div>
    )
}
