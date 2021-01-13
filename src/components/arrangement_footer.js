let arrangement_footer = {
  data() {
    return {
      tips: [{
        label: '注意事项',
        content: `1，操作前考生要填写核对考生信息、确认无误后开始考试；
2，实验操作中要注意操作步骤和动作的准确性，不能损坏实验仪器；
3，操作完成后要按要求，将实验结果以电子报告的形式进行提交；
4，考生完成操作后要清洁、整理好实验仪器；
5，考生要遵守考场纪律，独立完成自己的实验；`
      }, {
        label: '考生须知',
        content: `1，考生抽签进入考场，不准携带任何书籍、实验报告、复习资料等；
2，考生需抽签入场，考试开始五分钟后不得入场，中途出场者不得再次入场；
3，考生要听从主考、监考、工作人员指挥，杜绝各类事故的发生
4，考试时间一到，考生应立即停止操作并退出考场；
5，无故不参加考试者，视为缺考，成绩一律视为零分。`}, {
        label: '考场纪律',
        content: `1、考前10分钟由领考员按场次点名进入候考室，考前5分钟在候考室抽签；
2、考生持准考证、抽签号进入考场并对号入座，等待考试；
3、考生需按实验要求清点实验桌上的器材，检查是否有损坏或缺少，如需更换须举手向监考教师申请，不得擅自更换他考生器材；
4、考试时禁止与他人交谈或偷看他人操作；如有问题须举手申请；
5、考试进行时，待考考生不得在考室周围逗留、吵闹。`}]
    }
  },
  template: `
  <div class="arrangement-footer">
  <div class="arrangement-footer-title">其他</div>
  <div class="arrangement-footer-container">
    <footer-field v-for="(item, index) in tips" :key="index" :label="item.label" :content="item.content"></footer-field>
  </div>
</div>
  `,
  components: {
    'footer-field': {
      props: {
        label: {
          type: String
        },
        content: {
          type: String
        }
      },
      template: `
  <div class="arrangement-footer-content">
      <div class="footer-content-title">{{label}}</div>
      <el-input readonly resize="none" type="textarea" placeholder="请输入内容" :rows="12" v-model="content">
      </el-input>
    </div>
  `
    }
  }
}