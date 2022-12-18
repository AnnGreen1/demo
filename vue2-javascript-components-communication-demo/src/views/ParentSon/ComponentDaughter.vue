<template>
    <div class="subcomponent">
        <div class="subcomponent-name">
            {{ componentname }}
        </div>
        <div class="subcomponent-content">
            <div class="subcomponent-content-item">
                {{ msgSubDynamicProp }}
            </div>
            <div class="subcomponent-content-item">
                {{ msgSubDynamicProp }}
            </div>
            <div class="subcomponent-content-item">
                <button @click="msgParent">ComponentDaughter通过$emit()抛出事件</button>
            </div>
            <div class="subcomponent-content-item">
                <button @click="msgParentValue">ComponentDaughter通过$emit()抛出一个值</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ComponentDaughter",
    props: ["msgSubStaticProp","msgSubDynamicProp"],
    data() {
        return {
            componentname:"Daughter"
        }
    },
    methods: {
        msgParent(){
            this.$emit("msgParent");
        },
        msgParentValue(){
            this.$emit("msgParentValue","ComponentDaughter通过$emit()抛出一个值");
        },
    },
    created() {
        console.log("ComponentDaughter",this.msgSubStaticProp);
        console.log("ComponentDaughter",this.msgSubDynamicProp);
    }
}
</script>