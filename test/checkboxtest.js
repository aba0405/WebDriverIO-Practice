const internetPage = require("../pages/internetpage");

describe("handling checkboxes", function(){

    it ("check page url", function(){
        browser.url("https://the-internet.herokuapp.com/");
        //expect(browser.getUrl()).equals("https://the-internet.herokuapp.com/");
        expect(browser.getUrl()).equals(`${browser.options.baseUrl}`);
    });

    it ("should click checkbox", function(){
        browser.url("https://the-internet.herokuapp.com/");
        internetPage.clickOnLink(6);
        internetPage.H3Header.waitForDisplayed();
        internetPage.clickOnCheckBox(1);

        expect(internetPage.getCheckBoxElement(1).isSelected()).equals(false);

        browser.pause(5000);

    });

    it ("check should page header", function(){
        browser.url("https://the-internet.herokuapp.com/");
        internetPage.clickOnLink(6);
        internetPage.H3Header.waitForDisplayed();
        const text = internetPage.H3Header.getText();
        expect(text).equals("Checkboxes");
    });

    it ("check should page header", function(){
        browser.url("https://the-internet.herokuapp.com/");
        internetPage.clickOnLink(6);
        expect(browser.getUrl()).equals(`${browser.options.baseUrl}checkboxes`);
    });



});