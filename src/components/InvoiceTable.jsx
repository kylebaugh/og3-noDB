import './InvoiceTable.css';

// import ModeButtons from './ModeButtons.jsx';
// import Description from './Description.jsx';
// import Hours from './Hours.jsx';
// import Rate from './Rate.jsx';
import TableHeader from './TableHeader';
import AddButton from './AddButton';
import TableRow from './TableRow';


const InvoiceTable = ({initialInvoiceList}) => {

    const rows = initialInvoiceList.map((invoiceItem) => {

        const {id, description, rate, hours} = invoiceItem

        return (
            <TableRow
                key={id}
                initialInvoiceData={{description: description, rate: rate, hours: hours}}
                initialIsEditing={false}
            />
        )

    })

  return (
    <div>
        <table>
            <thead>
                <TableHeader />
            </thead>
            <tbody>

                {rows}

                {/* <TableRow
                    initialInvoiceData={{description: 'Janitor', rate: 50, hours: 40}}
                    initialIsEditing={false}
                />
                <TableRow
                    initialInvoiceData={{description: 'Space Janitor', rate: 5000, hours: 404}}
                    initialIsEditing={true}
                /> */}

                {/* <tr>
                    <ModeButtons isEditing={false}/>
                    <Description isEditing={false} value='Web Developer'/>
                    <Rate isEditing={false} value={50}/>
                    <Hours isEditing={false} value={40}/>
                </tr>
                <tr>
                    <ModeButtons isEditing={true}/>
                    <Description isEditing={true} value='Zookeeper'/>
                    <Rate isEditing={true} value={1000000}/>
                    <Hours isEditing={true} value={5}/>
                </tr> */}
            </tbody>
            <tfoot>
                <AddButton />
            </tfoot>
        </table>
    </div>
  )
}

export default InvoiceTable