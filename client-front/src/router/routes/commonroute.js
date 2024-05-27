const commonroute = [
    {
        path: "/commonroute",
        name: "commonroute",
        component: () => import("@/views/CommonRoute/Index.vue"),
    },
    {
        path: "/CameraView",
        name: "CameraView",
        component: () => import("@/views/CommonRoute/CameraView.vue"),
    },
    {
        path: "/SimpleCanvasCarmera",
        name: "SimpleCanvasCarmera",
        component: () => import("@/views/CommonRoute/SimpleCanvasCarmeraView.vue"),
    },
    {
        path: "/RecorderCSDN",
        name: "RecorderCSDN",
        component: () => import("@/components/Recorder/RecorderCSDN/Index.vue"),
    },
    {
        path: "/RecorderJianShu",
        name: "RecorderJianShu",
        component: () => import("@/components/Recorder/RecorderJianShu/Index.vue"),
    },
];
export default commonroute;
