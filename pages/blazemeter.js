class BlazePage{

    get mainHeader(){
        return $('h2.home_title')
    }

    get productLink(){
        return $('ul.list-nav-links li:nth-child(1) a')
    }

    clickOnProductLink(){
        if(this.productLink.isDisplayed() === true){
            this.productLink.click();
        }
    }

    get jmeterLink(){
        return $("//a[text()='JMeter']")
    }

    get parent(){
        return $('ul.list-nav-links');
    }

    get childElement(){
        return this.parent.$$('li');
    }

    get getTextForLi(){
        return this.childElement.filter(element => {
            console.log(element.getText());
        });
    }

    get useCasesElements(){
        return $$('div#main_b_footer_second_block>ul>li')
    }

    get useCasesElementsText(){
        return this.useCasesElements.filter(element => {
            console.log(element.getText());
        });
    }

    // get specificChildElement(index){
    //     return this.parent.$(`li:nth-child(${index})`)
    // }

    specificChildElement(index){
        return this.parent.$(`li:nth-child(${index})`)
    }

}

module.exports = new BlazePage();