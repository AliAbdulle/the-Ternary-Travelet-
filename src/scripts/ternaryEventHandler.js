import api from "./apiManager"
import Html from "./HtmlBuilder"
import apiManager from "./apiManager";
import ternaryForm from "./ternaryForm.js";

export default {
    handleSave() {
        let name = document.getElementById("newName")
        let discription = document.getElementById("newDiscription")
        let cost = document.getElementById("newCost")
        let review = document.getElementById("newReview")

        let newArticle = {
            name: newName.value,
            discription: newDiscription.value,
            cost: newCost.value,
            review: newReview.value
        }
        console.log(newArticle)
        apiManager.postAll("article", newArticle)
            .then(() => ternaryForm.ternary())
    }
}
