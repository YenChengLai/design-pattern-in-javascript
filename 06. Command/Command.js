window.onload = function () {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    // set command: register passed command as click event onto passed button
    const setCommand = function (button, command) {
        button.onclick = function () {
            command.execute();
        }
    }

    // use case: each command is encapsulated into the command object
    setCommand(button1, {
        execute: function () { console.log('button 1 clicked'); }
    });

    setCommand(button2, {
        execute: function () { console.log('button 2 clicked'); }
    });

    setCommand(button3, {
        execute: function () { console.log('button 3 clicked'); }
    });
}