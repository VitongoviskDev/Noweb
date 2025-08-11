import React, { useEffect, useState, type ButtonHTMLAttributes } from 'react';
import ZipCodeInput from './ZipCodeInput';
import { IoClose, IoSearchOutline } from 'react-icons/io5';
import axios from 'axios';
import type { ZipCodeDTO } from '../dto/ZipCodeDTO';

interface ZipCodeModalProps {
    onCloseModal: () => void;
}

const ZipCodeModal: React.FC<ZipCodeModalProps> = ({ onCloseModal }) => {

    const [zipCode, setZipCode] = useState<string>('');
    const [responseData, setResponseData] = useState<ZipCodeDTO | null>(null);

    const handleOnCloseModal = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (onCloseModal != null) {
            onCloseModal();
        }
    }

    useEffect(() => {
        document.body.classList.add('lock-scroll');
        return () => {
            document.body.classList.remove('lock-scroll'); // ✅ only runs when component unmounts
        };
    }, []);

    const fetchZipCodeApi = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const zip = zipCode.replace('-', '');
        const response = await axios.get(`https://viacep.com.br/ws/${zip}/json/`);
        setResponseData(response.data)
    }

    return (
        <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-black/60">
            <div className={`
                    relative flex flex-col items-center gap-4 bg-white p-4 rounded-lg w-72 transition-all duration-300 ease-in-out
                    ${responseData ? 'h-72 w-fit max-w-xl' : 'h-28'}
                `}>
                <button
                    className='absolute top-2 right-2 text-2xl'
                    onClick={(e) => handleOnCloseModal(e)}>
                    <IoClose />
                </button>
                <div className='w-fit'>
                    <label htmlFor="zipcode" className="text-sm font-medium text-gray-700">
                        CEP:
                    </label>
                    <div className='flex items-center gap-2'>
                        <ZipCodeInput zipCode={zipCode} setZipCode={setZipCode} />
                        <button className='flex justify-center items-center bg-accent h-10 w-10 rounded-lg' onClick={(e) => { fetchZipCodeApi(e) }}><IoSearchOutline /></button>
                    </div>
                </div>
                <div className={`${responseData ? 'flex' : 'hidden'} flex-col justify-between h-full w-full`}>
                    <p>LOGRADOURO: {responseData?.logradouro}</p>
                    <p>COMPLEMENTO: {responseData?.complemento}</p>
                    <p>BAIRRO: {responseData?.bairro}</p>
                    <p>UF: {responseData?.uf}</p>
                    <p>ESTADO: {responseData?.estado}</p>
                </div>
            </div>
        </div>
    );
};

export default ZipCodeModal;
