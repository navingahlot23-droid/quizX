export const questionsData = {
  javascript: {
    easy: [
      {
        id: 61,
        question: "What is JavaScript?",
        options: [
          "A styling language",
          "A markup language",
          "A programming language",
          "A database language"
        ],
        answer: "A programming language"
      },
      {
        id: 62,
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "all of the above"],
        answer: "all of the above"
      },
      {
        id: 63,
        question: "Which function is used to display output in JavaScript?",
        options: ["console.log()", "print()", "display()", "alert()"],
        answer: "console.log()"
      },
      {
        id: 64,
        question: "What is the result of `3 + 2 + '7'` in JavaScript?",
        options: ["12", "57", "327", "Error"],
        answer: "57"
      },
      {
        id: 65,
        question: "Which operator is used for strict equality comparison in JavaScript?",
        options: ["==", "===", "!=", "!=="],
        answer: "==="
      }
    ],
    medium: [
      {
        id: 71,
        question: "What is an event listener in JavaScript?",
        options: [
          "A function that listens to events",
          "A type of event",
          "A way to trigger events",
          "A global variable"
        ],
        answer: "A function that listens to events"
      },
      {
        id: 72,
        question: "What is the difference between `==` and `===` in JavaScript?",
        options: [
          "No difference",
          "`==` checks only value, `===` checks value and type",
          "`===` checks only value, `==` checks value and type",
          "`==` is faster than `==="
        ],
        answer: "`==` checks only value, `===` checks value and type"
      },
      {
        id: 73,
        question: "What is the output of `parseInt('10', 2)`?",
        options: ["10", "2", "3", "Error"],
        answer: "2"
      },
      {
        id: 74,
        question: "Which method is used to schedule a function to be called after a certain number of milliseconds?",
        options: ["setTimeout()", "setInterval()", "delay()", "wait()"],
        answer: "setTimeout()"
      },
      {
        id: 75,
        question: "What is the purpose of the `map()` function in JavaScript?",
        options: [
          "To iterate over an array",
          "To modify an array",
          "To create a new array with the results of calling a function on every element",
          "To filter an array"
        ],
        answer: "To create a new array with the results of calling a function on every element"
      }
    ],
    hard: [
      {
        id: 81,
        question: "What is the output of `(function(){ return typeof arguments; })();`",
        options: ["object", "array", "arguments", "undefined"],
        answer: "object"
      },
      {
        id: 82,
        question: "What is the purpose of the `Object.create()` method?",
        options: [
          "To create a new object",
          "To create a new object with the specified prototype object and properties",
          "To clone an existing object",
          "To extend an existing object"
        ],
        answer: "To create a new object with the specified prototype object and properties"
      },
      {
        id: 83,
        question: "What is the difference between synchronous and asynchronous JavaScript?",
        options: [
          "No difference",
          "Synchronous is faster than asynchronous",
          "Synchronous code executes in order, asynchronous code can execute out of order",
          "Asynchronous code executes in order, synchronous code can execute out of order"
        ],
        answer: "Synchronous code executes in order, asynchronous code can execute out of order"
      },
      {
        id: 84,
        question: "What is the event loop in JavaScript?",
        options: [
          "A loop that listens to events",
          "A mechanism that handles asynchronous operations",
          "A loop that executes code repeatedly",
          "A way to manage event listeners"
        ],
        answer: "A mechanism that handles asynchronous operations"
      },
      {
        id: 85,
        question: "What is a Promise in JavaScript?",
        options: [
          "A value that will be available in the future",
          "An object that represents the eventual completion or failure of an asynchronous operation",
          "A way to store asynchronous data",
          "A function that returns a value asynchronously"
        ],
        answer: "An object that represents the eventual completion or failure of an asynchronous operation"
      }
    ]
  },
  react: {
    easy: [
      {
        id: 91,
        question: "What is React?",
        options: [
          "A database",
          "A programming language",
          "A JavaScript library for building user interfaces",
          "A CSS framework"
        ],
        answer: "A JavaScript library for building user interfaces"
      },
      {
        id: 92,
        question: "What is JSX?",
        options: [
          "A JavaScript framework",
          "A special syntax for writing HTML in JavaScript",
          "A way to style React components",
          "A database query language"
        ],
        answer: "A special syntax for writing HTML in JavaScript"
      },
      {
        id: 93,
        question: "What is a component in React?",
        options: [
          "A function",
          "A class",
          "A reusable building block for UI",
          "A database table"
        ],
        answer: "A reusable building block for UI"
      },
      {
        id: 94,
        question: "What is the purpose of the `render()` method in a React component?",
        options: [
          "To style the component",
          "To define the component's behavior",
          "To update the component's state",
          "To return the JSX that should be displayed"
        ],
        answer: "To return the JSX that should be displayed"
      },
      {
        id: 95,
        question: "What is state in React?",
        options: [
          "A CSS style",
          "A JavaScript variable",
          "An object that stores component's data",
          "A database"
        ],
        answer: "An object that stores component's data"
      }
    ],

    medium: [
      {
        id: 101,
        question: "What is the significance of the `key` prop in React lists?",
        options: [
          "It is used for styling",
          "It is used to identify components for efficient updating",
          "It is used to pass data to components",
          "It is used for event handling"
        ],
        answer: "It is used to identify components for efficient updating"
      },
      {
        id: 102,
        question: "What is a controlled component in React?",
        options: [
          "A component whose state is controlled by the DOM",
          "A component that controls other components",
          "A component whose state is controlled by React",
          "A component with uncontrolled behavior"
        ],
        answer: "A component whose state is controlled by React"
      },
      {
        id: 103,
        question: "What is an uncontrolled component in React?",
        options: [
          "A component whose state is controlled by React",
          "A component that doesn't have any state",
          "A component whose state is handled by the DOM",
          "A component with controlled behavior"
        ],
        answer: "A component whose state is handled by the DOM"
      },
      {
        id: 104,
        question: "What is the purpose of `useEffect()` hook?",
        options: [
          "To manage state",
          "To perform side effects in functional components",
          "To define component styles",
          "To render components"
        ],
        answer: "To perform side effects in functional components"
      }
    ],

    hard: [
      {
        id: 111,
        question: "What is the difference between `useEffect()` and `useLayoutEffect()`?",
        options: [
          "No difference",
          "`useEffect()` runs synchronously, `useLayoutEffect()` runs asynchronously",
          "`useLayoutEffect()` runs synchronously, `useEffect()` runs asynchronously",
          "`useEffect()` is used for layout effects, `useLayoutEffect()` is used for side effects"
        ],
        answer: "`useLayoutEffect()` runs synchronously, `useEffect()` runs asynchronously"
      },
      {
        id: 112,
        question: "What is the purpose of `React.memo()`?",
        options: [
          "To memoize state variables",
          "To memoize function calls",
          "To memoize components and prevent unnecessary re-renders",
          "To memoize event handlers"
        ],
        answer: "To memoize components and prevent unnecessary re-renders"
      },
      {
        id: 113,
        question: "What is the purpose of `useCallback()`?",
        options: [
          "To memoize state variables",
          "To memoize function calls and prevent unnecessary re-creations",
          "To memoize components",
          "To memoize event handlers"
        ],
        answer: "To memoize function calls and prevent unnecessary re-creations"
      },
      {
        id: 114,
        question: "What is the purpose of `useRef()`?",
        options: [
          "To manage state",
          "To perform side effects",
          "To create a reference that persists across renders",
          "To access the DOM directly"
        ],
        answer: "To create a reference that persists across renders"
      },
      {
        id: 115,
        question: "What is the purpose of the `children` prop?",
        options: [
          "To pass data to a component",
          "To style a component",
          "To render a list of components",
          "To render content inside a component"
        ],
        answer: "To render content inside a component"
      }
    ]
  },
  html: {
    easy: [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "Home Tool Management Language",
          "Hyperlinks Text Markup Language",
          "High Text Marking Language"
        ],
        answer: "Hyper Text Markup Language"
      },
      {
        id: 2,
        question: "Which tag is used to define an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<dl>"],
        answer: "<ul>"
      },
      {
        id: 3,
        question: "What is the correct HTML tag for inserting a line break?",
        options: ["<br>", "<lb>", "<break>", "</br>"],
        answer: "<br>"
      },
      {
        id: 4,
        question: "Which tag is used to make a text bold?",
        options: ["<b>", "<strong>", "<bold>", "<fat>"],
        answer: "<strong>"
      },
      {
        id: 5,
        question: "Which attribute is used to define inline styles?",
        options: ["style", "class", "id", "inline"],
        answer: "style"
      }
    ],
    medium: [
      {
        id: 11,
        question: "Which HTML5 element is used to specify a footer for a document or section?",
        options: ["<footer>", "<bottom>", "<foot>", "<section-footer>"],
        answer: "<footer>"
      },
      {
        id: 12,
        question: "Which HTML5 element is used to embed video content?",
        options: ["<video>", "<media>", "<movie>", "<embed-video>"],
        answer: "<video>"
      },
      {
        id: 13,
        question: "What is the purpose of the <canvas> element in HTML5?",
        options: [
          "To display images",
          "To draw graphics",
          "To embed videos",
          "To create layouts"
        ],
        answer: "To draw graphics"
      },
      {
        id: 14,
        question: "Which input type defines a range slider?",
        options: ["range", "slider", "track", "level"],
        answer: "range"
      },
      {
        id: 15,
        question: "What does the 'async' attribute do in the <script> tag?",
        options: [
          "Executes the script immediately",
          "Defers script execution until the page is fully parsed",
          "Executes the script asynchronously",
          "Prevents the script from executing"
        ],
        answer: "Executes the script asynchronously"
      }
    ],
    hard: [
      {
        id: 21,
        question: "What is the purpose of the 'viewport' meta tag?",
        options: [
          "Defines the visual layout of the page",
          "Controls the browser's zoom and dimensions on different devices",
          "Specifies the character encoding",
          "Sets the page title"
        ],
        answer: "Controls the browser's zoom and dimensions on different devices"
      },
      {
        id: 22,
        question: "Which HTML5 feature allows web applications to store data locally within the user's browser?",
        options: [
          "Cookies",
          "Session Storage",
          "Local Storage",
          "Web SQL Database"
        ],
        answer: "Local Storage"
      },
      {
        id: 23,
        question: "What is the purpose of the 'applicationCache' API in HTML5?",
        options: [
          "To cache application data on the server",
          "To enable offline access to web applications",
          "To store user preferences",
          "To manage application sessions"
        ],
        answer: "To enable offline access to web applications"
      },
      {
        id: 24,
        question: "Which HTML5 element is used to define different media resources for media elements like <video> and <audio>?",
        options: [
          "<source>",
          "<media-source>",
          "<resource>",
          "<src>"
        ],
        answer: "<source>"
      },
      {
        id: 25,
        question: "What is the purpose of the 'ping' attribute in an <a> tag?",
        options: [
          "To measure the loading time of the linked resource",
          "To send a notification to a specified URL when the link is clicked",
          "To test the connection to the linked resource",
          "To preload the linked resource"
        ],
        answer: "To send a notification to a specified URL when the link is clicked"
      }
    ]
  },
  css: {
    easy: [
      {
        id: 31,
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Creative Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
      },
      {
        id: 32,
        question: "Which HTML attribute is used to define inline styles?",
        options: ["style", "class", "id", "css"],
        answer: "style"
      },
      {
        id: 33,
        question: "Which CSS property is used to change the text color of an element?",
        options: ["color", "text-color", "font-color", "text-style"],
        answer: "color"
      },
      {
        id: 34,
        question: "Which CSS property is used to set the background color of an element?",
        options: ["background-color", "color-background", "bg-color", "background"],
        answer: "background-color"
      },
      {
        id: 35,
        question: "Which CSS property controls the text size?",
        options: ["font-size", "text-size", "size", "font"],
        answer: "font-size"
      }
    ],

    medium: [
      {
        id: 41,
        question: "Which CSS property is used to specify the font of an element?",
        options: ["font-family", "text-font", "font-type", "family-font"],
        answer: "font-family"
      },
      {
        id: 42,
        question: "Which CSS property is used to control the spacing between lines of text?",
        options: ["line-height", "text-spacing", "line-spacing", "font-spacing"],
        answer: "line-height"
      },
      {
        id: 43,
        question: "Which CSS property is used to add a shadow to text?",
        options: ["text-shadow", "shadow-text", "font-shadow", "text-effect"],
        answer: "text-shadow"
      },
      {
        id: 44,
        question: "Which CSS property is used to control the order of positioned elements?",
        options: ["z-index", "order", "position", "index"],
        answer: "z-index"
      },
      {
        id: 45,
        question: "Which CSS property is used to make an element transparent?",
        options: ["opacity", "transparency", "visibility", "alpha"],
        answer: "opacity"
      }
    ],

    hard: [
      {
        id: 51,
        question: "What is the purpose of the CSS @media rule?",
        options: [
          "To import external CSS files",
          "To apply styles based on device characteristics",
          "To define global styles for the entire document",
          "To create animations"
        ],
        answer: "To apply styles based on device characteristics"
      },
      {
        id: 52,
        question: "Which CSS property is used to create a flexible box layout?",
        options: ["flex", "grid", "box", "layout"],
        answer: "flex"
      },
      {
        id: 53,
        question: "Which CSS property is used to define a grid layout?",
        options: ["grid", "flex", "table", "layout"],
        answer: "grid"
      },
      {
        id: 54,
        question: "What does the 'box-sizing: border-box;' property do?",
        options: [
          "Includes padding and border in the element's total width and height",
          "Excludes padding and border from the element's total width and height",
          "Only includes the border in the element's total width and height",
          "Only includes the padding in the element's total width and height"
        ],
        answer: "Includes padding and border in the element's total width and height"
      },
      {
        id: 55,
        question: "Which CSS property is used to create a multi-column layout?",
        options: ["columns", "multi-column", "column-layout", "text-columns"],
        answer: "columns"
      }
    ]
  }
}