animalShelter.controller('AnimalsCtrl', function AnimalCtrl($scope, AnimalFactory) {
    $scope.animals = AnimalFactory.animals;
    $scope.AnimalFactory = AnimalFactory;
    $scope.addAnimal = function() {
        var name = $scope.animalName;
        var species = $scope.animalSpecies;
        var vaccinated = $scope.vaccinated;
        AnimalFactory.addAnimal(name, species, vaccinated);
        $scope.animalName = null;
        $scope.animalSpecies = null;
        $scope.vaccinated = null;
    }
});
