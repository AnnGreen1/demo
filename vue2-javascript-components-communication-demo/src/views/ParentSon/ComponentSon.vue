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
                {{ msgSubStaticProp }}
            </div>
            <div class="subcomponent-content-item">
                <button @click="msgParent">ComponentSon通过$emit()触发事件</button>
            </div>
            <div class="subcomponent-content-item">
                <button @click="msgParentValue">ComponentSon通过$emit()抛出一个值</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ComponentSon",
    props: ["msgSubStaticProp", "msgSubDynamicProp"],
    data() {
        return {
            componentname: "Son"
        }
    },
    methods: {
        msgParent(){
            this.$emit("msgParent");
        },
        msgParentValue(){
            this.$emit("msgParentValue","ComponentSon通过$emit()抛出一个值");
        },
    },
    created() {
        console.log("ComponentSon", this.msgSubStaticProp);
                console.log("ComponentSon", this.$props.msgSubStaticProp);
                console.log(typeof this.$props);
                console.log(this.$props);
        console.log("ComponentSon", this.msgSubDynamicProp);
    }
}
</script>