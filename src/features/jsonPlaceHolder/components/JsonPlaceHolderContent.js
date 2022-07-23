import withViewState from "../../../shared/components/withViewState";

const JsonPlaceHolderContent = ({children,state, events: {onCreatePost}}) => {
    return (
        <div>
            {state.data ? <>
                <h1>{state.data.title}</h1>
                <p>{state.data.body}</p>
                <button onClick={onCreatePost}>Create Post</button>
            </> : <>Empty</>}
            {children}
        </div>
    )
}

export default withViewState(JsonPlaceHolderContent);
