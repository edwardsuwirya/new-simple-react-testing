import {render, screen} from "@testing-library/react";
import JsonPlaceHolderContent from "../../../features/jsonPlaceHolder/components/JsonPlaceHolderContent";

describe('JsonPlaceHolderContent Component', () => {
    test('Success render with loading', () => {
        const stateMock = {isLoading: true, data: null, error: null}
        const eventsMock = {onCreatePost: jest.fn()};
        render(<JsonPlaceHolderContent state={stateMock} events={eventsMock}/>);
        const loadingElem = screen.getByText(/Please Wait/i)
        expect(loadingElem).toBeInTheDocument();
    });
    test('Success showing data', () => {
        const stateMock = {isLoading: true, data: {title: 'dummy 1', body: 'dummy 2'}, error: null}
        const eventsMock = {onCreatePost: jest.fn()};
        render(<JsonPlaceHolderContent state={stateMock} events={eventsMock}/>);
        const titleElem = screen.getByText('dummy 1');
        const bodyElem = screen.getByText('dummy 2');

        expect(titleElem).toBeInTheDocument();
        expect(bodyElem).toBeInTheDocument();
    })
    test('Success render with error', () => {
        const stateMock = {isLoading: false, data: null, error: 'Error'}
        const eventsMock = {onCreatePost: jest.fn()};
        render(<JsonPlaceHolderContent state={stateMock} events={eventsMock}/>);
        const errorElem = screen.getByText(/Error/i)
        expect(errorElem).toBeInTheDocument();
    });
})

