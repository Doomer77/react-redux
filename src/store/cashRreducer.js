//Состояние нектй объект или массив или примитив, которые хранят какие нибудь данные
const defaultState = {
    cash: 5
}

//На данный момент, создаем дефолтное состояние, оно быдет присваиваться в тот момент, когда пользователь окрыл приложение

//Создаем редьюсер, принимает два параметра состояние и акшен
export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CASH":
            return {...state, cash: state.cash + action.payload}
        case "GET_CASH":
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}
