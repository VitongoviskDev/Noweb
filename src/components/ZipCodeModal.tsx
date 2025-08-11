import React, { useState } from 'react';
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

    const handleOnCloseModal = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onCloseModal?.();
    };

    const fetchZipCodeApi = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        
        const zip = zipCode.replace('-', '');
        const response = await axios.get<ZipCodeDTO>(`https://viacep.com.br/ws/${zip}/json/`);
        setResponseData(response.data);
        setFilledFields([]);
        setFilledFields([
            response.data.logradouro ? 'logradouro' : '',
            response.data.complemento ? 'complemento' : '',
            response.data.bairro ? 'bairro' : '',
            response.data.uf ? 'uf' : '',
            response.data.estado ? 'estado' : '',
        ])
    };

    return (
        <ScreenBlocker>
            <div className="relative flex flex-col items-center gap-4 bg-white p-8 rounded-lg">
                <button
                    className="absolute top-2 right-2 text-2xl"
                    onClick={handleOnCloseModal}
                >
                    <IoClose />
                </button>
                <div className="flex items-end gap-2 w-full">
                    <ZipCodeInput zipCode={zipCode} setZipCode={setZipCode} className="flex-1" />
                    <button
                        className="flex justify-center items-center bg-accent h-11 aspect-square rounded-lg"
                        onClick={fetchZipCodeApi}
                    >
                        <IoSearchOutline />
                    </button>
                </div>
                <div className="flex flex-col gap-2 h-full w-full mt-4">
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
                </div>
            </div>
        </ScreenBlocker>
    );
};

export default ZipCodeModal;
