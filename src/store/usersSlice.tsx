import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
    id: number,
    name: string,
    age: number,
    birthDate: Date,
    memoir: string,
}

const initialState: User[] = [];

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state: User[], action: PayloadAction<User>) => {
            state.push(action.payload);
        },
        removeUser: (state: User[], action: PayloadAction<User | number> ) => {
            const payload = action.payload;
            let idx = -1;
            if (typeof payload === "number") {
                const userId = payload as number;
                idx = state.findIndex(user1 => user1.id === userId);
            } else {
                const user = payload as User;
                idx = state.findIndex(user1 => user1.id === user.id);
            }

            if (idx === -1)
                return;
            
            state.splice(idx, 1);
        },
    }
})

export const { addUser, removeUser } = usersSlice.actions

export default usersSlice.reducer