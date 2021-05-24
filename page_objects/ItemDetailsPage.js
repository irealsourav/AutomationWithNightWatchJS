const itemDetPG={
clickonaddtoCartButton:function(){

    return this.waitForElementVisible('@addtocartButton', 1000)
    .click('@addtocartButton');
},
clickonCartButton:function(){
    this.waitForElementVisible('@cartbutton');
    this.assert.visible('@cartbutton');
     return this.
     click('@cartbutton');
},
clickonbacktoproductsPage:function(){
return this.waitForElementVisible('@backtoallProductspage').
click('@backtoallProductspage');
},
validateitemName:function(itemName){
    this.waitForElementVisible('@itemName');
    this.assert.containsText('@itemName',itemName);
},
validateitemPrice:function(currency,itemPrice){
    this.waitForElementVisible('@price');
    this.assert.containsText('@price',currency);
    this.assert.containsText('@price',itemPrice);
},
validateItemDescription:function(description){
    this.waitForElementVisible('@itemDesc');
    this.assert.containsText('@itemDesc',description);
},
waittillimageisloaded:function(){
    this.waitForElementVisible('@itenImg');
}
}
module.exports={
commands:[itemDetPG],
elements:{
addtocartButton:'.btn.btn_primary.btn_small.btn_inventory',
cartbutton: '#shopping_cart_container',
backtoallProductspage:'.inventory_details_back_button',
itemName:'.inventory_details_name.large_size',
itemDesc:'.inventory_details_desc.large_size',
price : '.inventory_details_price',
itenImg:'.inventory_details_img'
}

};