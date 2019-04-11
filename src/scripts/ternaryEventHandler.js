import apiManager from "./apiManager.js"
import ternaryForm from "./ternaryForm.js.js";

    const clearElement = domElement => {
        while (domElement) {
            domElement.removeChild(domElement.firstChild)
        }
    }
export default {
    handleSave() {

        let name = document.getElementById("newName")
        let description = document.getElementById("newDescription")
        let cost = document.getElementById("newCost")
        let reviews = document.getElementById("newReview")

        let newArticle = {
            placeId: "",
            name: name.value,
            description: description.value,
            cost: cost.value,
            reviews: reviews.value
        }
        console.log(newArticle)
        apiManager.postInterst(newArticle).then(clearElement)
            .then(ternaryForm.buildInterest)
    }
}

//     handleEdit(currentTernary) {
//         let ternaryId = currentTernary.target.id.split("-")[1]
//         let name = document.getElementById(`edit-ternary-name-${ternaryId}`)
//         let description = document.getElementById(`edit-ternary-description-${ternaryId}`)
//         let cost = document.getElementById(`edit-ternary-cost-${ternaryId}`)
//         let reviews =document.getElementById(`edit-ternary-reviews-${ternaryId}`)

//         let editTernary = {
//             name: name.value,
//             description: description.value,
//             cost: cost.value,
//             reviews: reviews.value,
//             id:ternaryId

//         }
//         console.log(editTernary)
//         apiManager.patchAll("ternary", `${ternaryId}`, editTernary)
//             .then(() => ternaryForm.listAllTernery())
//     },
//     handleDelete() {
//         console.log("delete button clicked")
//         // event.target.id.split("--")[1]
//         let ternaryId = event.target.id.split("--")[1]

//         apiManager.delFetch("ternary", ternaryId)
//             .then(() => ternaryForm.listAllTernery())
//     },
