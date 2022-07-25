import {postSelector} from "../../../features/jsonPlaceHolder/state/jsonPlaceHolderSelector";

describe('JsonPlaceHolder Selector', () => {
    test('should return the correct state', () => {
        const previousState = {
            jsonPlaceHolder: {
                postings: ['prev dummy post'],
            }
        }
        expect(postSelector(previousState)).toEqual(
            ['prev dummy post'],
        );
    });

});
