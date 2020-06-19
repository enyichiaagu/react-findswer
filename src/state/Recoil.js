import { atom, selector } from 'recoil';

export const GlobalLoader = atom({
    key: 'GLOBAL_LOADER',
    default: false
})
export const SELECT_GlobalLoader = selector({
    key: 'GLOBAL_LOADER_STATE',
    get: ({ get }) => {
        const loaderState = get(GlobalLoader);
        return loaderState;
    }
})