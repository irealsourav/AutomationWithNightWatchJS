const checkoutsummaryPG={
clickonFinish:function()
{
    return this.click('#finish');
},
validateitemName:function(index,itemName){
    this.api.pause(1000);
    this.getText({selector:'.inventory_item_name',index:index},function(result){
        console.log(result.value);
        this.assert.equal(result.value,itemName);
    });
},
validateitemPrice:function(index,currency,itemPrice){
    this.getText({selector:'.inventory_item_price',index:index},function(result){
    this.assert.equal(result.value,currency+itemPrice);
    
    });
},
validateItemDescription:function(index,description){
    this.getText({selector:'.inventory_item_desc',index:index},function(result){
    this.assert.equal(result.value,description);
    });
}}
module.exports={
commands:[checkoutsummaryPG],
    elements:
    {
        finish:'#finish'
    }

};