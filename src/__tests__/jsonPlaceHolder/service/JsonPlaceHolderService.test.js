import jsonPlaceHolderService from "../../../services/jsonPlaceHolderService/jsonPlaceHolderService";

describe('JsonPlaceHolder Service', () => {
    let service;
    let mockDoGet = jest.fn();
    let mockDoPost = jest.fn();

    beforeAll(() => {
        const mockJsonPlaceHolderClient = jest.fn().mockReturnValue({
            doGet: mockDoGet,
            doPost: mockDoPost
        })
        service = jsonPlaceHolderService(mockJsonPlaceHolderClient())
    });
    test('Success getPostById', async () => {
        mockDoGet.mockResolvedValue({
            data: {title: 'dummy id', body: 'dummy 2'}
        })
        // const response = await service.getPostById('1')
        // expect(response.data).toEqual(
        //     {title: 'dummy id', body: 'dummy 2'},
        // );
        await expect(service.getPostById('1')).resolves.toEqual({
                data: {title: 'dummy id', body: 'dummy 2'}
            }
        );
    });
    test('Failed getPostById', async () => {
        mockDoGet.mockRejectedValue('error');
        await expect(service.getPostById('1')).rejects.toThrow('error')
    });
    test('Success createPost', async () => {
        mockDoPost.mockResolvedValue({
            data: {title: 'dummy id', body: 'dummy 2'}
        })
        await expect(service.createPost('dummy 1', 'dummy 2')).resolves.toEqual({
                data: {title: 'dummy id', body: 'dummy 2'}
            }
        );
    });
    test('Failed createPost', async () => {
        mockDoPost.mockRejectedValue('error');
        await expect(service.createPost('dummy 1', 'dummy 2')).rejects.toThrow('error')
    });
});
