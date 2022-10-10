import { useReducer } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { developer } from "./Developer";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DeveloperData () {
    const [ developers, dispatch ] = useReducer( developer, [] );

    const handleSubmit = ( event ) => {
        event.preventDefault();
        const name = event.target.name.value;
        const favProgLanguages = event.target.favProgLanguages.value;
        const favTech = event.target.favTech.value;
        const favFood = event.target.favFood.value;
        const favDrink = event.target.favDrink.value;
        dispatch( {
            type: 'ADD_Developer',
            payload: {
                name: name,
                favProgLanguages: favProgLanguages,
                favTech: favTech,
                favFood: favFood,
                favDrink: favDrink
            }
        } );
    };

    const handleDelete = ( e, id ) => {
        e.preventDefault();
        dispatch( {
            type: 'DELETE_Developer',
            payload: id
        } );
    };
    return (
        <>
          <h1>Developer Information</h1>
            <Card style={{ width: '22rem', justifyContent: 'center', display: 'flex', margin: '10px auto',color:'brown',backgroundColor:'bisque'}}>
                <Card.Header>Developers</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="favProgLanguages">
                            <Form.Label>Favorite Programming Languages</Form.Label>
                            <Form.Select aria-label="favProgLanguages">
                                <option>.net</option>
                                <option>javaScript</option>
                                <option>python</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="favTech">
                            <Form.Label>Favorite Tech</Form.Label>
                            <Form.Select aria-label="favTech">
                                <option>React.js</option>
                                <option>Node.js</option>
                                <option>Express.js</option>
                                <option>MongoDB</option>
                              
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="favFood">
                            <Form.Label>Favorite food</Form.Label>
                            <Form.Control required type="text" placeholder="Enter your favorite food" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="favDrink">
                            <Form.Label>Favorite drink</Form.Label>
                            <Form.Control required type="text" placeholder="Enter your favorite drink" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <section>
                <Row xs={2} md={3} className="g-4">
                    {developers.length ? developers.map( ( developer ) => (
                        <Col key={developer.id}>
                            <Card style={{ width: '20rem', justifyContent: 'center', display: 'flex', margin: '10px auto' }}>
                                <Card.Body>
                                    <Card.Title>
                                        {developer.name}
                                    </Card.Title>
                                    <Card.Text>
                                        Favorite Programming Languages: {developer.favProgLanguages}<br />
                                        Favorite Technologies: {developer.favTech}<br />
                                        Favorite food: {developer.favFood}<br />
                                        Favorite drink: {developer.favDrink}
                                    </Card.Text>
                                    <Button variant="danger" onClick={(e) => handleDelete(e, developer.id)}>Delete Developer Information</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ) ) : <h3>No developers till now</h3>}
                </Row>
            </section>
        </>
    );
}

export default DeveloperData