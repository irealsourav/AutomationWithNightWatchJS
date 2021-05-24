const checkoutPG={

    enterfirstName:function(fName)
    {
        this.waitForElementVisible('@firstName').
        setValue('@firstName',fName);

    },
    enterlastName:function(lName)
    {
        this.setValue('@lastName',lName)
    },
    enterpostalcode: function(postalcode)
    {
        this.setValue('@postalcode',postalcode)
    },
    clickonContinueButton:function()
    {
        this.click('@continuebutton').
        waitForElementNotPresent('@continuebutton');
    }
}


module.exports={
    commands:[checkoutPG],
    elements:{
        firstName:'#first-name',
        lastName:'#last-name',
        postalcode:'#postal-code',
        continuebutton: '#continue'

    }
};