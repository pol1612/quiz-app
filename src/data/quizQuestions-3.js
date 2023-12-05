export const quizQuestions_3 = {
  questions: [
    {
      question: 'What is the main difference between state and props in React?',
      choices: ['Both are the same', 'Props are immutable, state is mutable', 'State is passed from parent to child, props from child to parent', 'State is only used in class components'],
      correctAnswer: 'Props are immutable, state is mutable',
    },
    {
      question: 'How can you update the state in a React class component?',
      choices: ['setState()', 'modifyState()', 'updateState()', 'changeState()'],
      correctAnswer: 'setState()',
    },
    {
      question: 'In a functional component, how do you declare and use state?',
      choices: ['state = useState()', 'const [state, setState] = useState()', 'state = this.useState()', 'useState() is not used in functional components'],
      correctAnswer: 'const [state, setState] = useState()',
    },
    {
      question: 'Can you directly modify the state in React?',
      choices: ['Yes, but it is not recommended', 'No, state should never be modified', 'Only in functional components', 'Only in class components'],
      correctAnswer: 'Yes, but it is not recommended',
    },
    {
      question: 'What is the purpose of lifting state up in React?',
      choices: ['To increase the component hierarchy', 'To improve component performance', 'To share state between sibling components', 'To handle component unmounting'],
      correctAnswer: 'To share state between sibling components',
    },
    {
      question: 'In React, how do you pass data from a child component to a parent component?',
      choices: ['Using state', 'Using props', 'Using context', 'Using Redux'],
      correctAnswer: 'Using props',
    },
    {
      question: 'What is a controlled component in React forms?',
      choices: ['A component that is manually controlled', 'A component that manages its own state', 'A component that receives data via props', 'A component that has no state'],
      correctAnswer: 'A component that manages its own state',
    },
    {
      question: 'How can you set default values for props in a functional component?',
      choices: ['props.defaultValue', 'props.defaultValues', 'propTypes.defaultValue', 'Default values cannot be set for props in functional components'],
      correctAnswer: 'Default values cannot be set for props in functional components',
    },
    {
      question: 'What is the purpose of the `key` prop in a list of React elements?',
      choices: ['To define the element order', 'To provide unique identification for each element', 'To set the styling for each element', 'To enable conditional rendering'],
      correctAnswer: 'To provide unique identification for each element',
    },
    {
      question: 'What happens if you try to modify state directly in React?',
      choices: ['It works without any issues', 'It triggers an error', 'It automatically corrects the modification', 'It is considered a best practice'],
      correctAnswer: 'It triggers an error',
    },
  ],
};
