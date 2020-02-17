import cuid from 'cuid';

export function reducer(state, action) {
  switch(action.type) {
    case 'ADD-TODO':
      console.log(action.payload)
      return {
        ...state,
        list: [
          ...state.list,
          {
            task: action.payload,
            completed: false,
            id: cuid()
          }
        ],
      }
    case 'TOGGLE-COMPLETED':
      return {
        ...state,
        list: state.list.map((task) => {
            return task.id === action.payload ? { ...task, completed: !task.completed } : task;
          })
      }
    case 'CLEAR-COMPLETED':
      return {
        ...state,
        list: state.list.filter((task) => {
            return !task.completed;
          })
      }
    default:
      return state
  };
};

export const initialList = {
  list: [
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
  ]
}