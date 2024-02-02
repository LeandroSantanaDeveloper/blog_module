import { Link } from "react-router-dom";
import '../styles/home.css'
import useFetch from "../hooks/useFetch";
import { apiUrl } from "../../config";


const Home = () => {

    const data = useFetch(apiUrl);

    return (
        <div className="home">
            <h1>Últimos posts</h1>
            {data.map((item) => (
                <div className="post" key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                    <Link to={`/posts/${item.id}`} className="btn">Ler mais</Link>
                </div>
            ))}
        </div>
    );
};

export default Home;
