import React from 'react';

const RecurrenceOptions = ({ recurrence, setRecurrence }) => {
    return (
        <div>
            <h3>Recurrence Options</h3>
            <select value={recurrence} onChange={(e) => setRecurrence(e.target.value)}>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
            </select>
        </div>
    );
};

export default RecurrenceOptions;
