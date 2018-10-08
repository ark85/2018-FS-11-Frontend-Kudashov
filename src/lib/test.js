const say = function (name) {
    //
    alert (`Hello, ${name}`);

    let mySpan = document.getElementsByClassName("TestClass")[0];
    mySpan.textContent = name;
    mySpan.style.backgroundColor = "blue";
};

export default say;