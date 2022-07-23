const ApiClientFactory = (client) => {

    const doPost = async ({url = '', data = null}) => {
        try {
            const response = await client.post(url, data);
            return response.data;
        } catch (e) {
            if (e.response) {
                console.log("response error")
            } else if (e.request) {
                console.log("request error")
            } else {
                console.log('Error', e.message);
            }
            throw e;
        }
    }
    const doGet = async ({url = ''}) => {
        try {
            const response = await client.get(url);
            return response.data;
        } catch (e) {
            if (e.response) {
                console.log("response error")
            } else if (e.request) {
                console.log("request error")
            } else {
                console.log('Error', e.message);
            }
            throw e;
        }
    }

    return {
        doPost, doGet
    }
}
export default ApiClientFactory;
