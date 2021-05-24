const cartdecPG={
clickonCheckout:function(){
return this.waitForElementVisible('@checkout', 1000).
click('@checkout').
waitForElementNotPresent('@checkout')
},
validateitemName:function(index,itemName){
    this.waitForElementVisible('@itemName');
    this.getText({selector:'.inventory_item_name',index:index},function(result){
        this.assert.equal(result.value,itemName);
    });
},
validateitemPrice:function(index,currency,itemPrice){
    this.waitForElementVisible('@itemPrice');
    this.getText({selector:'.inventory_item_price',index:index},function(result){
    this.assert.equal(result.value,currency+itemPrice);
    });
},
validateItemDescription:function(index,description){
    this.waitForElementVisible('@itemDesc');
    this.getText({selector:'.inventory_item_desc',index:index},function(result){    
    this.assert.equal(result.value,description);
    });
}
}
module.exports={
   commands:[cartdecPG],
   elements:{
    checkout:'#checkout',
    itemName:'.inventory_item_name',
    itemDesc:'.inventory_item_desc',
    itemPrice:'.inventory_item_price'

}};