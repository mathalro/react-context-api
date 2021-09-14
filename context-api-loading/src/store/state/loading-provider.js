import React, { useState } from "react";

export const LoadingContext = React.createContext({
    loading: false,
    message: null,
    showLoading: message => { },
    hideLoading: () => { }
})

export const LoadingProvider = (props) => {
    const [state, setState] = useState({ loading: false, message: null });

    const showLoading = (message) => {
        console.log("Show loading");
        setState({
            ...state,
            loading: true,
            message
        });
    }

    const hideLoading = () => {
        setState({ ...state, loading: false })
    }

    return (
        <LoadingContext.Provider
            value={{
                loading: state.loading,
                message: null,
                showLoading: showLoading,
                hideLoading: hideLoading
            }}
        >
            {props.children}
        </LoadingContext.Provider>
    )
}

const useLoading = () => React.useContext(LoadingContext);

export default useLoading;