import create from 'zustand';

const useStore = create((set) => ({
    selectedDate: new Date(),
    recurrence: 'daily',
    setSelectedDate: (date) => set({ selectedDate: date }),
    setRecurrence: (recurrence) => set({ recurrence }),
}));

export default useStore;
