import JsonPlaceHolderContent from "../components/JsonPlaceHolderContent";
import withContainer from "../../../shared/components/withContainer";

const JsonPlaceHolderView = ({controller}) => {
    const {viewState, onCreatePost} = controller();
    return <JsonPlaceHolderContent state={viewState} events={{onCreatePost}}/>;
}

export default withContainer('Dashboard', JsonPlaceHolderView);
