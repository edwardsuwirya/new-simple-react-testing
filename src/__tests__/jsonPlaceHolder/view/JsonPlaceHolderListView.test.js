import {render, screen} from "@testing-library/react";
import * as Redux from "react-redux";
import JsonPlaceHolderListView from "../../../features/jsonPlaceHolder/views/JsonPlaceHolderListView";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
}));
describe('JsonPlaceHolderListView Screen', () => {
    test('Success render', () => {
        const stateMock = {
            jsonPlaceHolder: {
                postings: [{title: 'dummy 1'}, {title: 'dummy 2'}]
            }
        }
        Redux.useSelector.mockImplementation((cb) => {
            return cb(stateMock)
        })
        render(<JsonPlaceHolderListView/>);

        const listTitleElems = screen.getAllByRole('listitem');

        expect(listTitleElems.length).toBe(2)
    });
})
