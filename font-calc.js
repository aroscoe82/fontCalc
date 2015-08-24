(function(){

  angular
  .module('fontCalc', [])

  .controller('calcController', function(){
    var calcCtrl = this;
    calcCtrl.fontList = [];
    baseSize = calcCtrl.baseSize;

    this.calc2Em = function() {
      //console.log(calcCtrl.baseSize);
      //console.log(calcCtrl.calcSize);
      if(calcCtrl.baseSize != 0 && calcCtrl.calcSize !=0){
        var emVal = calcCtrl.calcSize / calcCtrl.baseSize;
        calcCtrl.fontList.push({calcEm: emVal, calcPx: calcCtrl.calcSize});
        calcCtrl.calcSize = '';
      }
    };
  });

  var baseSize = '';
})();