'use strict';

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');
