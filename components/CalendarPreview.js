import React from 'react';

const CalendarPreview = ({ selectedDates }) => {
    return (
        <div>
            <h3>Selected Dates</h3>
            <ul>
                {selectedDates.map((date, index) => (
                    <li key={index}>{date.toDateString()}</li>
                ))}
            </ul>
        </div>
    );
};

export default CalendarPreview;
