import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const ExpandableSearchBox: React.FC = () => {
    const [expanded, setExpanded] = useState<boolean>(true);

    return (
        <div className="h-12 w-full max-w-[15rem] place-items-end">
            <div
                className={`
                    flex items-center gap-2 px-4 h-full ring ring-gray-600 transition-all duration-300
                    ${expanded ? 'w-full ' : 'w-12 cursor-pointer'}
                `}
                onClick={() => setExpanded(true)}
                onBlur={() => setExpanded(false)}
            >
                <label>
                    <IoSearchOutline className='' />
                </label>
                {expanded && (
                    <div className='w-full flex items-center'>
                        <input
                            type="text"
                            className="w-full outline-none"
                            autoFocus
                        />
                        <button className='h-full bg-accent px-2' onClick={handleClick}>Buscar</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExpandableSearchBox;
