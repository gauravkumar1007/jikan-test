import Types from "../action/types"

export function data(state = {}, action = {}) {
    switch (action.type){

        case Types.FETCH_DATA:{
            const {uniqueId,data,error,showLoading,append,showFooterLoading} = action.payload;
            let _currentState = state[uniqueId] || {};
            if(append){
                if(typeof append === "boolean"){
                    if(Array.isArray(data)){
                        const _previousData = _currentState["data"] ||[];
                        _currentState = {
                            data: [..._previousData, ...data],
                            hasNoMoreData:data.length === 0,
                            showFooterLoading
                        }
                    } else {
                        _currentState = {
                            ..._currentState,
                            showFooterLoading
                        }
                    }


                } else {
                    let hasNoMoreData;
                    let newData;
                    if(data){
                        const previousData = _currentState["data"] && _currentState["data"][append] ? _currentState["data"][append]: [];
                        hasNoMoreData = !!(data[append] &&  data[append].length === 0);
                        newData = {...data,[append]:[...previousData,...data[append]]}
                    } else {
                        newData = _currentState["data"];
                    }
                    _currentState = {..._currentState,
                        ["data"]: {...data,...newData,hasNoMoreData},
                        showLoading,showFooterLoading
                    };
                }
            } else {
                const _prevData = _currentState["data"];
                _currentState = {..._currentState, data:data || _prevData ,showLoading,showFooterLoading};
            }
            return {...state,
                [uniqueId]:{..._currentState,error}
            };
        } 
        case Types.REMOVE_DATA:{
            const preState = {...state}
            const {uniqueId} = action.payload;
            delete preState[uniqueId];
            return preState;
        }
        default:
            return state
    }
}


