
import { StateSchema } from "app/provider/StoreProvider"
import { getCounter } from "../getCounter/getCounter"

describe('getCounterValue',()=>{
    test('',()=>{
        const state: DeepPartial<StateSchema> ={
            counter:{value :10 }
        }
        expect(getCounter(state as StateSchema)).toEqual(10)
    })
})