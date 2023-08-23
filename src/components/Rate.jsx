import formatCurrency from '../utils/formatCurrency.js'

const Rate = ({isEditing, value}) => {

    return isEditing ? (
        <td>
            <input type="text" value={value}/>
        </td>
    ) : (
        <td>{formatCurrency(value)}</td>
    )
}

export default Rate