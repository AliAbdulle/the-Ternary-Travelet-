import HtmlBuilder from "./HtmlBuilder"
import formEvent from "./ternaryEventHandler.js"

const articleContainer = document.getElementById("section-output")

export default {
    ternaryFormSection() {
        let newDocFragment = document.createDocumentFragment()
        let sectionTern = HtmlBuilder.elementBuilder("section", "ternaryFormSection")
        sectionTern.id = "ternaryForm"

        sectionTern.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Name:", "name"))
        sectionTern.appendChild(HtmlBuilder.elementBuilder("input", "newName", "Name:", ""))

        sectionTern.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Description:", "newDescription"))
        sectionTern.appendChild(HtmlBuilder.elementBuilder("input", "newDescription", "description:", ""))

        sectionTern.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Cost:", "newCost"))
        let dateInput = sectionTern.appendChild(HtmlBuilder.elementBuilder("input", "newCost", "cost"))
        dateInput.setAttribute("type", "date")
        sectionTern.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Reviews:", "newReview"))
        sectionTern.appendChild(HtmlBuilder.elementBuilder("input", "newReview", "Review"))

        let saveButtonForm = HtmlBuilder.elementBuilder("button", undefined, "Save ", "Save")
        saveButtonForm.id = "save"

        saveButtonForm.addEventListener("click", formEvent.handleSave)
        const articleSection = HtmlBuilder.elementBuilder("section", "sectionTern")
        sectionTern.appendChild(saveButtonForm)
        newDocFragment.appendChild(sectionTern)
        newDocFragment.appendChild(articleSection)
        articleContainer.appendChild(newDocFragment)
    },

    editTernaryForm(trObject) {
        let trnEditArticle = HtmlBuilder.elementBuilder("article", "trnEditArticle")
        trnEditArticle.id = "editArticle"

        trnEditArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Name:"))
        trnEditArticle.appendChild(HtmlBuilder.elementBuilder("input", `edit-ternary-name-${trObject.id}`, undefined, trObject.name))

        trnEditArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Description:"))
        trnEditArticle.appendChild(HtmlBuilder.elementBuilder("input", `edit-ternary-description-${trObject.id}`, undefined, trObject.description))

        trnEditArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, " Cost:"))
        trnEditArticle.appendChild(HtmlBuilder.elementBuilder("input", `edit-ternary-cost-${trObject.id}`, undefined, trObject.cost))

        trnEditArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Review:"))
        trnEditArticle.appendChild(HtmlBuilder.elementBuilder("input", `edit-ternary-checkbox-${trObject.id}`, undefined, trObject.review))


        let editButtonForm = HtmlBuilder.elementBuilder("button", `edit-${trObject.id}`, "Save", "edit-save")
        editButtonForm.addEventListener("click", formEvent.handleEdit)
        trnEditArticle.appendChild(editButtonForm)
        return trnEditArticle
    }
}