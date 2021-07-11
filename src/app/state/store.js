import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../../features/message/state/MessageSlice";
import resumeReducer from "../../features/resume/state/ResumeSlice";

export const store = configureStore({
  reducer: {
    message: messageReducer,
    resume: resumeReducer,
  },
});
