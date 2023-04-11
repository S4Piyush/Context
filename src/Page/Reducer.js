
function Reducer(state, acti) {
    switch (acti.type) {
        case "Edti":
            return { ...state, micro: acti.payload }
        case "End":
            return { ...state, art: acti.payload }
        case "username":
            return { ...state, username: acti.payload }


        default:
            return state
    }
}

export default Reducer