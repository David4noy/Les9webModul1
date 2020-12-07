$('#myBtn').on('click', function() {

    var name = $('#myInput').val(); // value - לקרוא מה
    alert(`Hello, ${name}! Have a nice day!`)

    localStorage.setItem('userName', name);
})

var name = localStorage.getItem('userName');

if (name != 'null') {

    alert('Hello, ' + name);
}

var cars = [{

    name: "Fiat",
    year: 2020

}]

var carString = JSON.stringify(cars);
console.log(carString);