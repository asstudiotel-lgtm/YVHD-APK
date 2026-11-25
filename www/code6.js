gdjs.cred_305tsCode = {};
gdjs.cred_305tsCode.localVariables = [];
gdjs.cred_305tsCode.idToCallbackMap = new Map();
gdjs.cred_305tsCode.GDback_9595txtObjects1= [];
gdjs.cred_305tsCode.GDback_9595txtObjects2= [];
gdjs.cred_305tsCode.GDcredt_95305_9595txtObjects1= [];
gdjs.cred_305tsCode.GDcredt_95305_9595txtObjects2= [];


gdjs.cred_305tsCode.mapOfGDgdjs_9546cred_9595305tsCode_9546GDback_95959595txtObjects1Objects = Hashtable.newFrom({"back_txt": gdjs.cred_305tsCode.GDback_9595txtObjects1});
gdjs.cred_305tsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("back_txt"), gdjs.cred_305tsCode.GDback_9595txtObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.cred_305tsCode.mapOfGDgdjs_9546cred_9595305tsCode_9546GDback_95959595txtObjects1Objects, runtimeScene, true, false);
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
{
}

}


};

gdjs.cred_305tsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.cred_305tsCode.GDback_9595txtObjects1.length = 0;
gdjs.cred_305tsCode.GDback_9595txtObjects2.length = 0;
gdjs.cred_305tsCode.GDcredt_95305_9595txtObjects1.length = 0;
gdjs.cred_305tsCode.GDcredt_95305_9595txtObjects2.length = 0;

gdjs.cred_305tsCode.eventsList0(runtimeScene);
gdjs.cred_305tsCode.GDback_9595txtObjects1.length = 0;
gdjs.cred_305tsCode.GDback_9595txtObjects2.length = 0;
gdjs.cred_305tsCode.GDcredt_95305_9595txtObjects1.length = 0;
gdjs.cred_305tsCode.GDcredt_95305_9595txtObjects2.length = 0;


return;

}

gdjs['cred_305tsCode'] = gdjs.cred_305tsCode;
