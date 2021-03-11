import { EUser } from './types';

const initialState = {
    byId: {
        '': {
            id: '',
            name: '',
            date: '',
            email: '',
            phone: '',
            status: '',
            totaltasks: 0,
        },
    },
    allIds: [],
    selectedUserId: '',
};
// const initialState = null;

const userReducer = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case EUser.USERSELECTED:
            return { ...state, selectedUserId: action.payload };
        case EUser.USERSDATARECIEVED:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default userReducer;
