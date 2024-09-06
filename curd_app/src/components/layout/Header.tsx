import { FC } from 'react';
import logo from '../../assets/contacts-svgrepo-com.svg'
type Props = {
    title: string;
}

const Header: FC<Props> = ({ title }) => {
    return (
        <div className='flex items-center bg-blue-600 text-white p-3 shadow-md'>
            <img className='w-10 h-10 mr-4' src={logo} alt="logo" />
            <h1 className='text-2xl'>{title}</h1>
        </div>

    );
};

export default Header;