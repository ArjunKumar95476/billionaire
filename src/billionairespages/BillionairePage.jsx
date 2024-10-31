import image from '../assets/myfavcar.png'
export default function BillionairePage() {
    return <>
        <div className='container '>
            <div className="card text-dark bg-white border-0">
                <img src={image} className="card-img" alt="..." style={{ maxHeight: '80vh', textAlign: 'center' }} />
                <div className="card-img-overlay">
                    <h1 className="card-title">Billionaire 💸</h1>
                    <p className="card-text">
                        <b>A billionaire is a person with a net wealth of a billion dollars, or $1,000,000,000</b>
                        <br />
                    </p>
                    <p className='card-text'>
                        <q>
                            If you want to make a permanent change, stop focusing on the size of your problems and start focusing on the size of you!
                        </q>
                    </p>
                </div>
            </div>
        </div>
    </>
}