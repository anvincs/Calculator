

const Button = ({bid, symbol, handleClick}) => {

    const operators = ['+', '-', '*', '/']
    const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.']

    return (
        <button id={bid} value={symbol} onClick={() => {handleClick(symbol, operators, digits)}}>
            {symbol}
        </button>
    )
}

export default Button