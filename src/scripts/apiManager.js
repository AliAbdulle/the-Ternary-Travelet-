const apiManager = "http://localhost:8088"
export default {

getAll: (key) => {
    return fetch(`${apiManager}/${key}`)
        .then(response => response.json())
},

getObject: (key, objectId) => {
    return fetch (`${apiManager}/${key}/${objectId}`)
         .then(response => response.json())

},
    postAll: (key, objectId) => {
        return fetch (`${apiManager}/${key}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body:JSON.stringify(objectId)
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