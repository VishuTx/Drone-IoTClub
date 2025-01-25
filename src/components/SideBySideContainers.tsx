import React from 'react';

const SideBySideContainers = () => {
    return (
        <div className="flex space-x-4">
            <div className="w-1/2 p-4 bg-gray-200 border border-gray-300 rounded">
                <h2 className="text-lg font-bold">Container 1</h2>
                <p>Content for Container 1</p>
            </div>
            <div className="w-1/2 p-4 bg-gray-200 border border-gray-300 rounded">
                <h2 className="text-lg font-bold">Container 2</h2>
                <p>Content for Container 2</p>
            </div>
        </div>
    );
};

export default SideBySideContainers;
