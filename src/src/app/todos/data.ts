// Example static todo data
export type Todo = {
  id: string;
  title: string;
  description: string;
  subtasks: { id: string; title: string; done: boolean }[];
};

export const todos: Todo[] = [
  {
    id: '1',
    title: 'Study Data Structures',
    description: 'Review and practice key data structures for computer science.',
    subtasks: [
      { id: '1-1', title: 'Implement linked list in TypeScript', done: false },
      { id: '1-2', title: 'Practice binary trees', done: false },
      { id: '1-3', title: 'Review hash tables', done: true },
    ],
  },
  {
    id: '2',
    title: 'Prepare for Algorithms Exam',
    description: 'Go through sorting and searching algorithms, and solve practice problems.',
    subtasks: [
      { id: '2-1', title: 'Bubble sort and quicksort', done: true },
      { id: '2-2', title: 'Binary search practice', done: false },
      { id: '2-3', title: 'Dynamic programming basics', done: false },
    ],
  },
  {
    id: '3',
    title: 'Complete Operating Systems Assignment',
    description: 'Write a report on process scheduling and memory management.',
    subtasks: [
      { id: '3-1', title: 'Research process scheduling algorithms', done: true },
      { id: '3-2', title: 'Summarize memory management techniques', done: false },
    ],
  },
  {
    id: '4',
    title: 'Read Computer Networks Chapter 5',
    description: 'Understand TCP/IP protocols and network layers.',
    subtasks: [
      { id: '4-1', title: 'Read about TCP', done: false },
      { id: '4-2', title: 'Review OSI model', done: false },
    ],
  },
  {
    id: '5',
    title: 'Practice LeetCode Problems',
    description: 'Solve 5 new LeetCode problems in the algorithms section.',
    subtasks: [
      { id: '5-1', title: 'Arrays and strings', done: true },
      { id: '5-2', title: 'Recursion', done: false },
      { id: '5-3', title: 'Graphs', done: false },
    ],
  },
];
