import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
    id: null,
    name: '',
    email: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUser(state, action) {
            return {
                ...state,
                ...action.payload
            };
        },
        clearUser() {
            return initialUserState;
        }
    }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
