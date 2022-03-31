const Reducer = (state, action) => {
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
