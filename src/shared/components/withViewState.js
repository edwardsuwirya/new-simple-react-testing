import LoadingBackDrop from "./loadingBackDrop/LoadingBackDrop";

const withViewState = (Component) => ({state, ...props}) => {
    return (
        <>
            {state.isLoading && <LoadingBackDrop title={'Please Wait'}/>}
            <Component state={state} {...props}>
                {state.error && <div>{state.error}</div>}
            </Component>
        </>
    )
};

export default withViewState;
