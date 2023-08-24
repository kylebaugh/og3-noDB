import './InvoiceTable.css';

// import ModeButtons from './ModeButtons.jsx';
// import Description from './Description.jsx';
// import Hours from './Hours.jsx';
// import Rate from './Rate.jsx';
import TableHeader from './TableHeader';
import AddButton from './AddButton';
import TableRow from './TableRow';
import {useState} from 'react'

let globalId = 5

const InvoiceTable = ({initialInvoiceList}) => {

    const [currentList, setCurrentList] = useState(initialInvoiceList)

    const addRow = () => {
        // get a copy of the current list
        // create a new "blank" object for new row
        // push new object into my copied list
        // update list state with the new version of the list

        const newInvoiceList = [...currentList]
        const newRow = {
            id: globalId,
            description: 'Description',
            rate: '',
            hours: ''
        }

        newInvoiceList.push(newRow)

        setCurrentList(newInvoiceList)

        globalId++
    }

    const deleteRow = (id) => {
        const filteredList = currentList.filter(el => el.id !== id)

        setCurrentList(filteredList)
    }


    const rows = currentList.map((invoiceItem) => {

        const {id, description, rate, hours} = invoiceItem

        return (
            <TableRow
                key={id}
                initialInvoiceData={{description: description, rate: rate, hours: hours}}
                initialIsEditing={false}
                deleteFunc={() => deleteRow(id)}
            />
        )
    })

    console.log(rows)

  return (
    <div>
        <table>
            <thead>
                <TableHeader />
            </thead>
            <tbody>

                {rows}

            </tbody>
            <tfoot>
                <AddButton addClick={addRow}/>
            </tfoot>
        </table>
    </div>
  )
}

export default InvoiceTable