gdjs.DEADCode = {};
gdjs.DEADCode.localVariables = [];
gdjs.DEADCode.idToCallbackMap = new Map();
gdjs.DEADCode.GDNewTextObjects1= [];
gdjs.DEADCode.GDNewTextObjects2= [];
gdjs.DEADCode.GDback_9595btnObjects1= [];
gdjs.DEADCode.GDback_9595btnObjects2= [];
gdjs.DEADCode.GDback_9595txtObjects1= [];
gdjs.DEADCode.GDback_9595txtObjects2= [];


gdjs.DEADCode.mapOfGDgdjs_9546DEADCode_9546GDback_95959595btnObjects1Objects = Hashtable.newFrom({"back_btn": gdjs.DEADCode.GDback_9595btnObjects1});
gdjs.DEADCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("back_btn"), gdjs.DEADCode.GDback_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DEADCode.mapOfGDgdjs_9546DEADCode_9546GDback_95959595btnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(4);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.func(runtimeScene, "Kaybetti", "YVHD ONLINE!", 0, 0, "big_logo", "Oldu", "", "", null);
}
}

}


};

gdjs.DEADCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DEADCode.GDNewTextObjects1.length = 0;
gdjs.DEADCode.GDNewTextObjects2.length = 0;
gdjs.DEADCode.GDback_9595btnObjects1.length = 0;
gdjs.DEADCode.GDback_9595btnObjects2.length = 0;
gdjs.DEADCode.GDback_9595txtObjects1.length = 0;
gdjs.DEADCode.GDback_9595txtObjects2.length = 0;

gdjs.DEADCode.eventsList0(runtimeScene);
gdjs.DEADCode.GDNewTextObjects1.length = 0;
gdjs.DEADCode.GDNewTextObjects2.length = 0;
gdjs.DEADCode.GDback_9595btnObjects1.length = 0;
gdjs.DEADCode.GDback_9595btnObjects2.length = 0;
gdjs.DEADCode.GDback_9595txtObjects1.length = 0;
gdjs.DEADCode.GDback_9595txtObjects2.length = 0;


return;

}

gdjs['DEADCode'] = gdjs.DEADCode;
