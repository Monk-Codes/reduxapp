export const depositTokenZi = (tokens) => {

    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: tokens
        })
    }
}

export const withdrawTokenZi = (tokens) => {

    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: tokens
        })
    }
}