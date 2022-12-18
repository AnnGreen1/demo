const ComponentsCommunication = [
  /**
   * 父组件向子组件传值，子组件抛出值（父子组件之间通信）
   */
  {
    path: "/ParentSon",
    name: "ParentSon",
    component: () => import("@/views/ParentSon/ComponentParent.vue"),
  },
  /**
   * 子组件之间通过父组件通信
   */
  {
    path: "/BrotherSister",
    name: "BrotherSister",
    component: () => import("@/views/BrotherSister/ParentCard.vue"),
  },
  /**
   * 子组件之间通过mitt通信
   */
  {
    path: "/BrotherSisterMitt",
    name: "BrotherSisterMitt",
    component: () => import("@/views/BrotherSisterMitt/ParentCard.vue"),
  },
];
export default ComponentsCommunication;
