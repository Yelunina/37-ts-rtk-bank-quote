import { useAppSelector } from "../app/hooks"

const Balance = () => {
  const balance = useAppSelector(state => state.balance);
  const quote = useAppSelector(state => state.quote);

  return (
    <div className="text-center text-uppercase">
      <h1>Iron Bank of Braavos</h1>
      <h3><q>{quote}</q></h3>
      <h2>Balance = {balance}</h2>
    </div>
  )
}

export default Balance