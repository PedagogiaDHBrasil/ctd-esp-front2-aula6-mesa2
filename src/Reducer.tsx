interface ReducerProps {
  state?: string | object;
  notifications: boolean;
  type?: string;
}

const Reducer = (state: ReducerProps, action: ReducerProps) => {
  console.log("foi");
  
  if (typeof state === "undefined") {
    state = { notifications: false };
  }

  if (action.type === "SAVE_SETTINGS") {
    let notifications = action.notifications;
    return { ...state, notifications };
  } else {
    return state;
  }
};

export default Reducer;
