

const Screen = ({value , expression}) => {
    return (
        <div id="display">
            <div className="expr">{expression}</div>
            <div className="value">{value}</div>
        </div>
    )
}

export default Screen