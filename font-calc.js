(function(){

  angular
  .module('fontCalc', ['LocalStorageModule'])
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('fontCalc')
      // .setStorageType('sessionStorage')
      // .setNotify(true, true)
  })
  .controller('calcController', function($scope, localStorageService){
    var calcCtrl = this;

    //localstorage
    var baseFontInStore = localStorageService.get('baseFontSize');
    var fontListInStore = localStorageService.get('fontList');
    calcCtrl.baseSize = baseFontInStore || '';
    calcCtrl.fontList = fontListInStore || [];

    // // watch for change and save to storage
    $scope.$watch('calcCtrl.baseSize', function () {
      localStorageService.set('baseFontSize', calcCtrl.baseSize);
    }, true);

    // // watch for change and save to storage
    $scope.$watch('calcCtrl.fontList', function () {
      localStorageService.set('fontList', calcCtrl.fontList);
    }, true);

    // calcCtrl.fontList = [];
    //baseSize = calcCtrl.baseSize;

    this.calc2Em = function() {
      //console.log(calcCtrl.baseSize);
      //console.log(calcCtrl.calcSize);
      if(calcCtrl.baseSize != 0 && calcCtrl.calcSize !=0){
        var emVal = calcCtrl.calcSize / calcCtrl.baseSize;
        calcCtrl.fontList.push({baseSize: calcCtrl.baseSize, calcEm: emVal, calcPx: calcCtrl.calcSize});
        calcCtrl.calcSize = '';
      }
    };

    $scope.resetSet = function() {
      localStorageService.remove('baseFontSize', 'fontList');
      calcCtrl.baseSize = '';
      calcCtrl.fontList = [];

      if($scope.btnLock == true){
        $scope.btnLock = false;
      }
    };

  });

  var baseSize = '';
})();