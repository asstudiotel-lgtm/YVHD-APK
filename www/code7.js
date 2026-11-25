gdjs.LOBBYSCode = {};
gdjs.LOBBYSCode.localVariables = [];
gdjs.LOBBYSCode.idToCallbackMap = new Map();
gdjs.LOBBYSCode.GDback_9595txtObjects1= [];
gdjs.LOBBYSCode.GDback_9595txtObjects2= [];


gdjs.LOBBYSCode.mapOfGDgdjs_9546LOBBYSCode_9546GDback_95959595txtObjects1Objects = Hashtable.newFrom({"back_txt": gdjs.LOBBYSCode.GDback_9595txtObjects1});
gdjs.LOBBYSCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("back_txt"), gdjs.LOBBYSCode.GDback_9595txtObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LOBBYSCode.mapOfGDgdjs_9546LOBBYSCode_9546GDback_95959595txtObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GAME MODES", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.hasLobbyGameJustStarted();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GAME ONLINE", false);
}
}

}


};

gdjs.LOBBYSCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LOBBYSCode.GDback_9595txtObjects1.length = 0;
gdjs.LOBBYSCode.GDback_9595txtObjects2.length = 0;

gdjs.LOBBYSCode.eventsList0(runtimeScene);
gdjs.LOBBYSCode.GDback_9595txtObjects1.length = 0;
gdjs.LOBBYSCode.GDback_9595txtObjects2.length = 0;


return;

}

gdjs['LOBBYSCode'] = gdjs.LOBBYSCode;
