import {useSelector} from "react-redux";
import {postSelector} from "../state/jsonPlaceHolderSelector";

const TotalPostLabel = () => {
    const posts = useSelector(postSelector);
    return (
        <div>{'Post '+ posts.length}</div>
    )
}

export default TotalPostLabel;
