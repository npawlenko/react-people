import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
    id?: number;
    name: string;
    birthday: string;
    memoir?: string;
}

const initialState: User[] = [];

let previousId = 1;

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state: User[], action: PayloadAction<User>) => {
            state.push({
                id: previousId++,
                ...action.payload
            });
        },
        removeUser: (state: User[], action: PayloadAction<User | number> ) => {
            const payload = action.payload;
            let idx = -1;
            if(typeof payload === "number") {
                const id = payload as number;
                idx = state.findIndex(user1 => user1.id === id);
            }
            else {
                const user = payload as User;
                idx = state.findIndex(user1 => user1.id === user.id);
            }

            if (idx === -1)
                return;
            state.splice(idx, 1);
        },
        editUser: (state: User[], action: PayloadAction<User>) => {
            const user = action.payload;
            const idx = state.findIndex(user1 => user1.id === user.id);
            if (idx === -1)
                return;

            state[idx] = user;
        }
    }
})

export const { addUser, removeUser, editUser } = usersSlice.actions

export default usersSlice.reducer