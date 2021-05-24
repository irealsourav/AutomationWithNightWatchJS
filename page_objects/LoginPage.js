const loginpgCMD={
    enteruserNameData:function(username){
        this.waitForElementVisible('@userName',1000);
        this.assert.visible('@userName');
        return this.setValue('@userName',username);
    },
    enterPassword:function(password){
        this.waitForElementVisible('@password',1000);
        this.assert.visible('@password');
        return this.setValue('@password',password);
    },
    clickonSubmit:function(){
        this.waitForElementVisible('@submitButton',1000);
        this.assert.visible('@submitButton')
        return this.click('@submitButton').
        waitForElementNotPresent('@submitButton');
    }
}
module.exports = {
    url: 'https://www.saucedemo.com/',    
    commands:[loginpgCMD], 
    elements: {
        userName: '#user-name',
        password: '#password',
        submitButton: 'input[type=submit]'
  }
};