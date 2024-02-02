import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePost from '../hooks/usePost';
import '../styles/new-post.sass'
const NewPost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();
    const postData = usePost(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        const post = {
            title,
            body,
            userId: 1
        };

        const data = await postData(post)
        console.log(data)
        setBody('');
        setTitle('');
        navigate('/');
    };

    return (
        <div className="new-post">
            <h1>Inserir novo Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="title">Título:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Digite um título"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="body">Conteúdo:</label>
                    <textarea
                        name="body"
                        id="body"
                        placeholder="Digite o conteúdo"
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                        required
                    ></textarea>
                    <input
                        type="submit"
                        value={'Criar post'}
                        className="btn"
                    />
                </div>
            </form>
        </div>
    );
};

export default NewPost;
