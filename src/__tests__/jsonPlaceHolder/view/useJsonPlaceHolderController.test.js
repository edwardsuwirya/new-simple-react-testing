import useJsonPlaceHolderController from "../../../features/jsonPlaceHolder/views/useJsonPlaceHolderController";

const mockCreatePost = jest.fn();
const mockGetPost = jest.fn();
jest.mock('../../shared/depContext', () => ({
    useDeps: () => ({
        apiClient: jest.fn,
        services: {
            loginService: jest.fn(),
            jsonPlaceHolderService: jest.fn().mockReturnValue({
                getPostById: mockGetPost,
                createPost: mockCreatePost,
            })
        }
    })
}));
const mockSetData = jest.fn();
const mockSetError = jest.fn();
jest.mock('../../shared/hook/useViewState', () => (
    () => ([
        {isLoading: false, data: null, error: null}, jest.fn(), mockSetData, mockSetError
    ])
))
// Alternatif
// jest.mock("react-redux", () => ({
//     ...jest.requireActual("react-redux"),
//     useDispatch: jest.fn(),
// }));
const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch
}));
jest.mock('react', () => ({
    useEffect: jest.fn()
}))

describe('JsonPlaceHolder Controller', () => {
    test('Success onCreatePost', async () => {
        mockCreatePost.mockResolvedValue('123')
        const controller = useJsonPlaceHolderController();
        await controller.onCreatePost('dummy 1', 'dummy 2');
        expect(mockSetData).toHaveBeenNthCalledWith(1, '123');
        expect(mockDispatch).toBeCalledTimes(1);
    });
    test('Failed onCreatePost', async () => {
        mockCreatePost.mockRejectedValue('error')
        const controller = useJsonPlaceHolderController();
        await controller.onCreatePost('dummy 1', 'dummy 2')
        expect(mockSetError).toHaveBeenNthCalledWith(1, 'error')
    });
    test('Success onGetPost', async () => {
        mockGetPost.mockResolvedValue('dummy data');
        const controller = useJsonPlaceHolderController();
        await controller.onGetPost();
        expect(mockSetData).toHaveBeenNthCalledWith(1, 'dummy data');
    });
    test('Failed onGetPost', async () => {
        mockGetPost.mockRejectedValue('error');
        const controller = useJsonPlaceHolderController();
        await controller.onGetPost();
        expect(mockSetError).toHaveBeenNthCalledWith(1, 'error')
    });
});
