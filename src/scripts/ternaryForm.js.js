import HtmlBuilder from "./HtmlBuilder"
import apiManager from "./apiManager"
import ternary from "./ternaryEventHandler"

const articleContainer = document.getElementById("section-output")
export default {
    ternary(){
        let newDocFragment = document.createDocumentFragment()
        let newSection = document.createElement("article", newFormSection)
        let nameOption = ["London", "Paris", "Berlin"]
        let nameInput = document.createElement("fieldset")
        articleContainer.appendChild(nameInput)
        let nameLabel = document.createElement("h3")
        nameLabel.textContent = "Name:"
        nameInput.appendChild(nameLabel)
        let nameField = document.createElement("input")
        nameField.id = "name"
        nameOtion.forEach(name =>{
            const nameOtion = document.createElement("option")
            nameOption.setAttribute("value", name)
            nameOption.textContent = mood

            nameInput.appendChild(nameLabel)
            nameInput.appendChild(nameField)
        })

        let discriptionInput = document.createElement("fieldset")
        articleContainer.appendChild(discriptionInput)
        let discrLabel = document.createElement("h3")
        discrLabel.textContent = "Discription:"
        discriptionInput.appendChild(discrLabel)
        let discrField = document.createElement("input")
        discrField.id = "discr"
        discriptionInput.appendChild(discrField)

        let reviewtInput = document.createElement("fieldset")
        articleContainer.appendChild(reviewtInput)
        let revLabel = document.createElement("h3")
        revLabel.textContent = "Review:"
        reviewtInput.appendChild(revLabel)
        let revField = document.createElement("input")
        revField.id = "cost"
        reviewtInput.appendChild(revField)

        let saveFormButton = document.createElement("button")
        saveFormButton.id = "sav"
        saveFormButton.addEventListener("click", formEvent, handleSave)
        const

    }

}
