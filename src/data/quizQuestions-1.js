
export const quizQuestions_1 = {
  
  questions:[
    {
      question: 'What is the main concept in React for building reusable UI elements?',
      choices: ['Components', 'Functions', 'Modules', 'Classes'],
      correctAnswer: 'Components',
    },
    {
      question: 'In React, how do you define a functional component?',
      choices: ['function MyComponent() {}', 'class MyComponent extends React.Component {}', 'const MyComponent = () => {}', 'const MyComponent = function() {}'],
      correctAnswer: 'const MyComponent = () => {}',
    },
    {
      question: 'What is the purpose of the virtual DOM in React?',
      choices: ['To improve performance by minimizing direct DOM manipulation', 'To create a backup of the DOM', 'To replace the DOM with a virtual representation', 'To enforce security measures'],
      correctAnswer: 'To improve performance by minimizing direct DOM manipulation',
    },
    {
      question: 'How can you pass data from a parent component to a child component in React?',
      choices: ['Using state', 'Using props', 'Using context', 'Using Redux'],
      correctAnswer: 'Using props',
    },
    {
      question: 'What is the significance of the `key` prop when rendering a list of components in React?',
      choices: ['It identifies each component uniquely in the list', 'It determines the component order in the list', 'It sets the styling for each component', 'It is not necessary for rendering lists'],
      correctAnswer: 'It identifies each component uniquely in the list',
    },
    {
      question: 'What lifecycle method is called before a component is removed from the DOM in React?',
      choices: ['componentDidMount()', 'componentWillUnmount()', 'componentWillUpdate()', 'render()'],
      correctAnswer: 'componentWillUnmount()',
    },
    {
      question: 'In React, can a functional component have local state?',
      choices: ['Yes, using the useState hook', 'No, only class components can have local state', 'Yes, by declaring a state variable directly', 'No, functional components are stateless'],
      correctAnswer: 'Yes, using the useState hook',
    },
    {
      question: 'What is the purpose of the `React.Fragment` in React components?',
      choices: ['To create invisible elements', 'To group multiple elements without adding extra nodes to the DOM', 'To define a component class', 'To add metadata to components'],
      correctAnswer: 'To group multiple elements without adding extra nodes to the DOM',
    },
    {
      question: 'What is the role of the `shouldComponentUpdate` method in a class component?',
      choices: ['To determine if the component should re-render', 'To define the initial state of the component', 'To handle component errors', 'To manage component props'],
      correctAnswer: 'To determine if the component should re-render',
    },
    {
      question: 'In React, what is used to handle user input in forms?',
      choices: ['FormHandler component', 'useState hook', 'FormSubmitter module', 'onChange event'],
      correctAnswer: 'onChange event',
    },
  ]
}