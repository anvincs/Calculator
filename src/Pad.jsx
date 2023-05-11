import Button from "./Button"

const Pad = ({buttons, handleClick}) => {
    return (
        <div id="pad">
            {
                buttons.map(button => {
                    return (
                        <Button 
                        key={button.id}
                        bid={button.id}
                        symbol={button.symbol}
                        handleClick = {handleClick}
                        />
                    )
                })
            }
        </div>
    )
}

export default Pad