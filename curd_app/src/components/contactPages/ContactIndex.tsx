import Footer from '../layout/Footer'
import Header from '../layout/Header'
import AddContact from './AddContact'
import AddRandomContacts from './AddRandomContacts'
import FavirouteContact from './FavirouteContact'
import GeneralContact from './GeneralContact'
import RemoveContact from './RemoveContact'

const ContactIndex = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header title='Contact App' />
            <div className='grid grid-cols-2 py-3'>
            <AddRandomContacts />
            <RemoveContact />
            </div>
            <div className='grid grid-cols-1 gap-3'>
            <AddContact />
            <FavirouteContact />
            <GeneralContact />
            </div>

            <Footer />
        </div>
    )
}

export default ContactIndex
