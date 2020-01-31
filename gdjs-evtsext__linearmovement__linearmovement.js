
gdjs.evtsExt__LinearMovement__LinearMovement = gdjs.evtsExt__LinearMovement__LinearMovement || {};

/**
 * Behavior generated from Linear movement
 * @class LinearMovement
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.SpeedX = behaviorData.SpeedX !== undefined ? behaviorData.SpeedX : Number("0") || 0;
    this._behaviorData.SpeedY = behaviorData.SpeedY !== undefined ? behaviorData.SpeedY : Number("0") || 0;
};

gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.thisIsARuntimeBehaviorConstructor = "LinearMovement::LinearMovement";

// Properties:
gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.eventsList0xb49e0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].addForce((gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedX()), (gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedY()), 0);
}
}}

}


}; //End of gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.eventsList0xb49e0


gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
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

gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.eventsList0xb49e0(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype._getSpeedX = function() {
    return this._behaviorData.SpeedX !== undefined ? this._behaviorData.SpeedX : Number("0") || 0;
};
gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype._setSpeedX = function(newValue) {
    this._behaviorData.SpeedX = newValue;
};
gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype._getSpeedY = function() {
    return this._behaviorData.SpeedY !== undefined ? this._behaviorData.SpeedY : Number("0") || 0;
};
gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype._setSpeedY = function(newValue) {
    this._behaviorData.SpeedY = newValue;
};
