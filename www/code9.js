gdjs.SHOPCode = {};
gdjs.SHOPCode.localVariables = [];
gdjs.SHOPCode.idToCallbackMap = new Map();
gdjs.SHOPCode.GDback_9595txtObjects1= [];
gdjs.SHOPCode.GDback_9595txtObjects2= [];
gdjs.SHOPCode.GDco_95305n_9595txtObjects1= [];
gdjs.SHOPCode.GDco_95305n_9595txtObjects2= [];


gdjs.SHOPCode.mapOfGDgdjs_9546SHOPCode_9546GDback_95959595txtObjects1Objects = Hashtable.newFrom({"back_txt": gdjs.SHOPCode.GDback_9595txtObjects1});
gdjs.SHOPCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("back_txt"), gdjs.SHOPCode.GDback_9595txtObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SHOPCode.mapOfGDgdjs_9546SHOPCode_9546GDback_95959595txtObjects1Objects, runtimeScene, true, false);
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
gdjs.copyArray(runtimeScene.getObjects("coın_txt"), gdjs.SHOPCode.GDco_95305n_9595txtObjects1);
{for(var i = 0, len = gdjs.SHOPCode.GDco_95305n_9595txtObjects1.length ;i < len;++i) {
    gdjs.SHOPCode.GDco_95305n_9595txtObjects1[i].getBehavior("Text").setText("COIN : " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
}

}


};

gdjs.SHOPCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SHOPCode.GDback_9595txtObjects1.length = 0;
gdjs.SHOPCode.GDback_9595txtObjects2.length = 0;
gdjs.SHOPCode.GDco_95305n_9595txtObjects1.length = 0;
gdjs.SHOPCode.GDco_95305n_9595txtObjects2.length = 0;

gdjs.SHOPCode.eventsList0(runtimeScene);
gdjs.SHOPCode.GDback_9595txtObjects1.length = 0;
gdjs.SHOPCode.GDback_9595txtObjects2.length = 0;
gdjs.SHOPCode.GDco_95305n_9595txtObjects1.length = 0;
gdjs.SHOPCode.GDco_95305n_9595txtObjects2.length = 0;


return;

}

gdjs['SHOPCode'] = gdjs.SHOPCode;
