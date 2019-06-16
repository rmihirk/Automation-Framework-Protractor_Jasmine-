var po = require('../pageObject/angular_po');

describe('Test', () => {

    it("Scenario 1", function () {
        browser.get(browser.params.baseURL);
        expect(browser.getTitle()).toEqual("AngularJS — Superheroic JavaScript MVW Framework");
    })

    it("Scenario 2", function () {
        po.toElement.textBox.sendKeys("Angular");
        expect(po.toElement.result.getText()).toEqual("Hello Angular!")
    })

    it("Scenario 3", function () {
        po.toElement.todoListTextBox.sendKeys("Angular List");
        po.toElement.add.click();
        expect(po.verifyCheckBox("Angular List")).toEqual(true)
    })
})