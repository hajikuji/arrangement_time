let examtime_arrangement = {
  template: `
  <header-item label="考试时间">
  <el-time-picker
  is-range
  format="HH:mm"
  v-model="examTimeVal"
  range-separator="-"
  start-placeholder="开始时间"
  end-placeholder="结束时间"
  placeholder="选择时间范围"
  @change="getExamTime">
</el-time-picker>
  </header-item>
  `,
  created() {
    this.getList()
  },
  data() {
    return {
      examTimeVal: [new Date(null, null, null, 08, 00), new Date(null, null, null, 17, 00)],
    }
  },
  methods: {
    getList() {
      this.getExamTime()
    },
    getExamTime() {
      const examTimeVal = this.examTimeVal
      // const durationMinutes = this.$durationToMinutes(examTimeVal)
      this.$emit('exam-time', examTimeVal)
    }
  }
}