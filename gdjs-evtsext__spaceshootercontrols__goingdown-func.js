gdjs.evtsExt__SpaceShooterControls__GoingDown = {};
gdjs.evtsExt__SpaceShooterControls__GoingDown.GDPlayerObjects1= [];
gdjs.evtsExt__SpaceShooterControls__GoingDown.GDPlayerObjects2= [];

gdjs.evtsExt__SpaceShooterControls__GoingDown.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpaceShooterControls__GoingDown.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SpaceShooterControls__GoingDown.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__SpaceShooterControls__GoingDown.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__SpaceShooterControls__GoingDown.eventsList0xb4790 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__SpaceShooterControls__GoingDown.GDPlayerObjects1.createFrom(eventsFunctionContext.getObjects("Player"));

gdjs.evtsExt__SpaceShooterControls__GoingDown.condition0IsTrue_0.val = false;
gdjs.evtsExt__SpaceShooterControls__GoingDown.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterControls__GoingDown.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpaceShooterControls__GoingDown.GDPlayerObjects1[i].getVariableNumber(gdjs.evtsExt__SpaceShooterControls__GoingDown.GDPlayerObjects1[i].getVariables().get("GoingUp")) == 0 ) {
        gdjs.evtsExt__SpaceShooterControls__GoingDown.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SpaceShooterControls__GoingDown.GDPlayerObjects1[k] = gdjs.evtsExt__SpaceShooterControls__GoingDown.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterControls__GoingDown.GDPlayerObjects1.length = k;}if ( gdjs.evtsExt__SpaceShooterControls__GoingDown.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterControls__GoingDown.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpaceShooterControls__GoingDown.GDPlayerObjects1[i].getVariableNumber(gdjs.evtsExt__SpaceShooterControls__GoingDown.GDPlayerObjects1[i].getVariables().get("GoingDown")) == 1 ) {
        gdjs.evtsExt__SpaceShooterControls__GoingDown.condition1IsTrue_0.val = true;
        gdjs.evtsExt__SpaceShooterControls__GoingDown.GDPlayerObjects1[k] = gdjs.evtsExt__SpaceShooterControls__GoingDown.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterControls__GoingDown.GDPlayerObjects1.length = k;}}
if (gdjs.evtsExt__SpaceShooterControls__GoingDown.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


}; //End of gdjs.evtsExt__SpaceShooterControls__GoingDown.eventsList0xb4790


gdjs.evtsExt__SpaceShooterControls__GoingDown.func = function(runtimeScene, Player, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Player": Player
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
        var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__SpaceShooterControls__GoingDown.GDPlayerObjects1.length = 0;
gdjs.evtsExt__SpaceShooterControls__GoingDown.GDPlayerObjects2.length = 0;

gdjs.evtsExt__SpaceShooterControls__GoingDown.eventsList0xb4790(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
