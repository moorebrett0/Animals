animalShelter.controller('AnimalsCtrl', function AnimalCtrl($scope, AnimalFactory) {
    $scope.animals = AnimalFactory.animals;
    $scope.AnimalFactory = AnimalFactory;
});
