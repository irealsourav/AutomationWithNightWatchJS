const orderconfPG={
validateConfirmMessages:function(oredrcompletemsg,orderfulltrackingmsg,checkoutmsg){
    this.assert.containsText('@ordercompletionmsg',oredrcompletemsg);
    this.assert.containsText('@orderfulltrackingmsg',orderfulltrackingmsg);
    this.assert.containsText('@checkoutmsg',checkoutmsg);

}
}

module.exports={
    commands:[orderconfPG],
    elements:{
ordercompletionmsg : '.complete-header',
orderfulltrackingmsg: '.complete-text',
checkoutmsg:'.header_secondary_container'
    }
};