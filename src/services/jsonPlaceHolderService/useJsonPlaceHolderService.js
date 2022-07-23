import {useDeps} from "../../shared/depContext";

const useJsonPlaceHolderService = () => {
    const {apiClient: {jsonPlaceHolderClient}, services: {jsonPlaceHolderService}} = useDeps();
    return jsonPlaceHolderService(jsonPlaceHolderClient);
}
export default useJsonPlaceHolderService;
