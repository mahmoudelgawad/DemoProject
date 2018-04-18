export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return state.payload;
    }

    return state;
}