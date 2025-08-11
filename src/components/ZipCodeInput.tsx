import React from 'react';

interface ZipCodeInputProps {
    zipCode: string;
    setZipCode: (zipCode: string) => void;
}

const ZipCodeInput: React.FC<ZipCodeInputProps> = ({ zipCode, setZipCode }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //Replace number with empty string
        let value = e.target.value.replace(/\D/g, "");

        //Add "-" after 5º digit
        if (value.length > 5) {
            value = value.slice(0, 5) + "-" + value.slice(5);
        }

        setZipCode(value);
    };

    return (
        <div className="flex flex-col gap-1">
            <input
                id="zipcode"
                type="text"
                inputMode="numeric"
                pattern="\d{5}-\d{3}"
                placeholder="00000-000"
                value={zipCode}
                maxLength={9}
                onChange={handleChange}
                className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            />
        </div>
    );
};

export default ZipCodeInput;
