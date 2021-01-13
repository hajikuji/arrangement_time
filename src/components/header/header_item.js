let header_item = {
  template: `
  <div class="arrangement-header-item">
    <label class="header-item-label">{{label}}:</label>
    <div>
      <slot></slot>
    </div>
  </div>
  `,
  data() {
    return {
    }
  },
  props: ["label"]
}