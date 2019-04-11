import HtmlBuilder from "./HtmlBuilder"
import apiManager from "./apiManager"
import ternaryForm from "./ternaryForm"
import event from "./ternaryEventHandler"

export default {
    listAllTernery() {
        const articleContainer = document.querySelector("#section-output")
        let ternarySection = document.createElement("article")
        HtmlBuilder.clearElement(articleContainer)
        articleContainer.appendChild(ternarySection)
        apiManager.getAll("ternary")
            .then(ternary => ternary.forEach(traveler => {
                let newArticle = HtmlBuilder.elementBuilder("div", `childDiv-${traveler.id}`)
                newArticle.id = "childDiv"
                newArticle.appendChild(HtmlBuilder.elementBuilder("article", `newName--${traveler.id}`, `${traveler.name}`))
                newArticle.appendChild(HtmlBuilder.elementBuilder("article", `newName--${traveler.id}`, `${traveler.name}`))
                newArticle.appendChild(HtmlBuilder.elementBuilder("article", `newDescription--${traveler.id}`, `${traveler.description}`))
                newArticle.appendChild(HtmlBuilder.elementBuilder("article", `newCompleteDate--${traveler.id}`, `${traveler.review}`))
                newArticle.appendChild(HtmlBuilder.elementBuilder("article", `newCheckbox--${traveler.id}`, `${traveler.cost}`))

                let deleteFormButtom = HtmlBuilder.elementBuilder("button", `delete--${traveler.id}`, "Delete", "Delete")
                deleteFormButtom.classList = "delete"
                deleteFormButtom.addEventListener("click", event.handleDelete)
                newArticle.appendChild(deleteFormButtom)

                let editFormButton = HtmlBuilder.elementBuilder("button", `save-${traveler.id}`, "Task Edit", "Edit")
                editFormButton.id = "editButton"
                newArticle.appendChild(editFormButton)
                editFormButton.addEventListener("click", function () {
                    newArticle.appendChild(ternaryForm.editTaskForm(traveler))
                })
                ternarySection.appendChild(newArticle)

            }))
    },

    childTernarySection() {
        let articleContainer = document.getElementById("section-output")
        let childSection = HtmlBuilder.elementBuilder("ternary", "childTernarySection")
        articleContainer.appendChild(childSection)
    }
}