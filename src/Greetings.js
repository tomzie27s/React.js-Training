import React from 'react';

function Greeting() {
    let greeting = "Try Me";
    const hour = new Date().getHours();

    const customStyle = {
        color: "orange"
    };

    if (hour < 12) {
        greeting = "Good Morning!";
        customStyle.color = "green";
    } else if (hour < 18) {
        greeting = "Good Afternoon!";
        customStyle.color = "blue";
    } else {
        greeting = "Good Evening!";
        customStyle.color = "red";    
    }

    return (
        <div>
            <h1 style={customStyle}>{greeting}</h1>
        </div>
    );
}

export default Greeting;