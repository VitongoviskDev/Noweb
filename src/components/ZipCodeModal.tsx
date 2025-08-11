import React, { useEffect, useState } from 'react';
import ZipCodeInput from './ZipCodeInput';
import { IoClose, IoSearchOutline } from 'react-icons/io5';
import axios from 'axios';
import type { ZipCodeDTO } from '../dto/ZipCodeDTO';
import TextInputField from './TextInputField';
import ScreenBlocker from './ScreenBlocker';

interface ZipCodeModalProps {
    onCloseModal: () => void;
}

const ZipCodeModal: React.FC<ZipCodeModalProps> = ({ onCloseModal }) => {
    const [zipCode, setZipCode] = useState<string>('');
    const [responseData, setResponseData] = useState<ZipCodeDTO>({
        bairro: '',
        cep: '',
        complemento: '',
        ddd: '',
        estado: '',
        gia: '',
        ibge: '',
        localidade: '',
        logradouro: '',
        regiao: '',
        siafi: '',
        uf: '',
        unidade: ''
    });
    const [filledFields, setFilledFields] = useState<string[]>([]);
    const [error, setError] = useState<string>('');

    const handleOnCloseModal = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onCloseModal?.();
    };

    const fetchZipCodeApi = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        localStorage.setItem('zipCode', zipCode);

        const zip = zipCode.replace('-', '');

        try {
            const response = await axios.get<ZipCodeDTO>(`https://viacep.com.br/ws/${zip}/json/`);

            if ((response.data as any).erro) {
                setError('CEP não encontrado.');
                return;
            }

            setResponseData(response.data);

            setFilledFields([
                ...(response.data.logradouro ? ['logradouro'] : []),
                ...(response.data.complemento ? ['complemento'] : []),
                ...(response.data.bairro ? ['bairro'] : []),
                ...(response.data.uf ? ['uf'] : []),
                ...(response.data.estado ? ['estado'] : [])
            ]);
        } catch (error) {
            setError('O cep digitado é inválido');
        }
    };

    useEffect(() => {
        const savedZip = localStorage.getItem('zipCode');
        if (savedZip) {
            setZipCode(savedZip);
        }
    }, []);


    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onCloseModal();

        alert("Dados enviados com sucesso!");
    }

    return (
        <ScreenBlocker>
            <div className="relative flex flex-col items-center gap-4 bg-white p-8 rounded-lg max-w-[80vw]">
                <button
                    className="absolute top-2 right-2 text-2xl"
                    onClick={handleOnCloseModal}
                >
                    <IoClose />
                </button>
                <form onSubmit={handleFormSubmit} className='flex flex-col gap-2 h-full w-full'>
                    <div className="flex items-end gap-2 w-full mb-4">
                        <ZipCodeInput zipCode={zipCode} setZipCode={setZipCode} className="flex-1" onChange={() => setError('')} />
                        <button type='button'
                            className="flex justify-center items-center bg-accent h-11 aspect-square rounded-lg"
                            onClick={fetchZipCodeApi}
                        >
                            <IoSearchOutline />
                        </button>
                    </div>
                    <TextInputField
                        value={responseData.logradouro}
                        onChange={(value) => setResponseData({ ...responseData, logradouro: value })}
                        label="Logradouro"
                        placeholder="Ex:. Av. Brigadeiro Luis Antonio"
                        blockEdition={filledFields.includes('logradouro')}
                    />

                    <TextInputField
                        value={responseData.complemento}
                        onChange={(value) => setResponseData({ ...responseData, complemento: value })}
                        label="Complemento"
                        placeholder="Ex: Apto 32"
                        blockEdition={filledFields.includes('complemento')}
                    />

                    <TextInputField
                        value={responseData.bairro}
                        onChange={(value) => setResponseData({ ...responseData, bairro: value })}
                        label="Bairro"
                        placeholder="Ex: Jardim Paulista"
                        blockEdition={filledFields.includes('bairro')}
                    />

                    <div className="flex items-center gap-2">
                        <TextInputField
                            value={responseData.uf}
                            onChange={(value) => setResponseData({ ...responseData, uf: value })}
                            className="w-1/3"
                            label="UF"
                            placeholder="Ex: SP"
                            blockEdition={filledFields.includes('uf')}
                        />
                        <TextInputField
                            value={responseData.estado}
                            onChange={(value) => setResponseData({ ...responseData, estado: value })}
                            className="w-full"
                            label="Estado"
                            placeholder="Ex: São Paulo"
                            blockEdition={filledFields.includes('estado')}
                        />
                    </div>
                    <div className='p-2 text-center mt-2'>
                        <p className='text-red-400 font-bold'>{error}</p>
                        <button type='submit' className='cursor-pointer bg-accent rounded-md p-2 text-md mt-4 w-full'>
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </ScreenBlocker >
    );
};

export default ZipCodeModal;
