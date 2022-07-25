import AppRouter from "../../../navigation/AppRouter";
import {memoryRouterRender} from "../../../shared/utils/testUtils";
import {store} from "../../../store";
import {screen} from "@testing-library/react";
import {useAuth} from "../../../shared/hook/useAuth";

jest.mock('../../../shared/hook/useAuth', () => ({
    useAuth: jest.fn()
}));
describe('JsonPlaceHolder Router', () => {
    test('should show the correct view page', () => {
        useAuth.mockReturnValue({userInfo: 'dummy user'});
        const viewRouter = '/main/jsonplaceholder';
        memoryRouterRender(<AppRouter/>, store, viewRouter);
        const titleElem = screen.getByText(/Dashboard/)
        expect(titleElem).toBeInTheDocument()
    });
    test('should redirect to login page when userInfo is null', () => {
        useAuth.mockReturnValue({userInfo: null});
        const viewRouter = '/main/jsonplaceholder';
        memoryRouterRender(<AppRouter/>, store, viewRouter);
        const titleElem = screen.getByText(/Login/)
        expect(titleElem).toBeInTheDocument()
    });
    test('should show the correct List page', () => {
        useAuth.mockReturnValue({userInfo: 'dummy user'});
        const viewRouter = '/main/jsonplaceholderList';
        memoryRouterRender(<AppRouter/>, store, viewRouter);
        const listElem = screen.getByRole('list')
        expect(listElem).toBeInTheDocument()
    });
});
