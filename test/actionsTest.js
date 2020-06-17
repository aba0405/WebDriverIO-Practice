const spicejetPage = require("../pages/actions")

describe("Page actions feature", function(){

    // it ("move to element", function(){
    //     browser.url("https://www.spicejet.com/");
    //     spicejetPage.moveToElement(spicejetPage.loginSignUpLink);
    //     spicejetPage.moveToElement(spicejetPage.spiceClubMem);
    //     spicejetPage.clickElement(spicejetPage.memberLogin);
    //     browser.pause(3000)
    // });

    it("KEYS action perform Tab", function(){
        browser.url("https://the-internet.herokuapp.com/key_presses");
        spicejetPage.enterSearch("Tab")
        const text = spicejetPage.getResultLabelText();
        console.log(text);
        assert.equal("You entered: TAB", text);
        browser.pause(3000)


    });

});