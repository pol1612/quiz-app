export const quizQuestions_4 = {
  questions: [
    {
      question: 'What is the purpose of the `componentDidMount` lifecycle method in React?',
      choices: ['To handle updates before rendering', 'To perform actions after the component has been rendered', 'To manage component state', 'To initialize component props'],
      correctAnswer: 'To perform actions after the component has been rendered',
    },
    {
      question: 'Which lifecycle method is called before a component is removed from the DOM in React?',
      choices: ['componentDidMount', 'componentWillUnmount', 'componentWillUpdate', 'render'],
      correctAnswer: 'componentWillUnmount',
    },
    {
      question: 'In React, what does the `shouldComponentUpdate` method return by default?',
      choices: ['true', 'false', 'undefined', 'It depends on the component state'],
      correctAnswer: 'true',
    },
    {
      question: 'What is the purpose of the `componentDidUpdate` lifecycle method?',
      choices: ['To initialize component state', 'To handle updates before rendering', 'To perform actions after a component updates', 'To manage component props'],
      correctAnswer: 'To perform actions after a component updates',
    },
    {
      question: 'How can you prevent a component from re-rendering in React?',
      choices: ['By using the `shouldComponentUpdate` method', 'By setting `componentWillUpdate` to false', 'By returning false from the `render` method', 'It is not possible to prevent re-rendering'],
      correctAnswer: 'By using the `shouldComponentUpdate` method',
    },
    {
      question: 'What is the purpose of the `getDerivedStateFromProps` lifecycle method in React?',
      choices: ['To compute the new state based on props', 'To initialize component state', 'To update the component before rendering', 'To manage component props'],
      correctAnswer: 'To compute the new state based on props',
    },
    {
      question: 'When is the `componentWillUnmount` method called in React?',
      choices: ['Before a component is mounted', 'After a component is unmounted', 'Before a component is unmounted', 'After a component is mounted'],
      correctAnswer: 'Before a component is unmounted',
    },
    {
      question: 'Which lifecycle method is invoked before rendering a component in React?',
      choices: ['componentDidMount', 'componentWillUnmount', 'componentWillUpdate', 'componentWillMount'],
      correctAnswer: 'componentWillMount',
    },
    {
      question: 'In React, what is the purpose of the `getSnapshotBeforeUpdate` lifecycle method?',
      choices: ['To capture a DOM snapshot before changes', 'To handle updates before rendering', 'To perform actions after a component updates', 'To manage component props'],
      correctAnswer: 'To capture a DOM snapshot before changes',
    },
    {
      question: 'What is the order of execution for the React component lifecycle methods?',
      choices: ['Mounting, Updating, Unmounting', 'Updating, Mounting, Unmounting', 'Mounting, Unmounting, Updating', 'Updating, Unmounting, Mounting'],
      correctAnswer: 'Mounting, Updating, Unmounting',
    },
  ],
};
