import {useDeps} from "../../shared/depContext";

const useLoginService = () => {
    const {apiClient: {localClient}, services: {loginService}} = useDeps();
    return loginService(localClient);
}
export default useLoginService;
