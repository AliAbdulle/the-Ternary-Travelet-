const apiManager = "http://localhost:8088"
export default {

getAllPlaces: () => {
    return fetch(`${apiManager}/places`)
        .then(response => response.json())
},

getAllInterests: () => {
    return fetch (`${apiManager}/places/interestPlaceId`)
         .then(response => response.json())

},
    postInterst: (interestObJect) => {
        return fetch (`${apiManager}/interests`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body:JSON.stringify(interestObJect)
        })
    },
    getDelete: (key,itemId) => {
        return fetch(`${apiManager}/${key}/${itemId}`, {
            method: "DELETE",
        })
    },
    patchAll: (key, itemId, objectId) => {
        return fetch (`${apiManager}/${key}/${itemId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body:JSON.stringify(objectId)
        })
    },
}