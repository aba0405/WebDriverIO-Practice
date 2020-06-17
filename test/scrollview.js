const crmPage = require("../pages/scroll")

describe("should scroll to forgot pwd link", function(){
   
    it ("should scroll to forgot pwd link", function(){
        browser.url("https://www.crmpro.com/")
        console.log("in view port", crmPage.forgotpwdLink.isDisplayedInViewport());
        crmPage.forgotpwdLink.scrollIntoView();
        console.log("in view port", crmPage.forgotpwdLink.isDisplayedInViewport());
        crmPage.forgotpwdLink.click();

    })

    it ("should scroll to forgot pwd link", function(){
        browser.url("https://www.crmpro.com/")
        crmPage.forgotpwdLink.scrollIntoView();
        console.log("in view port", crmPage.forgotpwdLink.isDisplayedInViewport());
        crmPage.forgotpwdLink.click();

    })
})