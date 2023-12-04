let handleStatus = 1;
let isModify = 1;

if (handleStatus == 0) {
    if (isModify == 0) {
        console.log('处理');
    }
    if (isModify != 0) {
        console.log('禁用处理');
    }
}
if (handleStatus != 0) {
    if (handleStatus == 1 && isModify == 0) {
        console.log('修改');
        console.log('处理记录');
    }
    if (handleStatus == 1 && isModify == 1) {
        console.log('禁用修改');
        console.log('处理详情');
        console.log('处理记录');
    }
    if (handleStatus != 1 && handleStatus != 0) {
        console.log('处理详情');
        console.log('处理记录');
    }
}