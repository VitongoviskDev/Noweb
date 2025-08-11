import React from 'react'
import type { DefaultProps } from '../util/DefaultProps';

interface TextInputFieldProps extends DefaultProps {
    label: string;
    placeholder: string;
    regex?: string;
    blockEdition?: boolean;
    value: string;
    onChange: (value: string) => void;
}

const TextInputField: React.FC<TextInputFieldProps> = ({ label, placeholder, regex, blockEdition = false, value, onChange, className }) => {
    return (
        <div className={`flex flex-col ${className || ''}`}>
            <label htmlFor={`field_${label}`}>{label}</label>
            <input
                id={`field_${label}`}
                type="text"
                name={`field_${label}`}
                pattern={regex}
                placeholder={placeholder}
                disabled={blockEdition}
                className={`
                        w-full outline-none placeholder-black/30 px-4 py-2
                        ring-2 ring-gray-300 focus:ring-accent rounded-md
                        ${blockEdition ? 'cursor-not-allowed bg-gray-100' : 'cursor-text bg-white'}
                    `}
                value={value}
                onChange={(e) => !blockEdition && onChange?.(e.target.value)}
            />
        </div>
    );
};

export default TextInputField;
