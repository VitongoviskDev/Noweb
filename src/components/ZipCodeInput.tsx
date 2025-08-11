import React from 'react';
import type { DefaultProps } from '../util/DefaultProps';

interface ZipCodeInputProps extends DefaultProps {
    zipCode: string;
    setZipCode: (zipCode: string) => void;
    onChange?: () => void;
}

const ZipCodeInput: React.FC<ZipCodeInputProps> = ({ zipCode, setZipCode, className, onChange }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange();
        
        let value = e.target.value.replace(/\D/g, "");

        if (value.length > 5) {
            value = value.slice(0, 5) + "-" + value.slice(5);
        }

        setZipCode(value);
    };
    
    return (
        <div className='flex flex-col w-full'>
            <label htmlFor="field_zipcode">CEP</label>
            <div className={`flex items-center gap-1 ${className}`}>
                <input
                    id="zipcode"
                    name='field_zipcode'
                    type="text"
                    inputMode="numeric"
                    pattern="\d{5}-\d{3}"
                    placeholder="00000-000"
                    value={zipCode}
                    maxLength={9}
                    onChange={handleChange}
                    className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent w-full"
                />
            </div>
        </div>
    );
};

export default ZipCodeInput;
