import { Card } from "react-bootstrap";


const MovieItem=({movie})=>{
    return (
        <div className="col">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.Poster}/>
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Year}</Card.Text>
                    <Card.Text>{movie.Type}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieItem;