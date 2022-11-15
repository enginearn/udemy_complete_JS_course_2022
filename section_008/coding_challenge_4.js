'use strict';

// Coding Challenge #4
// TEST DATA
/*
underscore_case
    first_name
Some_Variable
    calculate_AGE
delayed_departure
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
    document.querySelector('textarea').value = '';
});

// 1. Use the split method to get an array of strings

// 2. Use the toLowerCase method to make all strings lowercase
// 3. Use the trim method to remove whitespace from the start and end of strings
// 4. Use the replace method to replace underscores with spaces
// 5. Use the split method to split the strings into words
// 6. Use the slice method to remove the first word
// 7. Use the toUpperCase method to make the first word uppercase
// 8. Use the join method to join the words back into a string
// 9. Use the slice method to remove the first word
// 10. Use the toLowerCase method to make the first word lowercase
// 11. Use the join method to join the words back into a string
// 12. Use the join method to join the strings back into a string
// 13. Log the result to the console
