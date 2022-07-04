import React, {useState} from 'react'

function Main({facts}) {

    return (
        <div className='main-container'>
            <h1>Fun Facts about React</h1>
            <ul id="mainReactFact">
                {
                facts.map((fact, index) => <li key={
                    index.toString()
                }>
                    {fact}</li>)
            } </ul>
        </div>
    )
}

const Count = (props) => {
    const [facts, setFacts] = useState([
        'Was first released in 2013',
        'Was originally created by Jordan Walke',
        'Has well over 100k stars on Github',
        'Is maintained by Facebook',
        'Power thousands of enterprise apps, including mobile apps'
    ])

    const [fact, setFact] = useState()

    const addFunFact = () => {
        setFacts(state => [
            ...state,
            fact
        ])
        setFact('')
    }

    return (
        <div>
            <Main facts={facts}/>
            <input type="text" id='inputField'
                onChange={
                    (e) => setFact(e.target.value)
                }
                value={fact}/>
            <br></br>
            <button style={
                    {marginTop: "5px"}
                }
                onClick={addFunFact}>
                Add React Facts
            </button>

        </div>
    )
}


export {
    Main,
    Count
}
