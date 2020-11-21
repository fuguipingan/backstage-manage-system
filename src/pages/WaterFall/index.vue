<template>
  <div class="waterfall">
    <h1>waterfall</h1>
    <div class="main">
      <div class="box" v-for="item in waterFallDate" :key="item.id">
        <div class="imgs">
          <a :href="item.srcUrl">
            <img :src="item.imgUrl" :alt="item.title" :title="item.title" />
          </a>
        </div>
        <div class="title">
          <span> 名称：{{ item.fruitsName }} </span>
          <span> 价格：{{ item.price }}元1斤 </span>
          <span> 数量：{{ item.num }} </span>
          <br />
          <span> 描述：{{ item.title }} </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      waterFallDate: [
        {
          id: Math.random()
            .toString()
            .substr(2),
          fruitsName: "香蕉",
          title:
            "香蕉（学名：Musa nana Lour.）芭蕉科芭蕉属植物，又指其果实，热带地区广泛种植。香蕉味香、富含营养，植株为大型草本，从根状茎发出，由叶鞘下部形成高3～6米（10～20尺）的假杆；叶长圆形至椭圆形，有的长达3～3.5米（10～11.5尺），宽65厘米（26寸），10～20枚簇生茎顶。穗状花序下垂 [1]  ，由假杆顶端抽出，花多数，淡黄色；果序弯垂，结果10～20串，约50～150个。植株结果后枯死，由根状茎长出的吸根继续繁殖，每一根株可活多年。原产亚洲东南部，台湾、海南、广东、广西等均有栽培。",
          imgUrl:
            "https://bkimg.cdn.bcebos.com/pic/7aec54e736d12f2ecf0e92154cc2d562853568bf?x-bce-process=image/resize,m_lfit,w_480,limit_1",
          srcUrl:
            "https://baike.baidu.com/item/%E9%A6%99%E8%95%89/150475?fr=aladdin",
          price: "2.5",
          num: 50
        },
        {
          id: Math.random()
            .toString()
            .substr(2),
          fruitsName: "苹果",
          title:
            "苹果是蔷薇科苹果亚科苹果属植物，其树为落叶乔木。苹果营养价值很高，富含矿物质和维生素，含钙量丰富，有助于代谢掉体内多余盐分，苹果酸可代谢热量，防止下半身肥胖。苹果是一种低热量的食物，每100克产生大约60千卡左右的热量。苹果中营养成分可溶性大，容易被人体吸收，故有'活水'之称。它有利于溶解硫元素，使皮肤润滑柔嫩。",
          imgUrl:
            "https://bkimg.cdn.bcebos.com/pic/a044ad345982b2b7ac88e8a23eadcbef76099b45?x-bce-process=image/resize,m_fill,w_360,h_280,align_50,limit_0",
          srcUrl:
            "https://baike.baidu.com/item/%E8%8B%B9%E6%9E%9C/5670?fr=aladdin",
          price: "2.5",
          num: 50
        },
        {
          id: Math.random()
            .toString()
            .substr(2),
          fruitsName: "猕猴桃",
          title:
            "猕猴桃，bai性味甘酸而寒，du有解热、止渴、健胃的zhi功效，可消渴、治疗dao烦热、专黄疸、呕吐、腹泻、关节痛属等疾病，而且还有抗衰老作用。唐代医药学家陈藏器介绍猕猴桃的功效为“调中下气、主骨节风、长年白发”等。现代医学研究分析，猕猴桃果实富含氨基酸，有蛋白酶12种及维生素B1、维生素C、胡萝卜素及钙、磷、铁、镁等多种成分，其维生素C含量是等量柑橘的五至六倍。近年来有报道称：猕猴桃能阻断致癌物质———亚硝胺合成的活性成分，阻断率达98％，有抑制癌细胞的作用。所以，猕猴桃是滋补强身的上等果品。此外，其枝叶、根、藤都是很好的中药材。治疗食欲不振、消化不良，可取猕猴桃干果60至100克，水煎服，每日早晚各服一半。患尿路结石者，每日食用猕猴桃六至十枚，分二次或三次服。高热烦渴、胸腹胀满者，每次食猕猴桃二至三枚，每日服三至四次。常食猕猴桃还可对半身不遂、肌肉麻木者起到辅助治疗作用。同时，猕猴桃有滑泄之性，大便秘结者可多食之，而脾胃虚寒者则应忌食。猕猴桃既可用于治疗内科、外科、妇科疾病，又可用于保健抗衰老。",
          imgUrl:
            "https://bkimg.cdn.bcebos.com/pic/203fb80e7bec54e7ecdfb3b8b3389b504fc26a61?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg",
          srcUrl:
            "https://baike.baidu.com/item/%E7%8C%95%E7%8C%B4%E6%A1%83/282710?fr=aladdin",
          price: "2.5",
          num: 50
        },
        {
          id: Math.random()
            .toString()
            .substr(2),
          fruitsName: "哈蜜瓜",
          title:
            "哈密瓜主产于吐哈盆地（即吐鲁番盆地和哈密盆地的统称），它形态各异，风味独特，瓜肉肥厚，清脆爽口。哈密瓜营养丰富，含糖量最高达21%。哈密的甜瓜在东汉永平年间就成为进贡的异瓜种了。至清代，被哈密王作为贡品，受康熙赏赐而得名哈密瓜。时哈密瓜“往年进贡”、“瓜莫盛于哈密”、“瓜则充贡品者真出哈密”。追根溯源，哈密瓜却源于吐鲁番鄯善县一带。",
          imgUrl:
            "https://bkimg.cdn.bcebos.com/pic/d439b6003af33a87ac803c4dc95c10385243b5f3?x-bce-process=image/resize,m_fill,w_360,h_280,align_50,limit_0",
          srcUrl:
            "https://baike.baidu.com/item/%E5%93%88%E5%AF%86%E7%93%9C/431545?fr=aladdin",
          price: "2.5",
          num: 50
        },
        {
          id: Math.random()
            .toString()
            .substr(2),
          fruitsName: "猕猴桃",
          title:
            "猕猴桃，bai性味甘酸而寒，du有解热、止渴、健胃的zhi功效，可消渴、治疗dao烦热、专黄疸、呕吐、腹泻、关节痛属等疾病，而且还有抗衰老作用。唐代医药学家陈藏器介绍猕猴桃的功效为“调中下气、主骨节风、长年白发”等。现代医学研究分析，猕猴桃果实富含氨基酸，有蛋白酶12种及维生素B1、维生素C、胡萝卜素及钙、磷、铁、镁等多种成分，其维生素C含量是等量柑橘的五至六倍。近年来有报道称：猕猴桃能阻断致癌物质———亚硝胺合成的活性成分，阻断率达98％，有抑制癌细胞的作用。所以，猕猴桃是滋补强身的上等果品。此外，其枝叶、根、藤都是很好的中药材。治疗食欲不振、消化不良，可取猕猴桃干果60至100克，水煎服，每日早晚各服一半。患尿路结石者，每日食用猕猴桃六至十枚，分二次或三次服。高热烦渴、胸腹胀满者，每次食猕猴桃二至三枚，每日服三至四次。常食猕猴桃还可对半身不遂、肌肉麻木者起到辅助治疗作用。同时，猕猴桃有滑泄之性，大便秘结者可多食之，而脾胃虚寒者则应忌食。猕猴桃既可用于治疗内科、外科、妇科疾病，又可用于保健抗衰老。",
          imgUrl:
            "https://bkimg.cdn.bcebos.com/pic/203fb80e7bec54e7ecdfb3b8b3389b504fc26a61?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg",
          srcUrl:
            "https://baike.baidu.com/item/%E7%8C%95%E7%8C%B4%E6%A1%83/282710?fr=aladdin",
          price: "2.5",
          num: 50
        },
        {
          id: Math.random()
            .toString()
            .substr(2),
          fruitsName: "无花果",
          title:
            "无花果（学名：Ficus carica Linn.）是桑科、榕属植物。落叶灌木或小乔木；高达10米，多分枝；树皮灰褐色，皮孔明显；小枝粗，叶互生，厚纸质，宽卵圆形，长宽10-20厘米，掌状3-5裂，小裂片卵形，具不规则钝齿；叶柄粗，长2-5厘米；雌雄异株，雄花和瘿花同生于一榕果内壁，雄花集生孔口，雌花花被与雄花同，花柱侧生；榕果单生叶腋，梨形，径3-5厘米，顶部凹下，熟时紫红或黄色，基生苞片3，卵形，瘦果透镜状。花果期5-7月。",
          imgUrl:
            "https://bkimg.cdn.bcebos.com/pic/09fa513d269759ee3d6d47e5bab154166d224f4a71c1?x-bce-process=image/resize,m_lfit,h_168,limit_1",
          srcUrl:
            "https://baike.baidu.com/item/%E6%97%A0%E8%8A%B1%E6%9E%9C/447?fr=aladdin",
          price: "2.5",
          num: 50
        },
        {
          id: Math.random()
            .toString()
            .substr(2),
          fruitsName: "葡萄",
          title:
            "葡萄（学名：Vitis vinifera L.）为葡萄科葡萄属木质藤本植物，小枝圆柱形，有纵棱纹，无毛或被稀疏柔毛，叶卵圆形，圆锥花序密集或疏散，基部分枝发达，果实球形或椭圆形，花期4-5月，果期8-9月。",
          imgUrl:
            "https://bkimg.cdn.bcebos.com/pic/d058ccbf6c81800a118b20a3b63533fa828b4734?x-bce-process=image/resize,m_lfit,w_480,limit_1",
          srcUrl:
            "https://baike.baidu.com/item/%E8%91%A1%E8%90%84/1116?fr=aladdin",
          price: "2.5",
          num: 50
        },
        {
          id: Math.random()
            .toString()
            .substr(2),
          fruitsName: "葡萄",
          title:
            "葡萄（学名：Vitis vinifera L.）为葡萄科葡萄属木质藤本植物，小枝圆柱形，有纵棱纹，无毛或被稀疏柔毛，叶卵圆形，圆锥花序密集或疏散，基部分枝发达，果实球形或椭圆形，花期4-5月，果期8-9月。",
          imgUrl:
            "https://bkimg.cdn.bcebos.com/pic/d058ccbf6c81800a118b20a3b63533fa828b4734?x-bce-process=image/resize,m_lfit,w_480,limit_1",
          srcUrl:
            "https://baike.baidu.com/item/%E8%91%A1%E8%90%84/1116?fr=aladdin",
          price: "2.5",
          num: 50
        },
        {
          id: Math.random()
            .toString()
            .substr(2),
          fruitsName: "无花果",
          title:
            "无花果（学名：Ficus carica Linn.）是桑科、榕属植物。落叶灌木或小乔木；高达10米，多分枝；树皮灰褐色，皮孔明显；小枝粗，叶互生，厚纸质，宽卵圆形，长宽10-20厘米，掌状3-5裂，小裂片卵形，具不规则钝齿；叶柄粗，长2-5厘米；雌雄异株，雄花和瘿花同生于一榕果内壁，雄花集生孔口，雌花花被与雄花同，花柱侧生；榕果单生叶腋，梨形，径3-5厘米，顶部凹下，熟时紫红或黄色，基生苞片3，卵形，瘦果透镜状。花果期5-7月。",
          imgUrl:
            "https://bkimg.cdn.bcebos.com/pic/09fa513d269759ee3d6d47e5bab154166d224f4a71c1?x-bce-process=image/resize,m_lfit,h_168,limit_1",
          srcUrl:
            "https://baike.baidu.com/item/%E6%97%A0%E8%8A%B1%E6%9E%9C/447?fr=aladdin",
          price: "2.5",
          num: 50
        },
        {
          id: Math.random()
            .toString()
            .substr(2),
          fruitsName: "哈蜜瓜",
          title:
            "哈密瓜主产于吐哈盆地（即吐鲁番盆地和哈密盆地的统称），它形态各异，风味独特，瓜肉肥厚，清脆爽口。哈密瓜营养丰富，含糖量最高达21%。哈密的甜瓜在东汉永平年间就成为进贡的异瓜种了。至清代，被哈密王作为贡品，受康熙赏赐而得名哈密瓜。时哈密瓜“往年进贡”、“瓜莫盛于哈密”、“瓜则充贡品者真出哈密”。追根溯源，哈密瓜却源于吐鲁番鄯善县一带。",
          imgUrl:
            "https://bkimg.cdn.bcebos.com/pic/d439b6003af33a87ac803c4dc95c10385243b5f3?x-bce-process=image/resize,m_fill,w_360,h_280,align_50,limit_0",
          srcUrl:
            "https://baike.baidu.com/item/%E5%93%88%E5%AF%86%E7%93%9C/431545?fr=aladdin",
          price: "2.5",
          num: 50
        },
        {
          id: Math.random()
            .toString()
            .substr(2),
          fruitsName: "香蕉",
          title:
            "香蕉（学名：Musa nana Lour.）芭蕉科芭蕉属植物，又指其果实，热带地区广泛种植。香蕉味香、富含营养，植株为大型草本，从根状茎发出，由叶鞘下部形成高3～6米（10～20尺）的假杆；叶长圆形至椭圆形，有的长达3～3.5米（10～11.5尺），宽65厘米（26寸），10～20枚簇生茎顶。穗状花序下垂 [1]  ，由假杆顶端抽出，花多数，淡黄色；果序弯垂，结果10～20串，约50～150个。植株结果后枯死，由根状茎长出的吸根继续繁殖，每一根株可活多年。原产亚洲东南部，台湾、海南、广东、广西等均有栽培。",
          imgUrl:
            "https://bkimg.cdn.bcebos.com/pic/7aec54e736d12f2ecf0e92154cc2d562853568bf?x-bce-process=image/resize,m_lfit,w_480,limit_1",
          srcUrl:
            "https://baike.baidu.com/item/%E9%A6%99%E8%95%89/150475?fr=aladdin",
          price: "2.5",
          num: 50
        },
        {
          id: Math.random()
            .toString()
            .substr(2),
          fruitsName: "苹果",
          title:
            "苹果是蔷薇科苹果亚科苹果属植物，其树为落叶乔木。苹果营养价值很高，富含矿物质和维生素，含钙量丰富，有助于代谢掉体内多余盐分，苹果酸可代谢热量，防止下半身肥胖。苹果是一种低热量的食物，每100克产生大约60千卡左右的热量。苹果中营养成分可溶性大，容易被人体吸收，故有'活水'之称。它有利于溶解硫元素，使皮肤润滑柔嫩。",
          imgUrl:
            "https://bkimg.cdn.bcebos.com/pic/a044ad345982b2b7ac88e8a23eadcbef76099b45?x-bce-process=image/resize,m_fill,w_360,h_280,align_50,limit_0",
          srcUrl:
            "https://baike.baidu.com/item/%E8%8B%B9%E6%9E%9C/5670?fr=aladdin",
          price: "2.5",
          num: 50
        },
        {
          id: Math.random()
            .toString()
            .substr(2),
          fruitsName: "猕猴桃",
          title:
            "猕猴桃，bai性味甘酸而寒，du有解热、止渴、健胃的zhi功效，可消渴、治疗dao烦热、专黄疸、呕吐、腹泻、关节痛属等疾病，而且还有抗衰老作用。唐代医药学家陈藏器介绍猕猴桃的功效为“调中下气、主骨节风、长年白发”等。现代医学研究分析，猕猴桃果实富含氨基酸，有蛋白酶12种及维生素B1、维生素C、胡萝卜素及钙、磷、铁、镁等多种成分，其维生素C含量是等量柑橘的五至六倍。近年来有报道称：猕猴桃能阻断致癌物质———亚硝胺合成的活性成分，阻断率达98％，有抑制癌细胞的作用。所以，猕猴桃是滋补强身的上等果品。此外，其枝叶、根、藤都是很好的中药材。治疗食欲不振、消化不良，可取猕猴桃干果60至100克，水煎服，每日早晚各服一半。患尿路结石者，每日食用猕猴桃六至十枚，分二次或三次服。高热烦渴、胸腹胀满者，每次食猕猴桃二至三枚，每日服三至四次。常食猕猴桃还可对半身不遂、肌肉麻木者起到辅助治疗作用。同时，猕猴桃有滑泄之性，大便秘结者可多食之，而脾胃虚寒者则应忌食。猕猴桃既可用于治疗内科、外科、妇科疾病，又可用于保健抗衰老。",
          imgUrl:
            "https://bkimg.cdn.bcebos.com/pic/203fb80e7bec54e7ecdfb3b8b3389b504fc26a61?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg",
          srcUrl:
            "https://baike.baidu.com/item/%E7%8C%95%E7%8C%B4%E6%A1%83/282710?fr=aladdin",
          price: "2.5",
          num: 50
        }
      ],
      newWaterFallDate: []
    };
  },
  mounted() {}
};
</script>
<style lang="scss">
.waterfall {
  width: 100%;

  h1 {
    text-align: center;
    margin: 20px;
  }
  .main {
    width: 100%;
    position: relative;
    margin-bottom: 100px;
    overflow: hidden;
    .box {
      padding: 5px;
      float: left;
      border: 1px solid #ccc;
      box-shadow: 0 0 5px #ccc;
      border-radius: 5px;
      margin: 10px;
      width: 300px;

      .imgs {
        padding: 5px;
        a {
          display: block;
          img {
            width: 100%;
            height: auto;
          }
        }
      }
      .title {
        width: 300px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
