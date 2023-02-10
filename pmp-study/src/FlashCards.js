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
    const termSections = Object.keys(cards)
    const terms = Object.keys(cards[termSections[sectionNum]])

    const nextCard = () => {
        setTermNum(termsNum+1)
    }
    const previousCard = () => {
        setTermNum(termsNum-1)
    }

    console.log('Sections === ',termSections)

    return (
        <>
            <h1>Flashcards</h1>
            <h2>{termSections[sectionNum]}</h2>
            <select>
            {termSections.map(t => <option value={t}>{t}</option>)}
            </select>
            <Row>
                <Col>
                    <Card>
                        <Card.Title>{terms[termsNum]}</Card.Title>
                        <Card.Body>
                            <Card.Text>
                                {cards[termSections[sectionNum]][terms[termsNum]]}
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