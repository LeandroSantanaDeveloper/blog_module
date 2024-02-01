import { useState } from 'react';

const useUpdatePost = () => {
    const [isUpdating, setIsUpdating] = useState(false);

    const updatePost = async (id, data) => {
        setIsUpdating(true);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'PUT', // ou 'PATCH', dependendo da API
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Failed to update post');
            }

            const updatedPost = await response.json();
            return updatedPost;
        } catch (error) {
            console.error('Error updating post:', error);
            throw error;
        } finally {
            setIsUpdating(false);
        }
    };

    return { updatePost, isUpdating };
};

export default useUpdatePost;
