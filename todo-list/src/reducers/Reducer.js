export function reducer(state, action) {
  switch(action.type) {
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