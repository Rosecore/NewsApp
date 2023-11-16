import { UserActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { FetchProfileData } from './fetchProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
const data = {
    first: "Masha",
    lastname: "Reynsvortdfsdf",
    age: 223,
    currency: Currency.DIN,
    country: Country.SR,
    city: "Beograde",
    username: "admin",
    avatar: "https://ru.myanimeshelf.com/upload/dynamic/2011-04/05/sbddb2.jpg"
}
describe('FetchProfileData.test', () => {

    test('success login', async () => {
        const userValue = { username: '123', id: 1 };

        const thunk = new TestAsyncThunk(FetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: data }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toBeCalled();
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(FetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected')
    });
});
