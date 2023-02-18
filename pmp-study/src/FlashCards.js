import {useState} from 'react'
import cards from './helpers/cards.js'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import './FlashCards.css'


const FlashCards = () => {
    const [cardNum, setCardNum] = useState(1)
    const [sectionNum, setSectionNum] = useState(0)
    const [termsNum, setTermsNum] = useState(0)
    const [hideDef, setHideDef] = useState(false)
    const [termVisibilty, setTermVisibility] = useState(!hideDef)
    const termSections = Object.keys(cards)
    const terms = Object.keys(cards[termSections[sectionNum]])

    const nextCard = () => {
        if (hideDef && termVisibilty) setTermVisibility(!termVisibilty)
        if (!hideDef && !termVisibilty) setTermVisibility(!termVisibilty)
        termsNum === terms.length? setTermsNum(0) : setTermsNum(termsNum+1)
    }
    const previousCard = () => {
        if (hideDef && termVisibilty) setTermVisibility(!termVisibilty)
        if (!hideDef && !termVisibilty) setTermVisibility(!termVisibilty)
        termsNum === 0? setTermsNum(terms.length) :  setTermsNum(termsNum-1)
    }

    const handleDefinitionsClick = () => {
        
        // if (!hideDef && termVisibilty) setTermVisibility(!termVisibilty) 
        if (hideDef && termVisibilty) setHideDef(() => !hideDef)
        else if (!hideDef && !termVisibilty) setHideDef(() => !hideDef)
        else {
                setHideDef(() => !hideDef)
                setTermVisibility(!termVisibilty)
        }
    }

    const handleSelectChange = (e) => {
        // console.log(e.target.value)
        setSectionNum(e.target.value)
        setTermsNum(0)
    }

    // const handleShowTermClick = () => {
    //     setTermVisibility(!termVisibilty)
    // }

    // const getTermClassName = () => {
    //     if (termVisibilty) {
    //         return 'hide'
    //     } else  {return 'show'}
    // }
    // console.log('Sections === ',termSections)

    return (
        <>
            <h1>Flashcards</h1>
                {
                    hideDef === true? 
                        <Button className='definition-visibility-state-btn' onClick={handleDefinitionsClick}>Show Definitions</Button>
                            :
                        <Button className='definition-visibility-state-btn' onClick={handleDefinitionsClick}>Hide Definitions</Button>
                }
            {/* <h2>{termSections[sectionNum]}</h2> */}
            <select className='terms-category' onChange={handleSelectChange}>
                {termSections.map((t, idx) => <option value={idx}>{t}</option>)}
            </select>
            <Row>
                <Col>
                    <Card className='FlashCard'>
                        <Card.Title className='card-title'>{terms[termsNum]}</Card.Title>
                          

                        <Card.Body>
                            {/* <Card.Text> */}
                                {
                                    hideDef === true? 
                                        <>
                                            <Button className={`reveal-btn ${termVisibilty? 'hide' : 'show'}`} onClick={() => setTermVisibility(!termVisibilty)}>Reveal Definition</Button>
                                            <Card.Text className={termVisibilty? 'show' : 'hide'}>
                                                {cards[termSections[sectionNum]][terms[termsNum]]}
                                            </Card.Text>
                                        </>
                                            :
                                        <Card.Text className={termVisibilty? 'show' : 'hide'}>
                                            {cards[termSections[sectionNum]][terms[termsNum]]}
                                        </Card.Text>
                                }
                            {/* </Card.Text> */}
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