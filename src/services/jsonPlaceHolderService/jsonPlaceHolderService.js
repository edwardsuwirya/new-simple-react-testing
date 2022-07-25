const jsonPlaceHolderService = ({doGet, doPost}) => {
    const getPostById = async (id) => {
        try {
            return await doGet({url: '/' + id})
        } catch (e) {
            throw new Error(e);
        }
    }
    const createPost = async (title, body) => {
        try {
            return await doPost({
                url: '/', data: {
                    title,
                    body
                }
            })
        } catch (e) {
            throw new Error(e);
        }
    }
    return {
        getPostById, createPost
    }
}

export default jsonPlaceHolderService;
