let examdate_arrangement = {
  template: `
  <header-item label="考试日期">
  <el-date-picker v-model="examDateVal" type="date" placeholder="选择日期" @change="getExamDate">
  </el-date-picker>
</header-item>
  `,
  created() {
    this.getList()
  },
  data() {
    return {
      examDateVal: new Date()
    }
  },
  methods: {
    getList() {
      this.getExamDate()
    },
    getExamDate() {
      this.$emit('exam-date', this.examDateVal)
    }
  }
}