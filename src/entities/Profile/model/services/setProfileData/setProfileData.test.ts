import { UserActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { setProfileData } from './setProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileValidationErrors } from '../../types/profile';
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
describe('setProfileData.test', () => {

    test('success login', async () => {


        const thunk = new TestAsyncThunk(setProfileData,{
            profile:{
                form:data
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: data }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toBeCalled();
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    });

    test('error validation', async () => {
        const thunk = new TestAsyncThunk(setProfileData,{
            profile:{
                form:data
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 400 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected')
    });

    test('error serv', async () => {
        const thunk = new TestAsyncThunk(setProfileData,{
            profile:{
                form:{...data, lastname:""}
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 400 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ProfileValidationErrors.INCORRECT_FIRST_NAME_OR_LAST_NAME])
    });
});
