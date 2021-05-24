module.exports={
before:function(browser){
    browser.url(browser.page.LoginPage().url).
    assert.titleContains("Swag Labs");;
},
'Verify login successful or not':function(browser){
    browser.page.LoginPage().enteruserNameData("standard_user");
    browser.page.LoginPage().enterPassword("secret_sauce");
    browser.page.LoginPage().clickonSubmit();
},
'Select First Item':function(browser){
    //choosing the first element from the list of items
browser.page.ItemSelectionPage().clickonselectedItem(0);
},
'Validate First Item':function(browser){
    let item1=browser.page.ItemDetailsPage();
    item1.waittillimageisloaded();
    item1.validateitemName('Sauce Labs Backpack');
    item1.validateItemDescription('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    item1.validateitemPrice('$','29.99');
    item1.clickonaddtoCartButton();
    item1.clickonbacktoproductsPage();
},
'Select Second Item' :function(browser){
    ////choosing the second element from the list of items
    browser.page.ItemSelectionPage().clickonselectedItem(1);
},
'Validate Second Item':function(browser){
    let item2=browser.page.ItemDetailsPage();
    item2.waittillimageisloaded();
    item2.validateitemName('Sauce Labs Bike Light');
    item2.validateItemDescription('A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.');
    item2.validateitemPrice('$','9.99');
    item2.clickonaddtoCartButton();
},

'Go to Cart Page':function(browser){
    
    browser.page.ItemDetailsPage().clickonCartButton();
},
'validating all items before going into Checkout section and go to checkout' :function(browser){
    browser.page.CartDecisionPage().validateitemName(0,'Sauce Labs Backpack');
    browser.page.CartDecisionPage().validateitemName(1,'Sauce Labs Bike Light');
    browser.page.CartDecisionPage().validateItemDescription(0,"carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.");
    browser.page.CartDecisionPage().validateItemDescription(1,'A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.');
    browser.page.CartDecisionPage().validateitemPrice(0,'$','29.99');
    browser.page.CartDecisionPage().validateitemPrice(1,'$','9.99');
    browser.page.CartDecisionPage().clickonCheckout();

},
'Enter User Data for confirming Order':function(browser){
browser.page.CheckoutInformationPage().enterfirstName("new");
browser.page.CheckoutInformationPage().enterlastName("user1");
browser.page.CheckoutInformationPage().enterpostalcode("12159");
browser.page.CheckoutInformationPage().clickonContinueButton();
},
'Verify Data one last time before buying two items':function(browser){
    browser.page.CheckoutSummaryPage().validateitemName(0,'Sauce Labs Backpack');
    browser.page.CheckoutSummaryPage().validateitemName(1,'Sauce Labs Bike Light');
    browser.page.CheckoutSummaryPage().validateItemDescription(0,'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    browser.page.CheckoutSummaryPage().validateItemDescription(1,'A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.');
    browser.page.CheckoutSummaryPage().validateitemPrice(0,'$','29.99');
    browser.page.CheckoutSummaryPage().validateitemPrice(1,'$','9.99');
    browser.page.CheckoutSummaryPage().clickonFinish();
},
'Verify all completion messages':function(browser){
browser.page.OrderConfirmationPage().validateConfirmMessages('THANK YOU FOR YOUR ORDER','Your order has been dispatched, and will arrive just as fast as the pony can get there!','HECKOUT: COMPLETE!');
},
after:function(browser){
  browser.end();  

}



};