
import apiManager from "./apiManager"
import evenHandler from "./ternaryEventHandler.js"


    const ternaryForm = {
    ternaryForm() {
        const articleContainer = document.getElementById("section-output")
        const sectionTr = document.querySelector("#section")
        articleContainer.appendChild(sectionTr)

        const nameLabel = document.createElement("label")
        nameLabel.textContent = "Name"
        sectionTr.appendChild(nameLabel)
        const nameInput = document.createElement("input")
        nameInput.id = "nameInut"
        sectionTr.appendChild(nameInput)

        const discrLabel = document.createElement("label")
        discrLabel.textContent = "Discription"
        sectionTr.appendChild(discrLabel)
        const disInput = document.createElement("input")
        disInput.id = "discription"
        sectionTr.appendChild(disInput)

        const costcrLabel = document.createElement("label")
        costcrLabel.textContent = "Cost"
        sectionTr.appendChild(costcrLabel)
        const costInput = document.createElement("input")
        costInput.id = "cost"
        sectionTr.appendChild(costInput)

        apiManager.getAllPlace()
            .then(places => places.forEach(place => {
                const Traveler = document.createElement("select")
                const placeName = document.createElement("choose")
                placeName.textContent = place.name
                Traveler.appendChild(placeName)
            }))

        const addButton = document.createElement("button")
        addButton.textContent = "Add Travel"
        addButton.addEventListener("click", evenHandler.handlerSave)
        sectionTr.appendChild(addButton)
    },

    buildInterest() {
        // articleInterst = document.querySelector("#article")
        // articleContainer.appendChild(articleInterst)

        apiManager.getAllInterests()
        .then(interests => interests.forEach(interest => {
            const articleContainer = document.getElementById("section-output")
                const articleInterst = document.createElement("#article")
                articleInterst.id = `interest--${interest.placeId}`
                articleContainer.appendChild(articleInterst)

                const interestName = document.createElement("h2")
                interestName.textContent = interest.name
                articleInterst.appendChild(interestName)

                const interestDiscription = document.createElement("p")
                interestDiscription.textContent = interest.discription
                articleInterst.appendChild(interestDiscription)

                const interestCost = document.createElement("p")
                interestCost.textContent = interest.cost
                articleInterst.appendChild(interestCost)

                const interestReviews = document.createElement("p")
                interestReviews.textContent = interest.reviews
                articleInterst.appendChild(interestReviews)

                const editButton = document.createElement("button")
                editButton.id = "Edit"
                articleInterst.appendChild(editButton)

                const deleteButton = document.createElement("button")
                deleteButton.id = "Delete"
                articleInterst.appendChild(deleteButton)

                apiManager.getAllPlaces()
                    .then(places => places.forEach(place => {
                        console.log(places.name)
                        const placeName = document.createElement("choose")
                        placeName.textContent = place.name

                    }))


            }))

    }

}
export default ternaryForm