function commonParentNode(oNode1, oNode2) {
    while(!oNode1.hasChildNodes(oNode2)){
        oNode1 = oNode1.parentNode;
    }
    return oNode1
}