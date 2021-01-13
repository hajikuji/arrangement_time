let examduration_arrangement = {
  template:`
  <header-item class="ml0" label="考试时长">
  <el-select v-model="examDurationVal" placeholder="请选择" @change="getExamDuration">
    <el-option v-for="item in examOptions" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
</header-item>
  `,
  data(){
    return {
      examOptions: [{
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
      examDurationVal: 15,
    }
  },
  created(){
    this.getList()
  },
  mounted(){},
  methods:{
    getList(){
      this.getExamDuration()
    },
    getExamDuration(){
      this.$emit('exam-duration', this.examDurationVal)
    }
  }
}