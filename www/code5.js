gdjs.WINCode = {};
gdjs.WINCode.localVariables = [];
gdjs.WINCode.idToCallbackMap = new Map();
gdjs.WINCode.GDw_95305n_9595txtObjects1= [];
gdjs.WINCode.GDw_95305n_9595txtObjects2= [];
gdjs.WINCode.GDback_9595btnObjects1= [];
gdjs.WINCode.GDback_9595btnObjects2= [];
gdjs.WINCode.GDback_9595txtObjects1= [];
gdjs.WINCode.GDback_9595txtObjects2= [];


gdjs.WINCode.mapOfGDgdjs_9546WINCode_9546GDback_95959595btnObjects1Objects = Hashtable.newFrom({"back_btn": gdjs.WINCode.GDback_9595btnObjects1});
gdjs.WINCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("back_btn"), gdjs.WINCode.GDback_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WINCode.mapOfGDgdjs_9546WINCode_9546GDback_95959595btnObjects1Objects, runtimeScene, true, false);
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
{runtimeScene.getGame().getVariables().getFromIndex(1).add(4);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.func(runtimeScene, "Kazandi!", "35 Wave tamamlandi", 0, 0, "big_logo", "Zafer", "", "", null);
}
}

}


};

gdjs.WINCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WINCode.GDw_95305n_9595txtObjects1.length = 0;
gdjs.WINCode.GDw_95305n_9595txtObjects2.length = 0;
gdjs.WINCode.GDback_9595btnObjects1.length = 0;
gdjs.WINCode.GDback_9595btnObjects2.length = 0;
gdjs.WINCode.GDback_9595txtObjects1.length = 0;
gdjs.WINCode.GDback_9595txtObjects2.length = 0;

gdjs.WINCode.eventsList0(runtimeScene);
gdjs.WINCode.GDw_95305n_9595txtObjects1.length = 0;
gdjs.WINCode.GDw_95305n_9595txtObjects2.length = 0;
gdjs.WINCode.GDback_9595btnObjects1.length = 0;
gdjs.WINCode.GDback_9595btnObjects2.length = 0;
gdjs.WINCode.GDback_9595txtObjects1.length = 0;
gdjs.WINCode.GDback_9595txtObjects2.length = 0;


return;

}

gdjs['WINCode'] = gdjs.WINCode;
