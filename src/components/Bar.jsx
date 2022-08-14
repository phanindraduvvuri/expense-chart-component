import React from 'react';

function Bar(props) {
    const { day, value, today } = props;

    const styles = {
        height: 3 * value + 'px',
        backgroundColor: day == today ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)",
    }

    return (
        <div className="bar-container">
            <div className="value">${value}</div>
            <div className="bar" style={styles}></div>
            <div className="day">{day}</div>
        </div>
    )
}

export default Bar;
