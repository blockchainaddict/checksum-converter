import store from '../store';

const fetchDataRequest = () => {
    return {
        type: "CHECK_DATA_SUCCESS",
        payload: payload,
    };
};

const fetchDataSuccess = (payload) => {
    return {
        type: "CHECK_DATA_SUCCESS",
        payload: payload,
    };
};

const fetchDataFailed = (payload) => {
    return {
        type: "CHECK_DATA_FAILED",
        payload: payload,
    };
};

export const fetchData = () => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            let totalSupply = await store
            .getState()
            .blockchain.smartContract.methods.totalSupply()
            .call();

            dispatch(
                fetchDataSuccess({
                    totalSupply,
                })
            );
        } catch (err) {
            consloge.log(err);
            dispatch(fetchDataFailed("Couldn't load data from contract"));
        }
    }
}