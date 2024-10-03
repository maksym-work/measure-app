import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AssessmentState {
    selected: "correct" | "incorrect" | null
    selectedAnswers: string[]
    selectedAnimals: string[]
}

const initialState: AssessmentState = {
    selected: null,
    selectedAnswers: [],
    selectedAnimals: []
  };
  
  const assessmentSlice = createSlice({
    name: 'assessment',
    initialState,
    reducers: {
      setSelected: (state, action: PayloadAction<"correct" | "incorrect" | null>) => {
        state.selected = action.payload;
      },
      clearSelected: (state) => {
        state.selected = null;
      },
      setSelectedAnswers: (state, action: PayloadAction<string[]>) =>{
        state.selectedAnswers = action.payload;
      },
      clearSelectedAnswers: (state) => {
        state.selectedAnswers = [];
      },
      setSelectedAnimals: (state, action: PayloadAction<string[]>) =>{
        state.selectedAnimals = action.payload;
      },
      clearSelectedAnimals: (state) => {
        state.selectedAnimals = [];
      },
    },
  });
  
  export const { setSelected, clearSelected, setSelectedAnswers, setSelectedAnimals, clearSelectedAnswers, clearSelectedAnimals} = assessmentSlice.actions;
  export const getSelected = (state: { assessment: AssessmentState }) => state.assessment.selected;
  export const getSelectedAnswers = (state: { assessment: AssessmentState }) => state.assessment.selectedAnswers;
  export const getSelectedAnimals = (state: { assessment: AssessmentState }) => state.assessment.selectedAnimals;
  export default assessmentSlice.reducer;
  