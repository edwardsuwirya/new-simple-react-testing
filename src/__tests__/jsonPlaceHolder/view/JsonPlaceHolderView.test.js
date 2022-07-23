import {fireEvent, render, screen} from "@testing-library/react";
import JsonPlaceHolderView from "../../../features/jsonPlaceHolder/views/JsonPlaceHolderView";

describe('JsonPlaceHolderView Screen', () => {
    let controllerMock;
    beforeEach(() => {
        controllerMock = jest.fn();
    })
    test('Success render', () => {
        controllerMock.mockReturnValue({
                viewState: {isLoading: false, data: null, error: null},
                onCreatePost: jest.fn(),
            }
        );
        render(<JsonPlaceHolderView controller={controllerMock}/>);

        // Queries adalah sebuah method untuk menemukan element dari UI
        // getBy... = throw error ketika element tidak ditemukan
        // queryBy... = return null ketika elemen tidak ditemukan
        // findBy... = return promise reject ketika elemen tidak ditemukan

        const viewPage = screen.getByText('Dashboard');

        expect(viewPage).toBeInTheDocument();
    });
    test('Success showing data', () => {
        controllerMock.mockReturnValue({
                viewState: {isLoading: false, data: {title: 'dummyTitle', body: 'dummyBody'}, error: null},
                onCreatePost: jest.fn(),
            }
        );
        render(<JsonPlaceHolderView controller={controllerMock}/>);
        const titleElem = screen.getByText('dummyTitle');
        const bodyElem = screen.getByText('dummyBody');

        expect(titleElem).toBeInTheDocument();
        expect(bodyElem).toBeInTheDocument();
    })
    test('Success create post', () => {
        let createPostMockFn = jest.fn()
        controllerMock.mockReturnValue({
                viewState: {isLoading: false, data: {title: 'dummyTitle', body: 'dummyBody'}, error: null},
                onCreatePost: createPostMockFn,
            }
        );
        render(<JsonPlaceHolderView controller={controllerMock}/>);
        const buttonElem = screen.getByText(/Create Post/i);

        fireEvent.click(buttonElem);
        expect(createPostMockFn).toHaveBeenCalledTimes(1);
    })

    test('Can not create post when data is empty', () => {
        controllerMock.mockReturnValue({
                viewState: {isLoading: false, data: null, error: null},
                onCreatePost: jest.fn(),
            }
        );
        render(<JsonPlaceHolderView controller={controllerMock}/>);
        const emptyLabelElem = screen.queryByText(/Empty/i);
        const buttonElem = screen.queryByText(/Create Post/i);
        expect(buttonElem).toBeNull();
        expect(emptyLabelElem).toBeInTheDocument();
    })
});
