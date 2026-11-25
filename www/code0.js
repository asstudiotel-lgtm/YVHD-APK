gdjs.MENUCode = {};
gdjs.MENUCode.localVariables = [];
gdjs.MENUCode.idToCallbackMap = new Map();
gdjs.MENUCode.GDYVHD_9595ONLINE_9595LOGOObjects1= [];
gdjs.MENUCode.GDYVHD_9595ONLINE_9595LOGOObjects2= [];
gdjs.MENUCode.GDNewTextObjects1= [];
gdjs.MENUCode.GDNewTextObjects2= [];
gdjs.MENUCode.GDplay_9595btnObjects1= [];
gdjs.MENUCode.GDplay_9595btnObjects2= [];
gdjs.MENUCode.GDplay_9595txtObjects1= [];
gdjs.MENUCode.GDplay_9595txtObjects2= [];
gdjs.MENUCode.GDcoin_9595txtObjects1= [];
gdjs.MENUCode.GDcoin_9595txtObjects2= [];
gdjs.MENUCode.GDxp_9595txtObjects1= [];
gdjs.MENUCode.GDxp_9595txtObjects2= [];
gdjs.MENUCode.GDLEADERBOARD_9595BTNObjects1= [];
gdjs.MENUCode.GDLEADERBOARD_9595BTNObjects2= [];
gdjs.MENUCode.GDleaderboard_9595txtObjects1= [];
gdjs.MENUCode.GDleaderboard_9595txtObjects2= [];
gdjs.MENUCode.GDCREDITS_9595BTNObjects1= [];
gdjs.MENUCode.GDCREDITS_9595BTNObjects2= [];
gdjs.MENUCode.GDcred_95305t_9595txtObjects1= [];
gdjs.MENUCode.GDcred_95305t_9595txtObjects2= [];
gdjs.MENUCode.GDSHOP_9595BTNObjects1= [];
gdjs.MENUCode.GDSHOP_9595BTNObjects2= [];
gdjs.MENUCode.GDshop_9595txtObjects1= [];
gdjs.MENUCode.GDshop_9595txtObjects2= [];
gdjs.MENUCode.GDaccount_9595txtObjects1= [];
gdjs.MENUCode.GDaccount_9595txtObjects2= [];


gdjs.MENUCode.mapOfGDgdjs_9546MENUCode_9546GDLEADERBOARD_95959595BTNObjects1Objects = Hashtable.newFrom({"LEADERBOARD_BTN": gdjs.MENUCode.GDLEADERBOARD_9595BTNObjects1});
gdjs.MENUCode.mapOfGDgdjs_9546MENUCode_9546GDplay_95959595btnObjects1Objects = Hashtable.newFrom({"play_btn": gdjs.MENUCode.GDplay_9595btnObjects1});
gdjs.MENUCode.mapOfGDgdjs_9546MENUCode_9546GDCREDITS_95959595BTNObjects1Objects = Hashtable.newFrom({"CREDITS_BTN": gdjs.MENUCode.GDCREDITS_9595BTNObjects1});
gdjs.MENUCode.mapOfGDgdjs_9546MENUCode_9546GDSHOP_95959595BTNObjects1Objects = Hashtable.newFrom({"SHOP_BTN": gdjs.MENUCode.GDSHOP_9595BTNObjects1});
gdjs.MENUCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("coin_txt"), gdjs.MENUCode.GDcoin_9595txtObjects1);
gdjs.copyArray(runtimeScene.getObjects("xp_txt"), gdjs.MENUCode.GDxp_9595txtObjects1);
{for(var i = 0, len = gdjs.MENUCode.GDcoin_9595txtObjects1.length ;i < len;++i) {
    gdjs.MENUCode.GDcoin_9595txtObjects1[i].getBehavior("Text").setText("COİN : " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.MENUCode.GDxp_9595txtObjects1.length ;i < len;++i) {
    gdjs.MENUCode.GDxp_9595txtObjects1[i].getBehavior("Text").setText("XP : " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LEADERBOARD_BTN"), gdjs.MENUCode.GDLEADERBOARD_9595BTNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MENUCode.mapOfGDgdjs_9546MENUCode_9546GDLEADERBOARD_95959595BTNObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEADERBOARD", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_btn"), gdjs.MENUCode.GDplay_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MENUCode.mapOfGDgdjs_9546MENUCode_9546GDplay_95959595btnObjects1Objects, runtimeScene, true, false);
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
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "", true, 55, 1);
}
{gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.func(runtimeScene, "1574317195704406127", null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CREDITS_BTN"), gdjs.MENUCode.GDCREDITS_9595BTNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MENUCode.mapOfGDgdjs_9546MENUCode_9546GDCREDITS_95959595BTNObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12151612);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "credıts", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.func(runtimeScene, "1574317195704406127", null);
}
{gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.func(runtimeScene, "OYUNDA!", "YVHD ONLINE!", 0, 0, "big_logo", "YVHD Online", "", "", null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.hasLoggedIn();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13355604);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
}
if (isConditionTrue_0) {
{gdjs.playerAuthentication.openAuthenticationWindow(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SHOP_BTN"), gdjs.MENUCode.GDSHOP_9595BTNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MENUCode.mapOfGDgdjs_9546MENUCode_9546GDSHOP_95959595BTNObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12783300);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SHOP", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("account_txt"), gdjs.MENUCode.GDaccount_9595txtObjects1);
{for(var i = 0, len = gdjs.MENUCode.GDaccount_9595txtObjects1.length ;i < len;++i) {
    gdjs.MENUCode.GDaccount_9595txtObjects1[i].getBehavior("Text").setText("ACCOUNT NAME : " + gdjs.playerAuthentication.getUsername());
}
}
}

}


};

gdjs.MENUCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MENUCode.GDYVHD_9595ONLINE_9595LOGOObjects1.length = 0;
gdjs.MENUCode.GDYVHD_9595ONLINE_9595LOGOObjects2.length = 0;
gdjs.MENUCode.GDNewTextObjects1.length = 0;
gdjs.MENUCode.GDNewTextObjects2.length = 0;
gdjs.MENUCode.GDplay_9595btnObjects1.length = 0;
gdjs.MENUCode.GDplay_9595btnObjects2.length = 0;
gdjs.MENUCode.GDplay_9595txtObjects1.length = 0;
gdjs.MENUCode.GDplay_9595txtObjects2.length = 0;
gdjs.MENUCode.GDcoin_9595txtObjects1.length = 0;
gdjs.MENUCode.GDcoin_9595txtObjects2.length = 0;
gdjs.MENUCode.GDxp_9595txtObjects1.length = 0;
gdjs.MENUCode.GDxp_9595txtObjects2.length = 0;
gdjs.MENUCode.GDLEADERBOARD_9595BTNObjects1.length = 0;
gdjs.MENUCode.GDLEADERBOARD_9595BTNObjects2.length = 0;
gdjs.MENUCode.GDleaderboard_9595txtObjects1.length = 0;
gdjs.MENUCode.GDleaderboard_9595txtObjects2.length = 0;
gdjs.MENUCode.GDCREDITS_9595BTNObjects1.length = 0;
gdjs.MENUCode.GDCREDITS_9595BTNObjects2.length = 0;
gdjs.MENUCode.GDcred_95305t_9595txtObjects1.length = 0;
gdjs.MENUCode.GDcred_95305t_9595txtObjects2.length = 0;
gdjs.MENUCode.GDSHOP_9595BTNObjects1.length = 0;
gdjs.MENUCode.GDSHOP_9595BTNObjects2.length = 0;
gdjs.MENUCode.GDshop_9595txtObjects1.length = 0;
gdjs.MENUCode.GDshop_9595txtObjects2.length = 0;
gdjs.MENUCode.GDaccount_9595txtObjects1.length = 0;
gdjs.MENUCode.GDaccount_9595txtObjects2.length = 0;

gdjs.MENUCode.eventsList0(runtimeScene);
gdjs.MENUCode.GDYVHD_9595ONLINE_9595LOGOObjects1.length = 0;
gdjs.MENUCode.GDYVHD_9595ONLINE_9595LOGOObjects2.length = 0;
gdjs.MENUCode.GDNewTextObjects1.length = 0;
gdjs.MENUCode.GDNewTextObjects2.length = 0;
gdjs.MENUCode.GDplay_9595btnObjects1.length = 0;
gdjs.MENUCode.GDplay_9595btnObjects2.length = 0;
gdjs.MENUCode.GDplay_9595txtObjects1.length = 0;
gdjs.MENUCode.GDplay_9595txtObjects2.length = 0;
gdjs.MENUCode.GDcoin_9595txtObjects1.length = 0;
gdjs.MENUCode.GDcoin_9595txtObjects2.length = 0;
gdjs.MENUCode.GDxp_9595txtObjects1.length = 0;
gdjs.MENUCode.GDxp_9595txtObjects2.length = 0;
gdjs.MENUCode.GDLEADERBOARD_9595BTNObjects1.length = 0;
gdjs.MENUCode.GDLEADERBOARD_9595BTNObjects2.length = 0;
gdjs.MENUCode.GDleaderboard_9595txtObjects1.length = 0;
gdjs.MENUCode.GDleaderboard_9595txtObjects2.length = 0;
gdjs.MENUCode.GDCREDITS_9595BTNObjects1.length = 0;
gdjs.MENUCode.GDCREDITS_9595BTNObjects2.length = 0;
gdjs.MENUCode.GDcred_95305t_9595txtObjects1.length = 0;
gdjs.MENUCode.GDcred_95305t_9595txtObjects2.length = 0;
gdjs.MENUCode.GDSHOP_9595BTNObjects1.length = 0;
gdjs.MENUCode.GDSHOP_9595BTNObjects2.length = 0;
gdjs.MENUCode.GDshop_9595txtObjects1.length = 0;
gdjs.MENUCode.GDshop_9595txtObjects2.length = 0;
gdjs.MENUCode.GDaccount_9595txtObjects1.length = 0;
gdjs.MENUCode.GDaccount_9595txtObjects2.length = 0;


return;

}

gdjs['MENUCode'] = gdjs.MENUCode;
