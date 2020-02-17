export function reducer(state, action) {
  switch(action.type) {
    case 'ADD-TODO':
      return [
        ...state,
        {
          task: action.payload,
          completed: false,
          id: Date.now()
        }
      ]
    case 'TOGGLE-COMPLETED':
      return {
        ...state,
        completed: !state.completed
      }
    case 'CLEAR-COMPLETED':
      return state.filter((task) => {
        return !task.completed;
      });
    default:
      return state
  };
};

export const initialList = [
  {
    task: 'Create list',
    completed: false,
    id: 1
  },
  {
    task: 'Learn Redux',
    completed: false,
    id: 2
  },
  {
    task: 'Add an item functionality',
    completed: false,
    id: 3
  },
  {
    task: 'Clear completed functionality',
    completed: false,
    id: 4
  },
  {
    task: 'Style the app',
    completed: false,
    id: 5
  }
];