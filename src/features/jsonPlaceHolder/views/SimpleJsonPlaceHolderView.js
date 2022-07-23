import {useDeps} from "../../../shared/depContext";
import useViewState from "../../../shared/hook/useViewState";
import {useEffect} from "react";

const SimpleJsonPlaceHolderView = () => {
    const {apiClient:{doGet, doPost}} = useDeps();
    const [viewState, setLoading, setData, setError] = useViewState();
    useEffect(() => {
        getPost();
    }, []);

    const getPost = async () => {
        setLoading();
        try {
            const response = await doGet({url: '/1'});
            setData(response);
        } catch (e) {
            setError(e);
        }
    }
    const createPost = async () => {
        setLoading();
        try {
            const response = await doPost({
                url: '/', data: {
                    title: "Hello World!",
                    body: "This is a new post."
                }
            })
            setData(response);
        } catch (e) {
            setError(e);
        }
    }
    return (
        <div>
            {viewState.isLoading ? <div>Loading</div> :
                <>
                    <h1>{viewState?.data?.title}</h1>
                    <p>{viewState?.data?.body}</p>
                    <button onClick={createPost}>Create Post</button>
                </>
            }
        </div>
    )
}

export default SimpleJsonPlaceHolderView;
