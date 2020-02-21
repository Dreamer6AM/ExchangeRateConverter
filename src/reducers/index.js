const initialState = {
    isLoading: false,
    exchangeRateData: null,
    error: '',
    amount: null,
    firstCurrency: '',
    secondCurrency: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'FETCH_EXCHANGE_RATE':
            return{
                ...state,
                isLoading: true
            }
        case 'FETCH_DATA_SUCCESS':
            return{
                ...state,
                isLoading: false,
                exchangeRateData: action.payload
            }
        // case'FETCH_DATA_FAILED':
        //     return{
        //         ...state,
        //         isLoading: false,
        //         error: action.payload
        //     }
        case 'ADD_AMOUNT':
            return{
                ...state,
                amount: action.payload
            }
        case 'FIRST_CURRENCY':
            return{
                ...state,
                firstCurrency: action.payload
            }
        case 'SECOND_CURRENCY':
            return{
                ...state,
                secondCurrency: action.payload
            }
        
        default:
            return state;
    }
}
