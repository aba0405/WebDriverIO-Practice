class HomePage{
    get pageHeader(){
        return $('h1');
    }
    get subHeading(){
        return $('div.banner-text-content > p.sub-text');
    }
    get getStartedLink(){
        return $("//div[@class='button button--solid in-page-scroll']")
    }
}

module.exports = new HomePage();