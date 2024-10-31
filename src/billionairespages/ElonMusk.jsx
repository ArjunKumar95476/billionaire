import image1 from '../assets/ElonMusk.png';
import './elonmusk.css'
export default function ElonMusk() {
    const billionaireName = "Elon Musk";
    return <>
        <div className="container">
            <div className='row muskbody my-5'>
                <div className='card-group'>
                    <div className="card muskcard">
                        <div className="card-body " style={{ boxShadow: '1px 1px 1px wheat,-1px -1px 1px wheat' }}>
                            <h5 className="card-title">Elon Musk</h5>
                            <span>CEO of Tesla Motors
                            </span>
                            <p className="card-text" >
                                Elon Musk cofounded seven companies, including electric car maker Tesla, rocket producer SpaceX and artificial intelligence startup xAI. He owns about 12% of Tesla excluding options, but has pledged more than half his shares as collateral for personal loans of up to $3.5 billion
                            </p>
                        </div>
                    </div>
                    <div className="card muskcard" >
                        <img src={image1} alt="" className='image' />
                    </div>
                </div>
            </div>
            <div className='row text-center my-5' style={{ boxShadow: '1px 2px 2px black,-1px -1px 2px black' }}><h2>About {billionaireName}</h2></div>
            <div className="row muskbody">

                <div className="card-group">
                    <div className="card muskcard">
                        <div className="list-group" id="list-tab" role="tablist" style={{ boxShadow: '0 2px 2px black,0 0 2px black' }}>
                            <a
                                className="list-group-item list-group-item-action active"
                                id="list-earlylife-list"
                                data-bs-toggle="list"
                                href="#list-earlylife"
                                role="tab"
                                aria-controls="list-earlylife"
                            >
                                Early Life
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-careerBegining-list"
                                data-bs-toggle="list"
                                href="#list-careerBegining"
                                role="tab"
                                aria-controls="list-careerBegining"
                            >
                                Career Begining
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-paypalAndXcom-list"
                                data-bs-toggle="list"
                                href="#list-paypalAndXcom"
                                role="tab"
                                aria-controls="list-paypalAndXcom"
                            >
                                Paypal And X.com
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-spaceX-list"
                                data-bs-toggle="list"
                                href="#list-spaceX"
                                role="tab"
                                aria-controls="list-spaceX"
                            >
                                SpaceX
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-tesla-list"
                                data-bs-toggle="list"
                                href="#list-tesla"
                                role="tab"
                                aria-controls="list-tesla"
                            >
                                Tesla,Inc.
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-solarAndenergy-list"
                                data-bs-toggle="list"
                                href="#list-solarAndenergy"
                                role="tab"
                                aria-controls="list-solarAndenergy"
                            >
                                Solar and Energy Ventures
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-boringComAndNeuro-list"
                                data-bs-toggle="list"
                                href="#list-boringComAndNeuro"
                                role="tab"
                                aria-controls="list-boringComAndNeuro"
                            >
                                The Boring Company and Neuralink
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-personalLife-list"
                                data-bs-toggle="list"
                                href="#list-personalLife"
                                role="tab"
                                aria-controls="list-personalLife"
                            >
                                Personal Life
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-recogAndInflue-list"
                                data-bs-toggle="list"
                                href="#list-recogAndInflue"
                                role="tab"
                                aria-controls="list-recogAndInflue"
                            >
                                Recognition and Influence
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-currentStatus-list"
                                data-bs-toggle="list"
                                href="#list-currentStatus"
                                role="tab"
                                aria-controls="list-currentStatus"
                            >
                                Current Status
                            </a>
                        </div>
                    </div>
                    <div className="card muskcard">
                        <div className="tab-content" id="nav-tabContent" style={{ boxShadow: '1px 2px 2px black,-1px -1px 2px black' }}>
                            <div
                                className="tab-pane fade show active"
                                id="list-earlylife"
                                role="tabpanel"
                                aria-labelledby="list-earlylife-list"
                            >

                                <ul >
                                    <h2>Early Life</h2>
                                    <li> Born: June 28, 1971, in Pretoria, South Africa.</li>
                                    <li>Musk displayed an early interest in technology and entrepreneurship, teaching himself computer programming at the age of 12.</li>
                                    <li>He moved to Canada at 17 to attend Queen's University, later transferring to the University of Pennsylvania, where he earned degrees in physics and economics.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-careerBegining"
                                role="tabpanel"
                                aria-labelledby="list-careerBegining-list"
                            >
                                <ul>
                                    <h2>Career Begining</h2>
                                    <li>In 1995, Musk dropped out of a PhD program at Stanford University after just two days to pursue business ventures.</li>
                                    <li>He co-founded Zip2, a city guide software company, which was sold to Compaq for about $300 million in 1999.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-paypalAndXcom"
                                role="tabpanel"
                                aria-labelledby="list-paypalAndXcom-list"
                            >
                                <ul>
                                    <h2>Paypal And X.com</h2>
                                    <li>Musk co-founded X.com in 1999, an online payment company that eventually became PayPal after a merger. In 2002, eBay acquired PayPal for $1.5 billion in stock.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-spaceX"
                                role="tabpanel"
                                aria-labelledby="list-spaceX-list"
                            >
                                <ul>
                                    <h2>SpaceX</h2>
                                    <li>In 2002, Musk founded SpaceX (Space Exploration Technologies Corp.) to reduce space transportation costs and enable the colonization of Mars.</li>
                                    <li>SpaceX has achieved numerous milestones, including launching the first privately funded spacecraft to reach orbit and the first to dock with the International Space Station.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-tesla"
                                role="tabpanel"
                                aria-labelledby="list-tesla-list"
                            >
                                <ul>
                                    <h2>Tesla,Inc.</h2>
                                    <li>Musk joined Tesla Motors (now Tesla, Inc.) in 2004 as chairman and later became CEO. He played a crucial role in developing electric vehicles, with models like the Model S, Model 3, and Model X.</li>
                                    <li>Under his leadership, Tesla has become a leader in the electric vehicle market and has significantly influenced the automotive industry.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-solarAndenergy"
                                role="tabpanel"
                                aria-labelledby="list-solarAndenergy-list"
                            >
                                <ul>
                                    <h2>Solar and Energy Ventures</h2>
                                    <li>Musk co-founded SolarCity in 2006, a solar energy services company that was later acquired by Tesla, enhancing its focus on renewable energy.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-boringComAndNeuro"
                                role="tabpanel"
                                aria-labelledby="list-boringComAndNeuro-list"
                            >
                                <ul>
                                    <h2>The Boring Company and Neuralink</h2>
                                    <li>In 2016, Musk founded The Boring Company, aiming to reduce urban traffic through innovative tunneling technology.</li>
                                    <li>He also co-founded Neuralink, a neurotechnology company focused on developing brain-machine interfaces</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-personalLife"
                                role="tabpanel"
                                aria-labelledby="list-personalLife-list"
                            >
                                <ul>
                                    <h2>Personal Life</h2>
                                    <li>Musk has been married three times and has several children. He is known for his ambitious vision of the future, advocating for sustainable energy and the colonization of Mars.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-recogAndInflue"
                                role="tabpanel"
                                aria-labelledby="list-recogAndInflue-list"
                            >
                                <ul>
                                    <h2>Recognition and Influence</h2>
                                    <li>
                                        Musk has received numerous awards and accolades for his contributions to technology and innovation. He is often listed among the world's most influential people and is recognized for his visionary ideas.
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-currentStatus"
                                role="tabpanel"
                                aria-labelledby="list-currentStatus-list"
                            >
                                <ul>
                                    <h2>Current Status</h2>
                                    <li>
                                        As of now, Elon Musk continues to lead SpaceX and Tesla, working on new projects and innovations that have the potential to shape the future of technology and humanity. His influence spans various sectors, from transportation to energy and beyond, making him a key figure in discussions about the future of human society and technology
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}