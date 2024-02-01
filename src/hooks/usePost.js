const usePost = () => {

    const postData = async (data) => {
        try {
            const request = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!request.ok) {
                throw new Error('Failed to post data');
            }

            const response = await request.json();
            return response;
        } catch (error) {
            alert(error);
        }
    };

    return postData

};

export default usePost;
