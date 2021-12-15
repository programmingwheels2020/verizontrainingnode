function Person(name, place) {
    this.name = name
    this.place = place

}

Person.prototype.getName = function () {
    console.log(this);
    var parent = this;
    setTimeout(function () {
        console.log(parent.name);
    }, 3000)
}

var obj = new Person("Lenin", "Cochin")

console.log(obj.getName())