let arrangement_container = {
  template: `
  <div class="arrangement-container">
  <el-tabs  v-if="dayNum > 1" v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane v-for="(item, index) in dayNum" :label="'第' + (index+1)+'天'" :name="index">
      <div class="exam-container">
        <div class="exam-container-top">
          <div class="top-label">选择考点</div>
          <div>
            <el-radio-group v-model="radio">
              <el-radio :label="3">上海泗泾中学{{index}}</el-radio>
              <el-radio :label="6">上海外国语中学</el-radio>
              <el-radio :label="9">上海九亭中学</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="场次" width="180">
            </el-table-column>
            <el-table-column prop="name" label="考试时间" width="180">
            </el-table-column>
            <el-table-column prop="address" label="考生人数">
            </el-table-column>
          </el-table>
        </div>
        <div class="exam-container-content"></div>
      </div>
    </el-tab-pane>
  </el-tabs>
  <div v-else>
    一天考完的显示界面
  </div>
</div>
  `,
  created(){
    this.getList()
  },
  data() {
    return {
      dayNum: 3,
      activeName: '0',
      radio: 3,
      tableData: [{
        date: '第一场',
        name: '08:00-08:30',
        address: '24人'
      }, {
        date: '第二场',
        name: '09:30-09:45',
        address: '24人'
      }, {
        date: '第三场',
        name: '10:15-10:45',
        address: '24人'
      }, {
        date: '第四场',
        name: '11:00-11:15',
        address: '24人'
      }],
    }
  },
  methods: {
    getList() {
      this.getDayNum()
    },
    getDayNum() {
      this.$bus.$on('day-duration', dayNum => this.dayNum = dayNum || 1
      )
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}