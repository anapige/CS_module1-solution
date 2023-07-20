var LunchCheck = angular.module('LunchCheck', []);


LunchCheck.controller('LunchCheckController', LunchCheckController)

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){

$scope.name = '' ;
$scope.nbr = 0 ; 

$scope.countItem = function(){
if($scope.name ==''){
  nbr=[];
}else{
nbr = $scope.name.split(",").filter(s => s);
}

$scope.nbr = nbr.length ;
if($scope.nbr>0){
$scope.msg = setMsg($scope.nbr);
$scope.stil = 'ok';
$scope.stil2 = 'ok2';
}
else{
$scope.msg='Please enter data first';
$scope.stil = 'nok';
$scope.stil2 = 'nok2';
}
} ;

function setMsg(nbr){
  if(nbr <= 3)
  return 'Enjoy';
  else
  return 'Too much!'
}
}