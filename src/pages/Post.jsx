import { Link, useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { apiUrl } from "../../config"
import useDelete from "../hooks/useDelete"


const Post = () => {

    const {id} = useParams()
    const data = useFetch(`${apiUrl}/${id}`)
    const navigate = useNavigate()

    const {deleteResource} = useDelete()

    const handleDelete = async () => {
        const data =  await deleteResource(id)
        console.log(data)
        navigate('/')
    }

    return (
        <>
            <h1>Post </h1>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <Link to={`/posts/${id}/edit`}>
                <button>Editar</button>
            </Link>
            <button onClick={handleDelete}>Deletar</button>

        </>
    )
}

export default Post