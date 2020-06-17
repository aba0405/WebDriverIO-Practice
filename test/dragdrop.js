describe ("drag and drop actions feature", function(){
    it ("do drag and drop", function(){
        browser.url("https://jqueryui.com/droppable/");
        
        const sourceElement = $('#draggable');
        const targetElement = $('#droppable')

        sourceElement.dragAndDrop(sourceElement);
        sourceElement.dragAndDrop(targetElement, 10)
        
        browser.pause(5000);

    });
});