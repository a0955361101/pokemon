export const attributes = [
    {id:0,attributes:'一般',className:'generally'}, //0
    {id:1,attributes:'格鬥',className:'fighting'}, //1
    {id:2,attributes:'飛行',className:'flight'}, //2
    {id:3,attributes:'毒',className:'poison'}, //3
    {id:4,attributes:'地面',className:'ground'}, //4
    {id:5,attributes:'岩石',className:'rock'}, //5
    {id:6,attributes:'蟲',className:'insect'}, //6
    {id:7,attributes:'幽靈',className:'ghost'}, //7
    {id:8,attributes:'鋼',className:'steel'}, //8
    {id:9,attributes:'火',className:'fire'}, //9
    {id:10,attributes:'水',className:'water'}, //10
    {id:11,attributes:'草',className:'grass'}, //11
    {id:12,attributes:'電',className:'electricity'}, //12
    {id:13,attributes:'超能力',className:'superpower'}, //13
    {id:14,attributes:'冰',className:'ice'}, //14
    {id:15,attributes:'龍',className:'dragon'}, //15
    {id:16,attributes:'邪惡',className:'evil'}, //16
    {id:17,attributes:'妖精',className:'goblin'}, //17
  ];

  export const attackEffectArr = [
    {attributeRestraint:{
      half:[5,8],
      zero:[7],
      double:[],
    }}, //一般
    {attributeRestraint:{
      half:[2,3,6,13,17],
      zero:[7],
      double:[0,5,8,14,16],
    }}, //格鬥
    {attributeRestraint:{
      half:[5,8,12],
      zero:[],
      double:[1,6,11],
    }}, //飛行
    {attributeRestraint:{
      half:[3,4,5,7],
      zero:[8],
      double:[11,17],
    }}, //毒
    {attributeRestraint:{
      half:[6,11],
      zero:[2],
      double:[3,5,8,9,12],
    }}, //地面
    {attributeRestraint:{
      half:[1,4,8],
      zero:[],
      double:[2,6,9,14],
    }}, //岩石
    {attributeRestraint:{
      half:[1,2,3,7,8,9,17],
      zero:[],
      double:[11,13,16],
    }}, //蟲
    {attributeRestraint:{
      half:[16],
      zero:[0],
      double:[7,13],
    }}, //幽靈
    {attributeRestraint:{
      half:[8,9,10,12],
      zero:[],
      double:[5,14,17],
    }}, //鋼
    {attributeRestraint:{
      half:[5,9,10,15],
      zero:[],
      double:[6,8,11,14],
    }}, //火
    {attributeRestraint:{
      half:[10,11,15],
      zero:[],
      double:[4,5,9],
    }}, //水
    {attributeRestraint:{
      half:[2,3,6,8,9,11,15],
      zero:[],
      double:[4,5,10],
    }}, //草
    {attributeRestraint:{
      half:[11,12,15],
      zero:[4],
      double:[2,10],
    }}, //電
    {attributeRestraint:{
      half:[8,13],
      zero:[16],
      double:[1,3],
    }}, //超能力
    {attributeRestraint:{
      half:[8,9,10,14],
      zero:[],
      double:[2,4,11,15],
    }}, //冰
    {attributeRestraint:{
      half:[8],
      zero:[17],
      double:[15],
    }}, //龍
    {attributeRestraint:{
      half:[1,16,17],
      zero:[],
      double:[7,13],
    }}, //邪惡
    {attributeRestraint:{
      half:[3,8,9],
      zero:[],
      double:[1,15,16],
    }}, //妖精
  ]