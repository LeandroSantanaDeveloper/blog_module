import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { apiUrl } from "../../config";
import { useEffect, useState } from "react";
import useUpdatePost from "../hooks/useUpdatePost ";

const EditPost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
    const fetchedData = useFetch(`${apiUrl}/${id}`);
    const { updatePost } = useUpdatePost();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            title,
            body,
            userId: 1
        };

        updatePost(id, data);

        setBody('');
        setTitle('');
        navigate('/');
    };

    useEffect(() => {
        if (fetchedData) {
            setTitle(fetchedData.title);
            setBody(fetchedData.body);
        }
    }, [fetchedData]);

    return (
        <div className="new-post">
            <h2>Editar Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="title">Título:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Digite um título"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title? title : ''}
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
                        value={body? body : ''}
                        required
                    ></textarea>
                    <input
                        type="submit"
                        value={'Salvar'}
                        className="btn"
                    />
                </div>
            </form>
        </div>
    );
};

export default EditPost;
