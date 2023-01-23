import {useState} from 'react'
import cards from './helpers/cards.js'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'


const FlashCards = () => {
    const [cardNum, setCardNum] = useState(1)
    const [sectionNum, setSectionNum] = useState(1)
    const [termsNum, setTermNum] = useState(1)
    const sections = Object.keys(cards)
    const terms = Object.keys(cards[sections[sectionNum]])

    const nextCard = () => {
        setTermNum(termsNum+1)
    }
    const previousCard = () => {
        setTermNum(termsNum-1)
    }

    return (
        <>
            <h1>Flashcards</h1>
            <h2>{sections[sectionNum]}</h2>
            <Row>
                <Col>
                    <Card>
                        <Card.Title>{terms[termsNum]}</Card.Title>
                        <Card.Body>
                            <Card.Text>
                                {cards[sections[sectionNum]][terms[termsNum]]}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ButtonGroup>
                <Button onClick={previousCard}>Previous</Button>
                <Button onClick={nextCard}>Next</Button>
            </ButtonGroup>
        </>
    )
}

export default FlashCards