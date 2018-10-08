const say = function (name) {
    //
    alert (`Hello, ${name}`);

    const mySpan = document.getElementsByClassName('TestClass')[0];
    mySpan.textContent = name;

    mySpan.className = 'TestClassNew';
};

export default say;