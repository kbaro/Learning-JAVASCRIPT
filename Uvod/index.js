//Ispis na stranici
        console.log('Hello World');

        let name = 'Kristijan';
        console.log(name);

//Cannot be a reserved keyword
//Should be meaningful
//Cannot start with a number(1name)
//Cannot contain a space or hyphen (-)
//Are case-sensitive
        let firstName = 'Kristijan';
        let lastName = 'Baro';

//Const sluzi za upotrebu jednom, let za vise puta

        let interestRate = 0.3;
        interestRate = 1;
        console.log(interestRate);

//Tipovi podataka

        let name = 'Ime'; //String
        let age = 22; //Number
        let isApproved = true; //Boolean (true or false)
        let firstName = undefined;
        let selectedColor = null;

//Ispis u konzoli tipa podatka

        typeof firstName;
        typeof age;

//Ispis podataka o osobi
        let person = {
            name: 'Kristijan',
            age: 22
        };

//Dot Notation
        person.name = 'John';

//Bracket Notation
        let selection = 'name';
        person[selection] = 'Mark';

        console.log(person.name);

//Moguće mjenjati tipove podataka
        let selectedColor = ['red', 'blue'];
        selectedColor[2] = 1;
        console.log(selectedColor.length);

//Funkcija i pozivanje funkcije
        function greet(name, lastName)
        {
                console.log('Hello ' + name + ' ' + lastName);
        }

        greet('Kristijan', 'Baro');
        greet('Marko');

//Računanje

        function square(number)
        {
              return number * number;
        }

        console.log(square(2));