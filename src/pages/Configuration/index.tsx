import React from 'react';
import SpendingType from './components/SpendingType';
import SpendingMethod from './components/SpendingMethod';

const ConfigurationPage: React.FC = () => {
    return (
        <div className="mt-4 w-full">
            <div className="grid lg:grid-cols-2 lg:gap-x-4 gap-y-4 lg:gap-y-0">
                <SpendingType data={[]} />
                <SpendingMethod data={[]} />
            </div>
        </div>
    );
};

export default ConfigurationPage;
