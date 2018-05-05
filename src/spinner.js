var CLI = require('clui'),
    Spinner = CLI.Spinner;

function spinner() {
    return new Spinner('Loading......  ', ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷']);
}

module.exports = spinner()
