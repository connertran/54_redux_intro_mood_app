const INITIAL_STATE = { mood: "happy" };

function moodReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "HAPPY":
      return { ...state, mood: "happy" };
    case "SAD":
      return { ...state, mood: "sad" };
    case "ANGRY":
      return { ...state, mood: "angry" };
    case "CONFUSED":
      return { ...state, mood: "confused" };
    default:
      return state;
  }
}

const store = Redux.createStore(moodReducer);
