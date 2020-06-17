const blazePage = require("../pages/blazemeter")

describe("balze page elements handle", function(){
    it ("get texts of all main links", function(){
        browser.url('https://www.blazemeter.com/');
        // blazePage.getTextForLi;
        // blazePage.useCasesElementsText;

        console.log('Third link is: ',
            blazePage.specificChildElement(3).getText());


    })

    it("main heading displayed?", function(){
        console.log(blazePage.mainHeader.isDisplayed());
    })

    it("main heading enabled?", function(){
        console.log(blazePage.mainHeader.isEnabled());
    })

    it("main heading exists?", function(){
        console.log(blazePage.mainHeader.isExisting());
    })

    it("main heading displayed in viewPort?", function(){
        console.log(blazePage.mainHeader.isDisplayedInViewport());
    })

    it("jmeter is displayed in view port", function(){
        console.log(blazePage.jmeterLink.isDisplayedInViewport());
    })

    it("click on product link is displayed", function(){
        blazePage.clickOnProductLink();
        browser.pause(5000);
    })
})