import {useSelector} from "react-redux";
import {postSelector} from "../state/jsonPlaceHolderSelector";

const JsonPlaceHolderListView = () => {
    const posts = useSelector(postSelector);

    return (
        <ul>
            {posts.map((p) => <li>{p.title}</li>)}
        </ul>
    )
}
export default JsonPlaceHolderListView;
