<template>
    <div class="component">
        <div class="component-name">
            {{ componentname }}
        </div>
        <div class="component-content">
            component-content
        </div>
        <div class="subcomponents">
            <son msgSubStaticProp="父组件向子组件传的值（静态prop）" :msgSubDynamicProp="msgSubDynamicProp"
                @msgParent="msgParentSonFun" @msgParentValue="msgParentSonValueFun($event)"></son>
            <daughter msgSubStaticProp="父组件向子组件传的值（静态prop）" :msgSubDynamicProp="msgSubDynamicProp"
                @msgParent="msgParentDaughterFun" @msgParentValue="msgParentDaughterValueFun($event)"></daughter>
        </div>
    </div>
</template>

<script>
import son from "@/views/ParentSon/ComponentSon.vue"
import daughter from "@/views/ParentSon/ComponentDaughter.vue";
export default {
    name: "ComponentParent",
    data() {
        return {
            componentname: "Parent",
            msgSubDynamicProp: "父组件向子组件传的值（动态prop）"
        }
    },
    components: {
        son,
        daughter
    },
    methods: {
        msgParentSonFun() {
            console.log("监听子组件Son通过$emit()触发的事件");
        },
        msgParentDaughterFun() {
            console.log("监听子组件Daughter通过$emit()触发的事件");
        },
        msgParentSonValueFun(event) {
            console.log(event);//这个是子组件抛出的值
        },
        msgParentDaughterValueFun(event) {
            console.log(event);//这个是子组件抛出的值
        }
    },
    created() {
    }
}
</script>