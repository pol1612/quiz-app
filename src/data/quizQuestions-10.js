export const quizQuestions_10 = {
  questions: [
    {
      question: 'How does error boundary work in React?',
      choices: ['It prevents any errors from occurring', 'It catches and handles errors in the component tree', 'It automatically fixes errors in the code', 'It displays errors directly to the user'],
      correctAnswer: 'It catches and handles errors in the component tree',
    },
    {
      question: 'What lifecycle method is used to catch JavaScript errors anywhere in the component tree?',
      choices: ['componentDidUpdate', 'componentWillMount', 'componentDidCatch', 'componentError'],
      correctAnswer: 'componentDidCatch',
    },
    {
      question: 'How do you define an error boundary in React?',
      choices: ['By using a special <ErrorBoundary> component', 'By adding a try-catch block to each component', 'By setting the "errorBoundary" prop on a component', 'React does not have built-in support for error boundaries'],
      correctAnswer: 'By using a special <ErrorBoundary> component',
    },
    {
      question: 'What happens if an error boundary component itself throws an error?',
      choices: ['The error is ignored', 'The error is caught by a higher-level error boundary', 'The application crashes', 'The error is displayed to the user'],
      correctAnswer: 'The error is caught by a higher-level error boundary',
    },
    {
      question: 'How can you log errors in React?',
      choices: ['Use console.error()', 'Use console.log()', 'Errors are automatically logged by React', 'Use the onError event'],
      correctAnswer: 'Use console.error()',
    },
    {
      question: 'What is the purpose of the `componentDidCatch` method in error boundaries?',
      choices: ['To log errors to the console', 'To display a custom error message', 'To catch and handle errors in the component tree', 'To prevent errors from occurring'],
      correctAnswer: 'To catch and handle errors in the component tree',
    },
    {
      question: 'How do you handle errors in asynchronous code in React?',
      choices: ['Use try-catch blocks', 'Wrap asynchronous code in an error boundary', 'Use the onError event', 'Errors in asynchronous code cannot be caught in React'],
      correctAnswer: 'Wrap asynchronous code in an error boundary',
    },
    {
      question: 'What is the purpose of the `ErrorBoundary` component in React?',
      choices: ['To display errors to the user', 'To catch and handle errors in the component tree', 'To prevent errors from occurring', 'React does not have an ErrorBoundary component'],
      correctAnswer: 'To catch and handle errors in the component tree',
    },
    {
      question: 'How can you explicitly trigger an error in React for testing error boundaries?',
      choices: ['Use the throw statement', 'Set a global error variable', 'Use the console.error() function', 'Errors cannot be triggered manually in React'],
      correctAnswer: 'Use the throw statement',
    },
    {
      question: 'What is the purpose of the `boundaryEvent` in React?',
      choices: ['To handle errors outside of error boundaries', 'To catch errors thrown by child components', 'To create a boundary between components', 'React does not have a boundaryEvent'],
      correctAnswer: 'To handle errors outside of error boundaries',
    },
  ],
};
