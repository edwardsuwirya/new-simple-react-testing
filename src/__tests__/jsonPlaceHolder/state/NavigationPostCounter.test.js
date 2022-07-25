import {act, fireEvent, screen} from "@testing-library/react";
import TotalPostLabel from "../../../features/jsonPlaceHolder/components/TotalPostLabel";
import {render} from "../../../shared/utils/testUtils";
import {rest} from "msw";
import {setupServer} from "msw/node";
import {store} from "../../../store";
import JsonPlaceHolderView from "../../../features/jsonPlaceHolder/views/JsonPlaceHolderView";
import useJsonPlaceHolderController from "../../../features/jsonPlaceHolder/views/useJsonPlaceHolderController";
import ApiClientFactory from "../../../shared/apiClient/apiClientFactory";
import {jsonPlaceHolderClientInstance} from "../../../shared/apiClient/apiClientInstanceFactory";
import jsonPlaceHolderService from "../../../services/jsonPlaceHolderService/jsonPlaceHolderService";
import {DepsProvider} from "../../../shared/depContext";

describe('Navigation Post Counter', () => {
    const handlers = [
        rest.post('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
            return res(ctx.json({
                "title": "123",
                "body": "123"
            }))
        }),
        rest.get('https://jsonplaceholder.typicode.com/posts/1', (req, res, ctx) => {
            return res(ctx.json([{
                "title": "123",
                "body": "123"
            }]))
        })
    ]
    const server = setupServer(...handlers)
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());
    test('Success change counter state when add post', async () => {
        render((
            <>
                <DepsProvider
                    apiClient={{
                        jsonPlaceHolderClient: ApiClientFactory(jsonPlaceHolderClientInstance)
                    }}
                    services={{
                        jsonPlaceHolderService
                    }}
                >
                    <TotalPostLabel/>
                    <JsonPlaceHolderView controller={useJsonPlaceHolderController}/>}
                </DepsProvider>
            </>
        ), store);

        const buttonCreatePostElem = await screen.findByText(/Create Post/);
        fireEvent.click(buttonCreatePostElem);
        const postLabelElem = await screen.findByText(/Post 1/);
        expect(postLabelElem).toBeInTheDocument()
    })
});
