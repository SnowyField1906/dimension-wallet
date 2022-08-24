import useState, { useEffect } from 'react'

function Admin(props) {
    const [addCard, setAddCard] = useState(props.addCard)

    useEffect(() => {
        props.addCard = addCard;
    } , [addCard])


    const handleChange = (e) => {
        setAddCard({...addCard, [e.target.name]: e.target.value})
    }

    return (
        <div className='grid h-full'>
            <input type="text" name="name" value={addCard.name} onChange={handleChange} />
            <input type="text" name="price" value={addCard.price} onChange={handleChange} />
        </div>
    )
}

export default Admin
