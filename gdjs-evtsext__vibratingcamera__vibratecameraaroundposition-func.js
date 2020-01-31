gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition = {};

gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.conditionTrue_0 = {val:false};
gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.conditionTrue_1 = {val:false};
gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.eventsList0x75061c = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1 / (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Frequency")) || 0 : 0), "CameraVibrationTimer");
}if (gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("YPosition")) || 0 : 0) + gdjs.randomInRange(-((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("YAmplitude")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("YAmplitude")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("XPosition")) || 0 : 0) + gdjs.randomInRange(-((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("XAmplitude")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("XAmplitude")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), 0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CameraVibrationTimer");
}}

}


}; //End of gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.eventsList0x75061c
gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.eventsList0xb4790 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.conditionTrue_1 = gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.condition0IsTrue_0;
gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7717244);
}
}if (gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CameraVibrationTimer");
}}

}


{


gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.conditionTrue_1 = gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.condition0IsTrue_0;
gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Frequency")) || 0 : 0) > 0);
}
}if (gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.eventsList0x75061c(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.eventsList0xb4790


gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.func = function(runtimeScene, XPosition, YPosition, XAmplitude, YAmplitude, Frequency, Layer, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
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
if (argName === "XPosition") return XPosition;
if (argName === "YPosition") return YPosition;
if (argName === "XAmplitude") return XAmplitude;
if (argName === "YAmplitude") return YAmplitude;
if (argName === "Frequency") return Frequency;
if (argName === "Layer") return Layer;
    return "";
  }
};


gdjs.evtsExt__VibratingCamera__VibrateCameraAroundPosition.eventsList0xb4790(runtimeScene, eventsFunctionContext);
return;
}
