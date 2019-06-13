<template>
  <div id="app">
    <div v-for="(date, dateIdx) in dates" :key="dateIdx">
      <h1>{{date.title}}</h1><span>{{date.date}}</span>
      <div v-for="(stage, stageIdx) in date.stages" :key="stageIdx">        
        <h2>{{stage.name}}</h2>
        <div v-for="(schedule, scheduleIdx) in stage.schedules" :key="scheduleIdx">    
          <span class="performer">{{schedule.performer}}</span> 
          <span class="startTime">{{schedule.startTime}}</span> 
          <span class="endTime">{{schedule.endTime}}</span>  
          <span class="remark">{{schedule.remark}}</span> 
          <span class="country">{{schedule.country}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyBgTTgX9Fui1pcbWmWaYj2WB4v2gOhha9M",
    authDomain: "fesscheduler.firebaseapp.com",
    databaseURL: "https://fesscheduler.firebaseio.com",
    projectId: "fesscheduler",
    storageBucket: "fesscheduler.appspot.com",
    messagingSenderId: "1179700144",
    appId: "1:1179700144:web:2a117270b4946a20"
};
let app = Firebase.initializeApp(config);
let db = app.database();

let dates = [{
  title: "DAY 1",
  date: "2019/01/25",
  stages: [{
    name: "大龍山",
    schedules: [{
        startTime: "17:20",
        endTime: "18:00",
        performer: "美秀集團",
        country: "",
        remark: "",
      },
      {
        startTime: "19:20",
        endTime: "20:00",
        performer: "The Birthday",
        country: "JP",
        remark: "",
      },
      {
        startTime: "21:20",
        endTime: "22:00",
        performer: "茄子蛋",
        country: "",
        remark: "",
      },
    ]
  }, {
    name: "大圓山",
    schedules: [{
        startTime: "16:20",
        endTime: "17:00",
        performer: "Lucie,Too",
        country: "JP",
        remark: "",
      },
      {
        startTime: "18:20",
        endTime: "19:00",
        performer: "夜貓外傳",
        country: "",
        remark: "春艷、Leo王",
      },
      {
        startTime: "20:20",
        endTime: "21:00",
        performer: "I Mean Us",
        country: "",
        remark: "",
      },
    ]
  }, {
    name: "大稻埕",
    schedules: []
  }, {
    name: "大拇哥",
    schedules: [{
        startTime: "16:40",
        endTime: "17:20",
        performer: "脆弱少女組",
        country: "",
        remark: "",
      },
      {
        startTime: "18:00",
        endTime: "18:40",
        performer: "胖虎",
        country: "",
        remark: "",
      },
      {
        startTime: "19:20",
        endTime: "20:00",
        performer: "非人物種",
        country: "",
        remark: "",
      },
      {
        startTime: "20:40",
        endTime: "21:20",
        performer: "929",
        country: "",
        remark: "",
      },
    ]
  }, {
    name: "大聲公",
    schedules: [{
        startTime: "17:20",
        endTime: "18:00",
        performer: "黎可辰",
        country: "",
        remark: "",
      },
      {
        startTime: "18:40",
        endTime: "19:20",
        performer: "Peter Fish",
        country: "",
        remark: "",
      },
      {
        startTime: "20:00",
        endTime: "20:40",
        performer: "莫宰羊",
        country: "",
        remark: "",
      },
      {
        startTime: "21:20",
        endTime: "22:00",
        performer: "DJ 陳玠安",
        country: "",
        remark: "",
      },
    ]
  }, {
    name: "大草原",
    schedules: [{
        startTime: "18:00",
        endTime: "18:40",
        performer: "渣泥",
        country: "",
        remark: "",
      },
      {
        startTime: "19:20",
        endTime: "20:00",
        performer: "魏嘉瑩",
        country: "",
        remark: "& Arrow Band",
      },
      {
        startTime: "20:40",
        endTime: "21:20",
        performer: "DSPS",
        country: "",
        remark: "",
      },
    ]
  }],
}, {
  title: "DAY 2",
  date: "2019/01/26",
  stages: [],
}];

export default {
  name: 'App',
  data(){
    return {
      dates: dates,
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
