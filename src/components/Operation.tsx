import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { deposit, withdraw } from '../features/slices/balanceSlice';
import { fetchQuote } from '../actions/quoteAction';

const Operation = () => {
    const [sum, setSum] = useState(1);
    const dispatch = useAppDispatch();

    return (
        <>
            <div className='d-flex justify-content-center'>
                <button
                    className='btn btn-primary btn-lg'
                    onClick={() => dispatch(withdraw(sum))}
                >Withdraw</button>
                <input
                    className='form-control-lg text-center'
                    type='number'
                    onChange={e => setSum(+e.target.value)}
                    min={0}
                    value={sum}
                />
                <button
                    className='btn btn-primary btn-lg'
                    onClick={() => dispatch(deposit(sum))}
                >Deposit</button>
            </div>
            <div className='d-flex justify-content-center'>
                <button
                    className='btn btn-info btn-lg'
                    onClick={() => dispatch(fetchQuote())}
                >Get Quote</button>
            </div>
        </>
    )
}

export default Operation