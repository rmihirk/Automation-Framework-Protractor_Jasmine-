
module.exports = {

    toElement: {
        textBox: element(by.model("yourName")),
        result: element(by.css(".span4 h1")),
        add: element(by.css(".btn-primary[value='add']")),
        todoListTextBox: element(by.model("todoList.todoText"))
    },

    verifyCheckBox: function (value) {
        return element(by.xpath("//*[@class='done-false' and normalize-space()='" + value + "']//..//input[@type='checkbox']")).isDisplayed();
    }
}