gdjs.Base_32SceneCode = {};
gdjs.Base_32SceneCode.GDNousagiObjects1= [];
gdjs.Base_32SceneCode.GDNousagiObjects2= [];
gdjs.Base_32SceneCode.GDBackgroundObjects1= [];
gdjs.Base_32SceneCode.GDBackgroundObjects2= [];
gdjs.Base_32SceneCode.GDDreamObjects1= [];
gdjs.Base_32SceneCode.GDDreamObjects2= [];
gdjs.Base_32SceneCode.GDCarretObjects1= [];
gdjs.Base_32SceneCode.GDCarretObjects2= [];
gdjs.Base_32SceneCode.GDDonCyanObjects1= [];
gdjs.Base_32SceneCode.GDDonCyanObjects2= [];
gdjs.Base_32SceneCode.GDRibbonObjects1= [];
gdjs.Base_32SceneCode.GDRibbonObjects2= [];
gdjs.Base_32SceneCode.GDClothObjects1= [];
gdjs.Base_32SceneCode.GDClothObjects2= [];
gdjs.Base_32SceneCode.GDDecoObjects1= [];
gdjs.Base_32SceneCode.GDDecoObjects2= [];
gdjs.Base_32SceneCode.GDPekoObjects1= [];
gdjs.Base_32SceneCode.GDPekoObjects2= [];
gdjs.Base_32SceneCode.GDPekoRObjects1= [];
gdjs.Base_32SceneCode.GDPekoRObjects2= [];
gdjs.Base_32SceneCode.GDPekoDObjects1= [];
gdjs.Base_32SceneCode.GDPekoDObjects2= [];
gdjs.Base_32SceneCode.GDPekoDeObjects1= [];
gdjs.Base_32SceneCode.GDPekoDeObjects2= [];
gdjs.Base_32SceneCode.GDPekoCObjects1= [];
gdjs.Base_32SceneCode.GDPekoCObjects2= [];

gdjs.Base_32SceneCode.conditionTrue_0 = {val:false};
gdjs.Base_32SceneCode.condition0IsTrue_0 = {val:false};
gdjs.Base_32SceneCode.condition1IsTrue_0 = {val:false};


gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDNousagiObjects1Objects = Hashtable.newFrom({"Nousagi": gdjs.Base_32SceneCode.GDNousagiObjects1});gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDDreamObjects1Objects = Hashtable.newFrom({"Dream": gdjs.Base_32SceneCode.GDDreamObjects1});gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDPekoObjects1Objects = Hashtable.newFrom({"Peko": gdjs.Base_32SceneCode.GDPekoObjects1});gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDDonCyanObjects1Objects = Hashtable.newFrom({"DonCyan": gdjs.Base_32SceneCode.GDDonCyanObjects1});gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDRibbonObjects1Objects = Hashtable.newFrom({"Ribbon": gdjs.Base_32SceneCode.GDRibbonObjects1});gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDClothObjects1Objects = Hashtable.newFrom({"Cloth": gdjs.Base_32SceneCode.GDClothObjects1});gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDDecoObjects1Objects = Hashtable.newFrom({"Deco": gdjs.Base_32SceneCode.GDDecoObjects1});gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDPekoObjects1Objects = Hashtable.newFrom({"Peko": gdjs.Base_32SceneCode.GDPekoObjects1});gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDRibbonObjects1Objects = Hashtable.newFrom({"Ribbon": gdjs.Base_32SceneCode.GDRibbonObjects1});gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDPekoRObjects1Objects = Hashtable.newFrom({"PekoR": gdjs.Base_32SceneCode.GDPekoRObjects1});gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDPekoObjects1Objects = Hashtable.newFrom({"Peko": gdjs.Base_32SceneCode.GDPekoObjects1});gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDDonCyanObjects1Objects = Hashtable.newFrom({"DonCyan": gdjs.Base_32SceneCode.GDDonCyanObjects1});gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDPekoDObjects1Objects = Hashtable.newFrom({"PekoD": gdjs.Base_32SceneCode.GDPekoDObjects1});gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDPekoObjects1Objects = Hashtable.newFrom({"Peko": gdjs.Base_32SceneCode.GDPekoObjects1});gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDDecoObjects1Objects = Hashtable.newFrom({"Deco": gdjs.Base_32SceneCode.GDDecoObjects1});gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDPekoDeObjects1Objects = Hashtable.newFrom({"PekoDe": gdjs.Base_32SceneCode.GDPekoDeObjects1});gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDPekoObjects1Objects = Hashtable.newFrom({"Peko": gdjs.Base_32SceneCode.GDPekoObjects1});gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDClothObjects1Objects = Hashtable.newFrom({"Cloth": gdjs.Base_32SceneCode.GDClothObjects1});gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDPekoCObjects1Objects = Hashtable.newFrom({"PekoC": gdjs.Base_32SceneCode.GDPekoCObjects1});gdjs.Base_32SceneCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.Base_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Base_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Base_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Nousagi"), gdjs.Base_32SceneCode.GDNousagiObjects1);
gdjs.copyArray(runtimeScene.getObjects("Peko"), gdjs.Base_32SceneCode.GDPekoObjects1);
gdjs.copyArray(runtimeScene.getObjects("PekoC"), gdjs.Base_32SceneCode.GDPekoCObjects1);
gdjs.copyArray(runtimeScene.getObjects("PekoD"), gdjs.Base_32SceneCode.GDPekoDObjects1);
gdjs.copyArray(runtimeScene.getObjects("PekoDe"), gdjs.Base_32SceneCode.GDPekoDeObjects1);
gdjs.copyArray(runtimeScene.getObjects("PekoR"), gdjs.Base_32SceneCode.GDPekoRObjects1);
{for(var i = 0, len = gdjs.Base_32SceneCode.GDNousagiObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDNousagiObjects1[i].addPolarForce(180, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDNousagiObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDNousagiObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoObjects1[i].addPolarForce(180, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoRObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoRObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoRObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoRObjects1[i].addPolarForce(180, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoRObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoRObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoRObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoRObjects1[i].addPolarForce(180, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoDObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoDObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoDObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoDObjects1[i].addPolarForce(180, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoDeObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoDeObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoDeObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoDeObjects1[i].addPolarForce(180, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoCObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoCObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoCObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoCObjects1[i].addPolarForce(180, 200, 0);
}
}}

}


{


gdjs.Base_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Base_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Base_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Nousagi"), gdjs.Base_32SceneCode.GDNousagiObjects1);
gdjs.copyArray(runtimeScene.getObjects("Peko"), gdjs.Base_32SceneCode.GDPekoObjects1);
gdjs.copyArray(runtimeScene.getObjects("PekoC"), gdjs.Base_32SceneCode.GDPekoCObjects1);
gdjs.copyArray(runtimeScene.getObjects("PekoD"), gdjs.Base_32SceneCode.GDPekoDObjects1);
gdjs.copyArray(runtimeScene.getObjects("PekoDe"), gdjs.Base_32SceneCode.GDPekoDeObjects1);
gdjs.copyArray(runtimeScene.getObjects("PekoR"), gdjs.Base_32SceneCode.GDPekoRObjects1);
{for(var i = 0, len = gdjs.Base_32SceneCode.GDNousagiObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDNousagiObjects1[i].addPolarForce(0, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDNousagiObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDNousagiObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoObjects1[i].addPolarForce(0, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoRObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoRObjects1[i].addPolarForce(0, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoRObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoRObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoDObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoDObjects1[i].addPolarForce(0, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoDObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoDObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoDeObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoDeObjects1[i].addPolarForce(0, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoDeObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoDeObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoCObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoCObjects1[i].addPolarForce(0, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoCObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoCObjects1[i].flipX(false);
}
}}

}


{


gdjs.Base_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Base_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Base_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Nousagi"), gdjs.Base_32SceneCode.GDNousagiObjects1);
gdjs.copyArray(runtimeScene.getObjects("Peko"), gdjs.Base_32SceneCode.GDPekoObjects1);
gdjs.copyArray(runtimeScene.getObjects("PekoC"), gdjs.Base_32SceneCode.GDPekoCObjects1);
gdjs.copyArray(runtimeScene.getObjects("PekoD"), gdjs.Base_32SceneCode.GDPekoDObjects1);
gdjs.copyArray(runtimeScene.getObjects("PekoDe"), gdjs.Base_32SceneCode.GDPekoDeObjects1);
gdjs.copyArray(runtimeScene.getObjects("PekoR"), gdjs.Base_32SceneCode.GDPekoRObjects1);
{for(var i = 0, len = gdjs.Base_32SceneCode.GDNousagiObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDNousagiObjects1[i].addPolarForce(270, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoObjects1[i].addPolarForce(270, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoRObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoRObjects1[i].addPolarForce(270, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoDObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoDObjects1[i].addPolarForce(270, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoDeObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoDeObjects1[i].addPolarForce(270, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoCObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoCObjects1[i].addPolarForce(270, 200, 0);
}
}}

}


{


gdjs.Base_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Base_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.Base_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Nousagi"), gdjs.Base_32SceneCode.GDNousagiObjects1);
gdjs.copyArray(runtimeScene.getObjects("Peko"), gdjs.Base_32SceneCode.GDPekoObjects1);
gdjs.copyArray(runtimeScene.getObjects("PekoC"), gdjs.Base_32SceneCode.GDPekoCObjects1);
gdjs.copyArray(runtimeScene.getObjects("PekoD"), gdjs.Base_32SceneCode.GDPekoDObjects1);
gdjs.copyArray(runtimeScene.getObjects("PekoDe"), gdjs.Base_32SceneCode.GDPekoDeObjects1);
gdjs.copyArray(runtimeScene.getObjects("PekoR"), gdjs.Base_32SceneCode.GDPekoRObjects1);
{for(var i = 0, len = gdjs.Base_32SceneCode.GDNousagiObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDNousagiObjects1[i].addPolarForce(90, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoObjects1[i].addPolarForce(90, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoRObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoRObjects1[i].addPolarForce(90, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoDeObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoDeObjects1[i].addPolarForce(90, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoDObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoDObjects1[i].addPolarForce(90, 200, 0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoCObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoCObjects1[i].addPolarForce(90, 200, 0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Dream"), gdjs.Base_32SceneCode.GDDreamObjects1);
gdjs.copyArray(runtimeScene.getObjects("Nousagi"), gdjs.Base_32SceneCode.GDNousagiObjects1);

gdjs.Base_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Base_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDNousagiObjects1Objects, gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDDreamObjects1Objects, false, runtimeScene, false);
}if (gdjs.Base_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Base_32SceneCode.GDDreamObjects1 */
/* Reuse gdjs.Base_32SceneCode.GDNousagiObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Peko"), gdjs.Base_32SceneCode.GDPekoObjects1);
gdjs.Base_32SceneCode.GDClothObjects1.length = 0;

gdjs.Base_32SceneCode.GDDecoObjects1.length = 0;

gdjs.Base_32SceneCode.GDDonCyanObjects1.length = 0;

gdjs.Base_32SceneCode.GDRibbonObjects1.length = 0;

{for(var i = 0, len = gdjs.Base_32SceneCode.GDDreamObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDDreamObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDNousagiObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDNousagiObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoObjects1[i].setPosition((( gdjs.Base_32SceneCode.GDNousagiObjects1.length === 0 ) ? 0 :gdjs.Base_32SceneCode.GDNousagiObjects1[0].getPointX("")),(( gdjs.Base_32SceneCode.GDNousagiObjects1.length === 0 ) ? 0 :gdjs.Base_32SceneCode.GDNousagiObjects1[0].getPointY("")));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDPekoObjects1Objects, (( gdjs.Base_32SceneCode.GDNousagiObjects1.length === 0 ) ? 0 :gdjs.Base_32SceneCode.GDNousagiObjects1[0].getPointX("")), (( gdjs.Base_32SceneCode.GDNousagiObjects1.length === 0 ) ? 0 :gdjs.Base_32SceneCode.GDNousagiObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDNousagiObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDNousagiObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoObjects1[i].setHeight(165);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoObjects1[i].setWidth(83);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDDonCyanObjects1Objects, gdjs.random(650) + 25, gdjs.random(400) + 25, "");
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDDonCyanObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDDonCyanObjects1[i].setHeight(96);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDDonCyanObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDDonCyanObjects1[i].setWidth(80);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDRibbonObjects1Objects, gdjs.random(650) + 25, gdjs.random(400) + 25, "");
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDRibbonObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDRibbonObjects1[i].setHeight(80);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDRibbonObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDRibbonObjects1[i].setWidth(92);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDClothObjects1Objects, gdjs.random(650) + 25, gdjs.random(400) + 25, "");
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDClothObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDClothObjects1[i].setHeight(72);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDClothObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDClothObjects1[i].setWidth(82);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDDecoObjects1Objects, gdjs.random(650) + 25, gdjs.random(400) + 25, "");
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDDecoObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDDecoObjects1[i].setHeight(87);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDDecoObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDDecoObjects1[i].setWidth(87);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Peko"), gdjs.Base_32SceneCode.GDPekoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ribbon"), gdjs.Base_32SceneCode.GDRibbonObjects1);

gdjs.Base_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Base_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDPekoObjects1Objects, gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDRibbonObjects1Objects, false, runtimeScene, false);
}if (gdjs.Base_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Base_32SceneCode.GDPekoObjects1 */
/* Reuse gdjs.Base_32SceneCode.GDRibbonObjects1 */
gdjs.Base_32SceneCode.GDPekoRObjects1.length = 0;

{for(var i = 0, len = gdjs.Base_32SceneCode.GDRibbonObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDRibbonObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDPekoRObjects1Objects, (( gdjs.Base_32SceneCode.GDPekoObjects1.length === 0 ) ? 0 :gdjs.Base_32SceneCode.GDPekoObjects1[0].getPointX("")), (( gdjs.Base_32SceneCode.GDPekoObjects1.length === 0 ) ? 0 :gdjs.Base_32SceneCode.GDPekoObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoRObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoRObjects1[i].setHeight(165);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoRObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoRObjects1[i].setWidth(161);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DonCyan"), gdjs.Base_32SceneCode.GDDonCyanObjects1);
gdjs.copyArray(runtimeScene.getObjects("Peko"), gdjs.Base_32SceneCode.GDPekoObjects1);

gdjs.Base_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Base_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDPekoObjects1Objects, gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDDonCyanObjects1Objects, false, runtimeScene, false);
}if (gdjs.Base_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Base_32SceneCode.GDDonCyanObjects1 */
/* Reuse gdjs.Base_32SceneCode.GDPekoObjects1 */
gdjs.Base_32SceneCode.GDPekoDObjects1.length = 0;

{for(var i = 0, len = gdjs.Base_32SceneCode.GDDonCyanObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDDonCyanObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDPekoDObjects1Objects, (( gdjs.Base_32SceneCode.GDPekoObjects1.length === 0 ) ? 0 :gdjs.Base_32SceneCode.GDPekoObjects1[0].getPointX("")), (( gdjs.Base_32SceneCode.GDPekoObjects1.length === 0 ) ? 0 :gdjs.Base_32SceneCode.GDPekoObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoDObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoDObjects1[i].setHeight(165);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoDObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoDObjects1[i].setWidth(83);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Deco"), gdjs.Base_32SceneCode.GDDecoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Peko"), gdjs.Base_32SceneCode.GDPekoObjects1);

gdjs.Base_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Base_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDPekoObjects1Objects, gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDDecoObjects1Objects, false, runtimeScene, false);
}if (gdjs.Base_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Base_32SceneCode.GDDecoObjects1 */
/* Reuse gdjs.Base_32SceneCode.GDPekoObjects1 */
gdjs.Base_32SceneCode.GDPekoDeObjects1.length = 0;

{for(var i = 0, len = gdjs.Base_32SceneCode.GDDecoObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDDecoObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDPekoDeObjects1Objects, (( gdjs.Base_32SceneCode.GDPekoObjects1.length === 0 ) ? 0 :gdjs.Base_32SceneCode.GDPekoObjects1[0].getPointX("")), (( gdjs.Base_32SceneCode.GDPekoObjects1.length === 0 ) ? 0 :gdjs.Base_32SceneCode.GDPekoObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoDeObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoDeObjects1[i].setHeight(165);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoDeObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoDeObjects1[i].setWidth(83);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cloth"), gdjs.Base_32SceneCode.GDClothObjects1);
gdjs.copyArray(runtimeScene.getObjects("Peko"), gdjs.Base_32SceneCode.GDPekoObjects1);

gdjs.Base_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Base_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDPekoObjects1Objects, gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDClothObjects1Objects, false, runtimeScene, false);
}if (gdjs.Base_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Base_32SceneCode.GDClothObjects1 */
/* Reuse gdjs.Base_32SceneCode.GDPekoObjects1 */
gdjs.Base_32SceneCode.GDPekoCObjects1.length = 0;

{for(var i = 0, len = gdjs.Base_32SceneCode.GDClothObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDClothObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Base_32SceneCode.mapOfGDgdjs_46Base_9532SceneCode_46GDPekoCObjects1Objects, (( gdjs.Base_32SceneCode.GDPekoObjects1.length === 0 ) ? 0 :gdjs.Base_32SceneCode.GDPekoObjects1[0].getPointX("")), (( gdjs.Base_32SceneCode.GDPekoObjects1.length === 0 ) ? 0 :gdjs.Base_32SceneCode.GDPekoObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoCObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoCObjects1[i].setHeight(165);
}
}{for(var i = 0, len = gdjs.Base_32SceneCode.GDPekoCObjects1.length ;i < len;++i) {
    gdjs.Base_32SceneCode.GDPekoCObjects1[i].setWidth(83);
}
}}

}


};

gdjs.Base_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Base_32SceneCode.GDNousagiObjects1.length = 0;
gdjs.Base_32SceneCode.GDNousagiObjects2.length = 0;
gdjs.Base_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Base_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Base_32SceneCode.GDDreamObjects1.length = 0;
gdjs.Base_32SceneCode.GDDreamObjects2.length = 0;
gdjs.Base_32SceneCode.GDCarretObjects1.length = 0;
gdjs.Base_32SceneCode.GDCarretObjects2.length = 0;
gdjs.Base_32SceneCode.GDDonCyanObjects1.length = 0;
gdjs.Base_32SceneCode.GDDonCyanObjects2.length = 0;
gdjs.Base_32SceneCode.GDRibbonObjects1.length = 0;
gdjs.Base_32SceneCode.GDRibbonObjects2.length = 0;
gdjs.Base_32SceneCode.GDClothObjects1.length = 0;
gdjs.Base_32SceneCode.GDClothObjects2.length = 0;
gdjs.Base_32SceneCode.GDDecoObjects1.length = 0;
gdjs.Base_32SceneCode.GDDecoObjects2.length = 0;
gdjs.Base_32SceneCode.GDPekoObjects1.length = 0;
gdjs.Base_32SceneCode.GDPekoObjects2.length = 0;
gdjs.Base_32SceneCode.GDPekoRObjects1.length = 0;
gdjs.Base_32SceneCode.GDPekoRObjects2.length = 0;
gdjs.Base_32SceneCode.GDPekoDObjects1.length = 0;
gdjs.Base_32SceneCode.GDPekoDObjects2.length = 0;
gdjs.Base_32SceneCode.GDPekoDeObjects1.length = 0;
gdjs.Base_32SceneCode.GDPekoDeObjects2.length = 0;
gdjs.Base_32SceneCode.GDPekoCObjects1.length = 0;
gdjs.Base_32SceneCode.GDPekoCObjects2.length = 0;

gdjs.Base_32SceneCode.eventsList0(runtimeScene);
return;

}

gdjs['Base_32SceneCode'] = gdjs.Base_32SceneCode;