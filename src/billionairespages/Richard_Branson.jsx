import './richardBrandson.css'
import image1 from '../assets/RichardBranson.png'
export default function Richard_Branson() {
    const billionaireName = "Richard Branson"
    return <>
        <div className="container">
            <div className='row richardbody my-5'>
                <div className='card-group'>
                    <div className="card richardcard">
                        <div className="card-body " style={{ boxShadow: '1px 1px 1px wheat,-1px -1px 1px wheat' }}>
                            <h5 className="card-title">{billionaireName}</h5>
                            <span><b>English business magnate
                            </b>
                            </span>
                            <p className="card-text" >
                                Sir Richard Charles Nicholas Branson is an English business magnate who co-founded the Virgin Group in 1970, and as of 2016 controlled 5 companies remaining of once more than 400. Branson expressed his desire to become an entrepreneur at a young age. And His Net Worth is 260 crores USD (2024)
                            </p>
                        </div>
                    </div>
                    <div className="card richardcard" >
                        <img src={image1} alt="" className='image' />
                    </div>
                </div>
            </div>
            <div className='row text-center my-5' style={{ boxShadow: '1px 2px 2px black,-1px -1px 2px black' }}><h2>About {billionaireName}</h2></div>
            <div className="row richardbody">

                <div className="card-group">
                    <div className="card richardcard">
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
                                id="list-earlyCareer-list"
                                data-bs-toggle="list"
                                href="#list-earlyCareer"
                                role="tab"
                                aria-controls="list-earlyCareer"
                            >
                                Early Career
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-virgingroup-list"
                                data-bs-toggle="list"
                                href="#list-virgingroup"
                                role="tab"
                                aria-controls="list-virgingroup"
                            >
                                Expansion of the Virgin Group

                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-ventures-list"
                                data-bs-toggle="list"
                                href="#list-ventures"
                                role="tab"
                                aria-controls="list-ventures"
                            >
                                Entrepreneurial Ventures
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-philanthropy-list"
                                data-bs-toggle="list"
                                href="#list-philanthropy"
                                role="tab"
                                aria-controls="list-philanthropy"
                            >
                                Philanthropy
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-awardAndrecog-list"
                                data-bs-toggle="list"
                                href="#list-awardAndrecog"
                                role="tab"
                                aria-controls="list-awardAndrecog"
                            >
                                Awards and Recognition
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-legacyAndimpact-list"
                                data-bs-toggle="list"
                                href="#list-legacyAndimpact"
                                role="tab"
                                aria-controls="list-legacyAndimpact"
                            >
                                Legacy and Impact
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
                                id="list-conclusion-list"
                                data-bs-toggle="list"
                                href="#list-conclusion"
                                role="tab"
                                aria-controls="list-conclusion"
                            >
                                Conclusion
                            </a>
                        </div>
                    </div>
                    <div className="card richardcard">
                        <div className="tab-content" id="nav-tabContent" style={{ boxShadow: '1px 2px 2px black,-1px -1px 2px black' }}>
                            <div
                                className="tab-pane fade show active"
                                id="list-earlylife"
                                role="tabpanel"
                                aria-labelledby="list-earlylife-list"
                            >

                                <ul >
                                    <h2>Early Life</h2>
                                    <li><b>Birth and Family Background:</b> Richard Branson was born on July 18, 1950, in Blackheath, London, England. He was the first child of Edward James Branson and Eve Branson. His father was a barrister, and his mother was a flight attendant.</li>
                                    <li><b>Education:</b> Branson struggled with dyslexia in school, which led him to leave at the age of 16. He briefly attended Scaitcliffe School, followed by Stowe School, where he found a passion for entrepreneurship.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-earlyCareer"
                                role="tabpanel"
                                aria-labelledby="list-earlyCareer-list"
                            >
                                <ul>
                                    <h2>Early Career</h2>
                                    <li><b>First Business Venture:</b> At 16, Branson launched his first business, a magazine called Student, which focused on issues relevant to young people. This venture ignited his entrepreneurial spirit.</li>
                                    <li><b>Music Industry Beginnings:</b> In 1970, he founded Virgin Records after discovering an artist named Mike Oldfield. The label quickly gained success, signing notable acts like the Sex Pistols and the Culture Club.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-virgingroup"
                                role="tabpanel"
                                aria-labelledby="list-virgingroup-list"
                            >
                                <ul>
                                    <h2>Expansion of the Virgin Group</h2>
                                    <li><b>Diversification:</b> Throughout the 1980s and 1990s, Branson expanded the Virgin brand into various sectors, including airlines (Virgin Atlantic), telecommunications (Virgin Mobile), and travel (Virgin Holidays).</li>
                                    <li>
                                        <b>Innovative Marketing:</b> Branson is known for his unconventional marketing strategies and adventurous public stunts, which often attracted media attention and helped establish the Virgin brand.
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-ventures"
                                role="tabpanel"
                                aria-labelledby="list-ventures-list"
                            >
                                <ul>
                                    <h2>Entrepreneurial Ventures
                                    </h2>
                                    <li><b>Virgin Atlantic:</b> Founded in 1984, Virgin Atlantic became known for its customer service and innovation, challenging established airlines with its competitive pricing and unique offerings.</li>
                                    <li><b>Virgin Galactic:</b> In 2004, Branson launched Virgin Galactic, aiming to provide commercial space travel. The company has since made significant strides in space tourism, with test flights and plans for future commercial operations.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-philanthropy"
                                role="tabpanel"
                                aria-labelledby="list-philanthropy-list"
                            >
                                <ul>
                                    <h2>Philanthropy</h2>
                                    <li><b>Social and Environmental Initiatives:</b> Branson is committed to philanthropy and has established various foundations, including the Virgin Unite, which focuses on social issues and environmental sustainability.</li>
                                    <li><b>Global Challenges:</b> He has been involved in numerous initiatives to combat climate change, promote renewable energy, and support entrepreneurship in developing countries.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-awardAndrecog"
                                role="tabpanel"
                                aria-labelledby="list-awardAndrecog-list"
                            >
                                <ul>
                                    <h2>Awards and Recognition
                                    </h2>
                                    <li><b>Honors:</b> Branson has received numerous awards for his contributions to business and philanthropy, including knighthood from Queen Elizabeth II in 2000 for his services to entrepreneurship.

                                    </li>
                                    <li><b>Influence:</b> He is often cited as one of the most influential entrepreneurs in the world, known for his innovative approach to business and commitment to social responsibility.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-legacyAndimpact"
                                role="tabpanel"
                                aria-labelledby="list-legacyAndimpact-list"
                            >
                                <ul>
                                    <h2>Legacy and Impact</h2>
                                    <li><b>Branding and Innovation:</b> Richard Branson’s approach to branding and marketing has set benchmarks in the business world. His willingness to take risks and explore new industries has inspired many entrepreneurs.</li>
                                    <li><b>Cultural Icon:</b> Branson is viewed as a cultural icon, embodying the spirit of adventure and entrepreneurship. His life story is often cited as an example of how to overcome challenges and pursue one’s passions.</li>
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
                                    <li><b>Family:</b> Branson has been married twice, first to Kristen Tomassi and then to Joan Templeman, with whom he has two children. He is known for valuing family and maintaining a work-life balance.</li>
                                    <li>
                                   <b> Adventurer:</b> An avid adventurer, Branson has undertaken numerous challenges, including ballooning across the Atlantic and Pacific Oceans, which has further enhanced his public persona.
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-conclusion"
                                role="tabpanel"
                                aria-labelledby="list-conclusion-list"
                            >
                                <ul>
                                    <h2>Conclusion</h2>
                                    <li>
                                    Richard Branson’s journey from a young entrepreneur to the founder of the Virgin Group showcases his adventurous spirit, innovative mindset, and commitment to social change. His impact on business and philanthropy continues to resonate globally, inspiring future generations of entrepreneurs.
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