const time = prompt("Hello! How many hours to convert to seconds?");

if (isNaN(time)) {
    alert('This is not a nubmer. Please try again.');
}else {
    const timeSecond = 3600 * time;
    alert(`It is ${timeSecond} seconds`); // я не знаю почему оно работает, но попрошу не трогть тут магия
}