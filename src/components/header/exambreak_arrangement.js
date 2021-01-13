let exambreak_arrangement = {
  template:`
  <header-item label="考间休息">
  <el-select v-model="examBreakVal" placeholder="请选择" @change="getExamBreak">
    <el-option v-for="item in breakOptions" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
</header-item>
  `,
  created(){
    this.getList()
  },
  data(){
    return {
      breakOptions: [{
        value: 10,
        label: '10分钟'
      }, {
        value: 15,
        label: '15分钟'
      }, {
        value: 20,
        label: '20分钟'
      }, {
         value: 25,
        label: '25分钟'
      }, {
        value: 30,
        label: '30分钟'
      }],
      examBreakVal: 15,
    }
  },
  methods:{
    getList(){
      this.getExamBreak()
    },
    getExamBreak(){
      this.$emit('exam-break', this.examBreakVal)
    }
  }
}