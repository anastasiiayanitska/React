const initialState = {
  users: [
    { id: 1, name: "Anastasiia" },
    { id: 2, name: "Maksym" },
    { id: 3, name: "Vadym" },
  ],
  filter: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
