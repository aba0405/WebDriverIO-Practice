const loginPage = require("../pages/loginpage");

describe("handle application login", function(){

    it ("enter username", function(){
        browser.url(`${browser.options.baseUrl}/login`);
        loginPage.enterUserName('tomsmith');
        assert.equal('tomsmith', loginPage.username.getValue());
    });

    it ("enter password", function(){
        loginPage.enterPassword('SuperSecretPassword');
        assert.equal('SuperSecretPassword', loginPage.password.getValue());
    });

    it ("click login button", function(){
        loginPage.clickOnLogin();
    });

    it ("should clear username", function(){
        loginPage.username.click();
        loginPage.username.clearValue();
        assert.equal('', loginPage.username.getValue());
    });

})