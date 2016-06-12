document.write("It works from main" + "<br/>");



interface Person {
    name: string;
    age: number;
}

class Greeter {
   
    sayHello(dog:string) {
        document.write("Helloz from " + dog);
        console.log(this)
    }

}

function sortByName(a: Person[]) {
    var result = a.slice(0);
    result.sort((x, y) => {

        return x.name.localeCompare(y.name);
    });
    return result;
}

let Justin = new Greeter;
Justin.sayHello("asdf");

sortByName([{name:"Justin",age:42}]);