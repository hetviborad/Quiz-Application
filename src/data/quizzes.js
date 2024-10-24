const quizzes = [
    {
        id: 1,
        title: 'JavaScript Basics',
        description: 'Test your knowledge of JavaScript basics.',
        questions: [
            {
                question: 'What is the correct syntax for referring to an external script?',
                options: ['A. <script src="xxx.js">', 'B. <script href="xxx.js">', 'C. <script ref="xxx.js">','D. None'],
                answer: 0,
            },
            {
                question: 'Which of the following is not a JavaScript data type?',
                options: ['A. String', 'B. Number', 'C. Float','D. Boolean'],
                answer: 2,
            },
        ],
    },
    {
        id: 2,
        title: 'React Basics',
        description: 'Test your knowledge of basic React concepts.',
        questions: [
            {
                question: 'What is React?',
                options: ['A. A framework', 'B. A library', 'C. A language', 'D. An API'],
                answer: 1,
            },
            {
                question: 'What is JSX?',
                options: ['A. JavaScript', 'B. Java Syntax', 'C. JavaScript XML', 'D. None'],
                answer: 2,
            },
        ],
    },
];

export default quizzes;
