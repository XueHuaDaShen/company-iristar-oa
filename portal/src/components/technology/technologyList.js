const technologyList = [
  {
    imgPo: 'imgLeft', // 图片的位置，左或者右
    img: require('@/assets/img/technology/1.png'), // 封面图
    title: '远距离虹膜识别', // 标题
    desc: '虹星科技致力于非受限场景下的虹膜识别技术攻关，突破传统产品识别距离近、环境要求高、用户体验差等局限，实现了1米以外运动中用户的秒级虹膜信息采集和身份识别。全新的远距离虹膜识别产品支持跨区域、跨场景的信息共享和集中管控，为复杂场景下亿级规模人群的精准高效身份信息管理提供了有力保障。', // 封面描述
    info: ['实现了1m以上的超远工作距离内', '虹膜识别秒级虹膜成像及身份核验'],
    showPoint: true,
    point: [
      '一米以外精准识别',
      '秒级识别',
      '一次注册，终身识别',
    ]
  },
  {
    imgPo: 'imgRight', // 图片的位置，左或者右
    img: require('@/assets/img/technology/2.png'), // 封面图
    title: '虹膜人脸融合识别', // 标题
    desc: '虹星科技首创新一代面部多模态生物特征识别技术，融合虹膜的高精度和人脸的高易用，实现双重精度保障、双重活体检测、双重防伪认证、秒级识别响应。虹膜人脸融合识别产品可结合身份证、护照、一卡通等相应证件，在进行人证对比的同时进行虹膜信息采集，进而实现基于高精度面部多模态生物特征识别的无证通行，极大解放人力，提升区域安全性。', // 封面描述
    info: ['实现双重精度保障、双重活体检测、', '双重防伪认证、秒级识别响应'],
    showPoint: true,
    point: [
      '双重精度保障',
      '双重活体检测',
      '双重防伪认证',
      '秒级识别响应',
    ]
  },
  {
    imgPo: 'imgLeft', // 图片的位置，左或者右
    img: require('@/assets/img/technology/3.png'), // 封面图
    title: '计算成像', // 标题
    desc: '虹星科技自主设计的微透镜阵列式光场相机，将成像和计算有机结合起来，克服传统光电成像瓶颈问题，显著扩展成像景深；同时捕获丰富的二维色彩和三维深度信号，实现多维光电信息的一体化采集。计算成像技术为深度估计、三维测量、特征分析提供高维度图像数据源，可广泛应用于生物特征识别、人机交互、工业视觉等领域。', // 封面描述
    info: ['捕获丰富的二维色彩和三维深度信号，', '实现多维光电信息的一体化采集'],
    showPoint: true,
    point: [
      '高精度视觉信息捕获',
      '传感与计算的感知协同',
      '多维多模态同步信息',
    ]
  },
];

export default technologyList;