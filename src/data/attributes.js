export const attributes = [
  { id: 0, attributes: '一般', className: 'generally' }, //0
  { id: 1, attributes: '格鬥', className: 'fighting' }, //1
  { id: 2, attributes: '飛行', className: 'flight' }, //2
  { id: 3, attributes: '毒', className: 'poison' }, //3
  { id: 4, attributes: '地面', className: 'ground' }, //4
  { id: 5, attributes: '岩石', className: 'rock' }, //5
  { id: 6, attributes: '蟲', className: 'insect' }, //6
  { id: 7, attributes: '幽靈', className: 'ghost' }, //7
  { id: 8, attributes: '鋼', className: 'steel' }, //8
  { id: 9, attributes: '火', className: 'fire' }, //9
  { id: 10, attributes: '水', className: 'water' }, //10
  { id: 11, attributes: '草', className: 'grass' }, //11
  { id: 12, attributes: '電', className: 'electricity' }, //12
  { id: 13, attributes: '超能力', className: 'superpower' }, //13
  { id: 14, attributes: '冰', className: 'ice' }, //14
  { id: 15, attributes: '龍', className: 'dragon' }, //15
  { id: 16, attributes: '邪惡', className: 'evil' }, //16
  { id: 17, attributes: '妖精', className: 'goblin' }, //17
];

export const attackEffectArr = [
  {
    id: 0,
    attributeRestraint: {
      half: [5, 8],
      zero: [7],
      double: [],
    },
    weakness: [1]
  }, //一般
  {
    id: 1,
    attributeRestraint: {
      half: [2, 3, 6, 13, 17],
      zero: [7],
      double: [0, 5, 8, 14, 16],
    },
    weakness: [2, 13, 17]
  }, //格鬥
  {
    id: 2,
    attributeRestraint: {
      half: [5, 8, 12],
      zero: [],
      double: [1, 6, 11],
    },
    weakness: [5, 12, 14]
  }, //飛行
  {
    id: 3,
    attributeRestraint: {
      half: [3, 4, 5, 7],
      zero: [8],
      double: [11, 17],
    },
    weakness: [4, 13]
  }, //毒
  {
    id: 4,
    attributeRestraint: {
      half: [6, 11],
      zero: [2],
      double: [3, 5, 8, 9, 12],
    },
    weakness: [10, 11, 14]
  }, //地面
  {
    id: 5,
    attributeRestraint: {
      half: [1, 4, 8],
      zero: [],
      double: [2, 6, 9, 14],
    },
    weakness: [1, 4, 8, 10, 11]
  }, //岩石
  {
    id: 6,
    attributeRestraint: {
      half: [1, 2, 3, 7, 8, 9, 17],
      zero: [],
      double: [11, 13, 16],
    },
    weakness: [2, 5, 9]
  }, //蟲
  {
    id: 7,
    attributeRestraint: {
      half: [16],
      zero: [0],
      double: [7, 13],
    },
    weakness: [7, 16]
  }, //幽靈
  {
    id: 8,
    attributeRestraint: {
      half: [8, 9, 10, 12],
      zero: [],
      double: [5, 14, 17],
    },
    weakness: [1, 4, 9]
  }, //鋼
  {
    id: 9,
    attributeRestraint: {
      half: [5, 9, 10, 15],
      zero: [],
      double: [6, 8, 11, 14],
    },
    weakness: [4, 5, 10]
  }, //火
  {
    id: 10,
    attributeRestraint: {
      half: [10, 11, 15],
      zero: [],
      double: [4, 5, 9],
    },
    weakness: [11, 12]
  }, //水
  {
    id: 11,
    attributeRestraint: {
      half: [2, 3, 6, 8, 9, 11, 15],
      zero: [],
      double: [4, 5, 10],
    },
    weakness: [2, 3, 6, 9, 14]
  }, //草
  {
    id: 12,
    attributeRestraint: {
      half: [11, 12, 15],
      zero: [4],
      double: [2, 10],
    },
    weakness: [4]
  }, //電
  {
    id: 13,
    attributeRestraint: {
      half: [8, 13],
      zero: [16],
      double: [1, 3],
    },
    weakness: [6, 7, 16]
  }, //超能力
  {
    id: 14,
    attributeRestraint: {
      half: [8, 9, 10, 14],
      zero: [],
      double: [2, 4, 11, 15],
    },
    weakness: [1, 5, 8, 9]
  }, //冰
  {
    id: 15,
    attributeRestraint: {
      half: [8],
      zero: [17],
      double: [15],
    },
    weakness: [14, 15, 17]
  }, //龍
  {
    id: 16,
    attributeRestraint: {
      half: [1, 16, 17],
      zero: [],
      double: [7, 13],
    },
    weakness: [1, 6, 17]
  }, //邪惡
  {
    id: 17,
    attributeRestraint: {
      half: [3, 8, 9],
      zero: [],
      double: [1, 15, 16],
    },
    weakness: [3, 8]
  }, //妖精
];