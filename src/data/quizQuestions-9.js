export const quizQuestions_9 = {
  questions: [
    {
      question: 'What is the Context API in React used for?',
      choices: ['To manage global state', 'To handle events in functional components', 'To replace the component lifecycle methods', 'To create reusable components'],
      correctAnswer: 'To manage global state',
    },
    {
      question: 'How can you create a new context using the Context API in React?',
      choices: ['Create a new instance of the Context class', 'Use the createContext function', 'Define a new context with the createContext method', 'Use the useContext hook'],
      correctAnswer: 'Use the createContext function',
    },
    {
      question: 'In the Context API, how can you provide a value to the context for its descendants?',
      choices: ['Use the <Provider> component', 'Use the setValue method', 'Assign a value directly to the context variable', 'Context values are always accessible without providing'],
      correctAnswer: 'Use the <Provider> component',
    },
    {
      question: 'How can you consume a context value in a functional component using the Context API?',
      choices: ['Use the useContext hook', 'Use the useContextValue hook', 'Wrap the component with the <Context.Consumer> component', 'Context values cannot be accessed in functional components'],
      correctAnswer: 'Use the useContext hook',
    },
    {
      question: 'What happens if a component consumes a context without a matching <Provider> higher in the tree?',
      choices: ['The component will throw an error', 'React automatically provides a default value', 'The component will render without the context', 'Context values are always accessible regardless of the provider'],
      correctAnswer: 'React automatically provides a default value',
    },
    {
      question: 'How can you update the context value in a component using the Context API?',
      choices: ['Use the setValue method on the context', 'Assign a new value directly to the context variable', 'Use the updateContext hook', 'Context values are read-only and cannot be updated'],
      correctAnswer: 'Context values are read-only and cannot be updated',
    },
    {
      question: 'What is the purpose of the `default value` in createContext?',
      choices: ['To provide a default value if there is no matching provider', 'To set the initial value of the context', 'To handle default values for functional components', 'Default values are not supported in createContext'],
      correctAnswer: 'To provide a default value if there is no matching provider',
    },
    {
      question: 'How can you access multiple context values in a component?',
      choices: ['Use multiple <Provider> components', 'Nest the contexts inside each other', 'Context values cannot be nested', 'Use the useContext hook for each context'],
      correctAnswer: 'Nest the contexts inside each other',
    },
    {
      question: 'What is the purpose of the `displayName` property in the createContext method?',
      choices: ['To set a display name for the context', 'To display the context name in the React DevTools', 'To identify the context in the component tree', 'It is not necessary to set a display name'],
      correctAnswer: 'To set a display name for the context',
    },
    {
      question: 'In the Context API, how can you handle dynamic context values?',
      choices: ['Context values cannot be dynamic', 'Use the useContext hook with a callback', 'Use the createDynamicContext function', 'Update the context value directly in the component'],
      correctAnswer: 'Use the useContext hook with a callback',
    },
  ],
};
