let arrangement_header = {
  template: `
<div class="arrangement-header">
  <examdate-arrangement @exam-date="getExamDate" />
  <examtime-arrangement @exam-time="getExamTime" />
  <noonbreak-arrangement @noon-break="getNoonBreak" />
  <div class="tips">注：午休时间内不允许安排场次</div>
  <examduration-arrangement @exam-duration="getExamDuration" />
  <exambreak-arrangement @exam-break="getExamBreak" />
  <header-item label="持续天数">
    <el-input placeholder="请输入内容" v-model="dayDurationVal" :disabled="true">
    </el-input>
  </header-item>
</div>
  `,
  props: ["students", "seatnum", "subjectnum"],
  data() {
    return {
      examTime: [new Date(null, null, null, 08, 00), new Date(null, null, null, 17, 00)],
      examBreak: 15,
      examDate: new Date(),
      examDuration: 15,
      noonBreak: [new Date(null, null, null, 11, 30), new Date(null, null, null, 13, 00)],
    }
  },
  created() {

  },
  computed: {
    // 上午场次
    forenoonNum() {
      return this.getNumberOfTimes(this.examTime[0], this.noonBreak[0])
    },
    // 下午场次
    afternoonNum() {
      return this.getNumberOfTimes(this.noonBreak[1], this.examTime[1])
    },
    dayDurationVal() {
      let result = Math.ceil(this.students / this.seatnum * this.subjectnum / (this.forenoonNum + this.afternoonNum))
      console.log(result)
      console.log('上午场次', this.forenoonNum)
      console.log('下午场次', this.afternoonNum)
      return result
    }
  },
  components: {
    'examdate-arrangement': examdate_arrangement, // 考试日期
    'examtime-arrangement': examtime_arrangement, // 考试时间
    'noonbreak-arrangement': noonbreak_arrangement, // 午休时间
    'exambreak-arrangement': exambreak_arrangement, // 考间休息
    'examduration-arrangement': examduration_arrangement,// 考试时长
  },
  watch: {
    dayDurationVal(val) {
      this.$bus.$emit('day-duration', val)
    }
  },
  methods: {
    getList() {

    },
    getExamDate(e) {
      this.examDate = e
      console.log('考试日期', this.examDate)
    },
    getExamTime(e) {
      this.examTime = e
      console.log('考试时间', this.examTime)
    },
    getNoonBreak(e) {
      this.noonBreak = e
      console.log('午休时间', this.noonBreak)
    },
    getExamDuration(e) {
      this.examDuration = e
      console.log('考试时长', this.examDuration)
    },
    getExamBreak(e) {
      this.examBreak = e
      console.log('考间休息', this.examBreak)
    },
    // 获得场次
    getNumberOfTimes(startTime, endTime) {
      let timeDuration = [startTime, endTime]
        , totalDuration = this.$durationToMinutes(timeDuration)
        , perDuration = this.examDuration + this.examBreak
      if ((totalDuration % perDuration) >= this.examDuration) {
        return Math.ceil(totalDuration / perDuration)
      } else {
        return Math.floor(totalDuration / perDuration)
      }
    }
  }
}