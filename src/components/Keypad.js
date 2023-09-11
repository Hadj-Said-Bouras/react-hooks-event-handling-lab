// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <input type="password" placeholder="Put your weak passowrd here" onChange={() => { console.log('Entering password...')}}/>
        </div>
    )
}

export default Keypad;