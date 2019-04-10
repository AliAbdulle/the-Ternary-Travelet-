import HtmlBuilder from "./HtmlBuilder"
import apiManager from "./apiManager"
import ternary from "./ternaryEventHandler"

const articleContainer = document.getElementById("section-output")
export default {
    ternary(){
        let newDocFragment = document.createDocumentFragment()
        let newSection = document.createElement("article", neFormSection)

        let nameInput = document.createElement("fieldset")
        articleContainer.appendChild(nameInput)
        let nameLabel = document.createElement("h3")
        nameLabel.textContent = "Name:"
        nameInput.appendChild(nameLabel)
        let nameField = document.createElement("input")
        nameField.id = "name"
        nameInput.appendChild(nameField)

        let discriptionInput = document.createElement("fieldset")
        articleContainer.appendChild(discriptionInput)
        let discrLabel = document.createElement("h3")
        discrLabel.textContent = "Discription:"
        discriptionInput.appendChild(discrLabel)
        let discrField = document.createElement("input")
        discrField.id = "discr"
        discriptionInput.appendChild(discrField)





    }

}
