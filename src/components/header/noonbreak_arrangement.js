let noonbreak_arrangement = {
  template: `
  <header-item id="restTimeVal" label="午休时间">
  <el-time-picker
  @change="getNoonBreak"
  is-range
  format="HH:mm"
  v-model="noonBreak"
  range-separator="-"
  start-placeholder="开始时间"
  end-placeholder="结束时间"
  placeholder="选择时间范围">
</el-time-picker>
  </header-item>
  `,
  created() {
    this.getList()
  },
  data() {
    return {
      noonBreak: [new Date(null, null, null, 11, 30), new Date(null, null, null, 13, 00)],
    }
  },
  methods: {
    getList() {
      this.getNoonBreak()
    },
    getNoonBreak() {
      const noonBreak = this.noonBreak
      // const durationMinutes = this.$durationToMinutes(noonBreak)
      this.$emit('noon-break', noonBreak)
    },
   
  }
}