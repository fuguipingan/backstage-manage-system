<template>
  <div class="dataStatistics">
    <h1>dataStatistics 数据统计</h1>
    <div class="btn">
      <button @click="sendRequest">发送请求</button>
      <button @click="interruptRequest">中断请求</button>
    </div>
    <div class="eacharts">
      <div
        id="main"
        style="
          width: 1200px;
          height: 400px;
          marign-top: 30px;
          text-align: center;
        "
      ></div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import { getLoginLog } from "@/api";
export default {
  data() {
    return {};
  },
  methods: {
    //发送请求
    sendRequest() {
      // alert( "发送请求")
      getLoginLog(this)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //中断请求
    interruptRequest() {
      if (typeof this.cancel == "function") {
        this.cancel();
      } else {
        console.log("没有可以中断的请求");
      }

      console.log("中断请求");
    },
    //随机整数
    random_num(start = 0, end = 0) {
      let num = start + Math.floor(Math.random() * (end - start));
      return num;
    },
    //eacharts图标初次渲染
    imageRendering() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "历史收入"
        },
        tooltip: {},
        legend: {
          data: ["收入"]
        },
        xAxis: {
          data: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月"
          ]
        },
        yAxis: {},
        series: [
          {
            name: "收入",
            type: "line",
            data: []
          }
        ]
      };
      let newArr = [];

      for (let i = 0; i < 12; i++) {
        newArr.push(this.random_num(7, 15) * 1000);
      }
      option.series[0].data = newArr;
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },

  mounted() {
    this.imageRendering();
  }
};
</script>
<style scoped lang="scss"></style>
