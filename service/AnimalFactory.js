animalShelter.factory('AnimalFactory', function AnimalFactory() {
    var factory = {};
    factory.animals = [
        { name: "Ted", species: "Cat", vaccinated: true }
    ];

    factory.addAnimal = function() {
        var animal = { name: factory.animalName, species: factory.animalSpecies, vaccinated: factory.vaccinated};
        factory.animals.push(animal);
        debugger;
        factory.animalName = null;
        factory.animalSpecies = null;
        factory.vaccinated = false;
    };
    return factory;
});
