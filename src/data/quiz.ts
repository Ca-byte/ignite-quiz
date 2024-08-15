export const QUIZ = [
  {
    id: '1',
    title: 'Using States',
    level: 1,
    questions: [
      {
        title: 'Hooks are a way of working with functions in React instead of classes. useState and useEffect are examples of well-used hooks. However, it is not yet possible to create our own hooks.',
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
      {
        title: 'Immutability in React is very important because if we directly mutate the value of a state instead of replacing it with a new value, the component will not properly trigger a re-render.',
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
      {
        title: 'Regarding rendering in React, select the incorrect statement:',
        alternatives: [
          "There are two common cases where a React component is rendered: the initial rendering of the component and state updates.",
          "Re-renders typically do not recreate all components like the initial render.",
          "An update to a parent component's state can trigger a re-render of a child (nested) component.",
          "React does not follow a defined flow when rendering a screen, and the stages of the process can vary significantly."
        ],
        correct: 0  
      },
    ]
  },
  {
    "id": "2",
    "title": "Using TypeScript",
    "level": 2,
    "questions": [
      {
        "title": "What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
        "alternatives": [
          "Explicit",
          "Implicit"
        ],
        "correct": 0
      },
      {
        "title": "What is the type of `const example = ['Dylan']`?",
        "alternatives": [
          "unknown[]",
          "string",
          "string[]",
          "any[]"
        ],
        "correct": 2
      },
      {
        "title": "`keyof` can be used with index signatures to extract the type of the index.",
        "alternatives": [
          "True",
          "False"
        ],
        "correct": 0
      }
    ]
  },
  {
    id: '3',
    title: 'React Navigation',
    level: 2,
    questions: [
      {
        title: 'The best description to identify the Stack Navigator?',
        alternatives: [
          "Adds a fixed menu at the bottom of the device, making it easier to access frequently used screens.",
          "When a new screen is opened, it's placed at the top of the navigation stack, and when going back, the screens are removed from this stack.",
          "Adds a side menu that occupies the entire height of the device. Initially, this menu is hidden, and you can open it by swiping the screen."
        ],
        correct: 1
      },
      {
        title: 'By typing the routes, you gain the advantage of knowing during navigation whether a route receives parameters or not, and what the format of those parameters is.',
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
      {
        title: 'Regarding the NavigationContainer, it is correct to say.',
        alternatives: [
          "The NavigationContainer is the component in which we create a route in the application, passing the 'name' and 'component' properties to it.",
          "The NavigationContainer is a 'hook' exported from react navigation that allows us to access functions like 'navigate' and 'goBack'.",
          "The NavigationContainer is a context that shares all the routes and navigation properties with our application."
        ],
        correct: 2
      },
    ]
  },
  {
    id: '4',
    title: 'Styled Components',
    level: 3,
    questions: [
      {
        title: 'CSS-in-JS is the styling strategy where JavaScript is used to style components.',
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
      {
        title: 'Select the option below that does not correspond to a characteristic of Styled Components.',
        alternatives: [
          "Perform the default import of styled and use it to create components (e.g., styled.View).",
          "It is possible to create predefined styled components with 'styled.' as well as pass custom components to it via styled().",
          "The way to style components is quite similar to what we use when working directly with CSS (lowercase letters, separated by hyphens, and ending with a semicolon).",
          "It is possible to customize only the styles of components (prop style) via styled; in other words, it is not possible to configure other properties/attributes of the component."
        ],
        correct: 1
      },
      {
        title: 'With Styled Components, it is possible to isolate the structure of the component from its styling.',
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
    ]
  },
  {
    id: '5',
    title: 'Local Storage',
    level: 2,
    questions: [
      {
        title: 'Which of the following methods saves information in AsyncStorage?',
        alternatives: [
          'AsyncStorage.removeItem',
          'AsyncStorage.setItem',
          'AsyncStorage.getItem'
        ],
        correct: 1
      },
      {
        title: 'What best describes PropDrilling?',
        alternatives: [
          "Strategy where you pass properties between components until you reach the desired component.",
          "Strategy where you save information locally on the device (storage) and access it when needed.",
          "Strategy where you share information between components through contexts (Context API)."
        ],
        correct: 1
      },
      {
        title: 'What is the correct way to save objects in AsyncStorage?',
        alternatives: [
          "await AsyncStorage.setItem('@app:key', { id: 1, name: 'Item 1' })",
          "await AsyncStorage.getItem('@app:key', JSON.stringify({ id: 1, name: 'Item 1' }))",
          "await AsyncStorage.setItem('@app:key', JSON.stringify({ id: 1, name: 'Item 1' }))"
        ],
        correct: 2
      },
    ]
  },
  {
    id: '6',
    title: 'React Native',
    level: 1,
    questions: [
      {
        title: ' Select the correct statement about React Native:',
        alternatives: [
          "React Native is a JavaScript framework based on React capable of creating applications only for Android and iOS.",
          "Unlike React, React Native is built entirely by the community and has no relation to Facebook.",
          "With React Native, you can maintain almost your entire application in JavaScript and manipulate native code if necessary.",
          "Despite ReactJS's prominence on the web, React Native is not widely used in the mobile job market today."

        ],
        correct: 2
      },
      {
        title: 'Select the incorrect statement about React Native CLI and Expo:',
        alternatives: [
          "Both React Native CLI and Expo allow you to create applications for iOS and Android.",
          "React Native CLI is the more 'bare-bones' way to create a React Native project. Expo, on the other hand, provides additional features on top of this base, such as Expo Go.",
          "With Expo, it is possible to test iOS applications via Expo Go if you have a physical iOS device, even if you don't have a macOS system, which is not possible with React Native CLI.",
          "The official React Native documentation recommends only React Native CLI, not mentioning Expo at all."
        ],
        correct: 3
      },
      {
        title: 'Regarding Expo, select the correct statement:',
        alternatives: [
          "Expo has two traditional paths when creating a project: Managed Workflow and Bare Workflow.",
          "Managed Workflow is the way to create projects where you have access to your native code from the start.",
          "With Bare Workflow, you cannot use Expo Go at any time.",
          "Setting up the React Native environment for Managed Workflow is more complex than for Bare Workflow."
        ],
        correct: 3
      },
      {
        title: 'Regarding componentization in React Native, choose the incorrect statement:',
        alternatives: [
          "Componentization is a way to reuse code snippets in various places in your code.",
          "One of the advantages of componentization is to simplify a very complex component into multiple smaller components, thus facilitating code maintenance.",
          "Although it helps with code reuse and simplification, componentization reduces productivity and readability of the project.",
          "None are correct."
        ],
        correct: 3
      },
    ]
  },
];