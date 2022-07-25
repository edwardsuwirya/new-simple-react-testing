import reducer, {addPost} from '../../../features/jsonPlaceHolder/state/jsonPlaceHolderSlice';

describe('JsonPlaceHolder Slice', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, {type: undefined})).toEqual({
            postings: [],
        })
    });
    test('should handle post added to an empty list', () => {
        const previousState = {
            postings: [],
        };
        expect(reducer(previousState, addPost('dummy post'))).toEqual({
            postings: ['dummy post'],
        })
    })
    test('should handle post added to an existing list', () => {
        const previousState = {
            postings: ['prev dummy post'],
        }

        expect(reducer(previousState, addPost('dummy post 2'))).toEqual(
            {
                postings: ['prev dummy post', 'dummy post 2'],
            }
        )
    })
});
