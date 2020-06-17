const homePage = require("../pages/homeapage")

describe("home page elements handle", function(){

    it ("verify home page elements", function(){
       
       browser.url("https://www.freshworks.com/");
       let text =  homePage.pageHeader.getText();
       console.log(text)
       
       console.log(homePage.subHeading.getText());
       homePage.getStartedLink.click()

       browser.pause(5000);


    });
});

