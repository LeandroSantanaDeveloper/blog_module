import { useState } from 'react';

const useDelete = () => {
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteResource = async (id) => {
        setIsDeleting(true);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete resource');
            }

            const resp = await response.json()
            return resp; 
        } catch (error) {
            console.error('Error deleting resource:', error);
            throw error;
        } finally {
            setIsDeleting(false);
        }
    };

    return { deleteResource, isDeleting };
};

export default useDelete;
