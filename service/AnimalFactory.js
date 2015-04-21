animalShelter.factory('AnimalFactory', function AnimalFactory() {
    var factory = {};
    factory.animals = [
        { name: "Ted", species: "Cat", vaccinated: true, adopted: false }
    ];

    factory.addAnimal = function(name, species, vaccinated) {
        var animal = { name: name, species: species, vaccinated: vaccinated, adopted: false };
        factory.animals.push(animal);
    };

    return factory;
});
