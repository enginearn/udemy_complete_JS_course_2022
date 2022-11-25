'use strict';

// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greetArr('Hi')('Jonas');

const poll = {
    question: 'What is your favorite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join(
                    '\n'
                )}\n(Write option number)`
            )
        );
        console.log(answer);
        // Register answer
        typeof answer === 'number' &&
            answer < this.answers.length &&
            this.answers[answer]++;

        console.log(this.answers);
        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    },
};

document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// printForecast([17, 21, 23]);
const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

const printForecast = (arr) => {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}°C in ${i + 1} days ... `;
    }
    console.log(`... ${str}`);
};

printForecast(data1);
printForecast(data2);
