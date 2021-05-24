const itemselectionPG={
clickonselectedItem:function(index){
  return this.click({selector: '@item',index:index});
}
}
module.exports = {
    commands:[itemselectionPG],
    elements: {
         item:'.inventory_item_name'
    }
         
  };