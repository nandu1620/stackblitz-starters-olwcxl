import DatePickerComponent from '../components/DatePickerComponent';
import RecurrenceOptions from '../components/RecurrenceOptions';
import CalendarPreview from '../components/CalendarPreview';
import useStore from '../components/store';
import { useEffect, useState } from 'react';

const Page = () => {
    const { selectedDate, setSelectedDate, recurrence, setRecurrence } = useStore();
    const [selectedDates, setSelectedDates] = useState([]);

    useEffect(() => {
        // Logic to calculate recurring dates based on `recurrence`
        // and update `selectedDates` state accordingly.
    }, [recurrence, selectedDate]);

    return (
        <div>
            <h1>Date Picker</h1>
            <DatePickerComponent selectedDate={selectedDate} onChange={setSelectedDate} />
            <RecurrenceOptions recurrence={recurrence} setRecurrence={setRecurrence} />
            <CalendarPreview selectedDates={selectedDates} />
        </div>
    );
};

export default Page;
