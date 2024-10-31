import './jeffbezos.css'
import image1 from '../assets/Jeff_Bezos.png';

export default function Jeff_Bezos() {
    const billionaireName="Jeff Bezos"
    return <>
        <div className="container">
            <div className='row jeffbody my-5'>
                <div className='card-group'>
                    <div className="card jeffcard">
                        <div className="card-body " style={{ boxShadow: '1px 1px 1px wheat,-1px -1px 1px wheat' }}>
                            <h5 className="card-title">{billionaireName}</h5>
                            <span><b>Executive chairman of Amazon</b>
                            </span>
                            <p className="card-text" >
                            Jeffrey Preston Bezos is an American business magnate best known as the founder, executive chairman, and former president and CEO of Amazon, the world's largest e-commerce and cloud computing company.
                            <br />
                            As of October 2024, Bezos's estimated net worth is approximately 1.68 lakh crores in Indian rupees, which is equivalent to around $200 billion
                            </p>
                        </div>
                    </div>
                    <div className="card jeffcard" >
                        <img src={image1} alt="" className='image' />
                    </div>
                </div>
            </div>
            <div className='row text-center my-5' style={{ boxShadow: '1px 2px 2px black,-1px -1px 2px black' }}><h2>About {billionaireName}</h2></div>
            <div className="row muskbody">

                <div className="card-group">
                    <div className="card jeffcard">
                        <div className="list-group" id="list-tab" role="tablist" style={{ boxShadow: '0 2px 2px black,0 0 2px black'}}>
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
                                id="list-foundingAmazon-list"
                                data-bs-toggle="list"
                                href="#list-foundingAmazon"
                                role="tab"
                                aria-controls="list-foundingAmazon"
                            >
                                Founding Amazon
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-ExpansionAndInnovation-list"
                                data-bs-toggle="list"
                                href="#list-ExpansionAndInnovation"
                                role="tab"
                                aria-controls="list-ExpansionAndInnovation"
                            >
                                Expansion and Innovation
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-lagacyAndImpact-list"
                                data-bs-toggle="list"
                                href="#list-lagacyAndImpact"
                                role="tab"
                                aria-controls="list-lagacyAndImpact"
                            >
                                Personal Life
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-WealthandInfluence-list"
                                data-bs-toggle="list"
                                href="#list-WealthandInfluence"
                                role="tab"
                                aria-controls="list-WealthandInfluence"
                            >
                                Wealth and Influence
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-recentDevelopments-list"
                                data-bs-toggle="list"
                                href="#list-recentDevelopments"
                                role="tab"
                                aria-controls="list-recentDevelopments"
                            >
                                Recent Developments
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-lagacyAndImpact-list"
                                data-bs-toggle="list"
                                href="#list-lagacyAndImpact"
                                role="tab"
                                aria-controls="list-lagacyAndImpact"
                            >
                                Lagacy and Impact
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
                    <div className="card muskcard mt-5">
                        <div className="tab-content" id="nav-tabContent" style={{ boxShadow: '1px 2px 2px black,-1px -1px 2px black'}}>
                            <div
                                className="tab-pane fade show active"
                                id="list-earlylife"
                                role="tabpanel"
                                aria-labelledby="list-earlylife-list"
                            >

                                <ul >
                                    <h2>Early Life</h2>
                                    <li> <b>Birth and Family Background:</b> Jeff Bezos was born on January 12, 1964, in Albuquerque, New Mexico. His mother, Jackie, was a teenage high school student, and his father, Ted Jorgensen, was a bike shop owner. They divorced shortly after his birth, and Jackie later married Miguel Bezos, who adopted Jeff.</li>
                                    <li><b>Education:</b> Bezos showed an early interest in technology and science. He graduated from Miami Palmetto High School and went on to Princeton University, where he earned a degree in electrical engineering and computer science in 1986.</li>
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
                                    <li><b>Wall Street and Tech Industry:</b> After graduating, Bezos worked at various firms on Wall Street, including Fitel, Bankers Trust, and D. E. Shaw & Co. He gained valuable experience in finance and technology during this time.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-foundingAmazon"
                                role="tabpanel"
                                aria-labelledby="list-foundingAmazon-list"
                            >
                                <ul>
                                    <h2>Founding Amazon</h2>
                                    <li><b>The Birth of Amazon:</b> In 1994, Bezos left his stable job to start Amazon. He initially operated it as an online bookstore from his garage in Seattle. The company quickly expanded to sell a wide variety of products.</li>
                                    <li>
                                    <b>Initial Growth:</b> Amazon went public in 1997, and its success skyrocketed as e-commerce began to gain popularity. Bezos’s vision of creating "the world's most customer-centric company" drove Amazon’s growth.
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-ExpansionAndInnovation"
                                role="tabpanel"
                                aria-labelledby="list-ExpansionAndInnovation-list"
                            >
                                <ul>
                                    <h2>Expansion and Innovation</h2>
                                    <li><b>Diversification:</b> Under Bezos’s leadership, Amazon diversified beyond books into electronics, clothing, cloud computing (AWS), and entertainment (Amazon Prime Video).</li>
                                    <li><b>Technological Innovations:</b> Bezos invested in technology that would revolutionize shopping, including personalized recommendations, one-click purchasing, and the introduction of the Kindle e-reader in 2007.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-lagacyAndImpact"
                                role="tabpanel"
                                aria-labelledby="list-lagacyAndImpact-list"
                            >
                                <ul>
                                    <h2>Personal Life</h2>
                                    <li><b>Family:</b> Jeff Bezos married MacKenzie Scott in 1993, and they had four children together. The couple announced their divorce in early 2019, after which MacKenzie became a prominent philanthropist.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-WealthandInfluence"
                                role="tabpanel"
                                aria-labelledby="list-WealthandInfluence-list"
                            >
                                <ul>
                                    <h2>Wealth and Influence</h2>
                                    <li><b>Becoming the Richest Person:</b> Bezos became the richest person in the world multiple times, with his net worth peaking at over $200 billion due to Amazon’s soaring stock prices.</li>
                                    <li><b>Philanthropy:</b> Bezos has engaged in various philanthropic efforts, including the Bezos Day One Fund, aimed at supporting homeless families and creating a network of Montessori schools.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-recentDevelopments"
                                role="tabpanel"
                                aria-labelledby="list-recentDevelopments-list"
                            >
                                <ul>
                                    <h2>Recent Developments</h2>
                                    <li><b>Stepping Down as CEO:</b> In July 2021, Bezos stepped down as CEO of Amazon but remained involved as the Executive Chairman</li>
                                    <li><b>Space Exploration:</b> Bezos founded Blue Origin in 2000, a company focused on space exploration and tourism. In July 2021, he flew to space aboard the New Shepard rocket.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-lagacyAndImpact"
                                role="tabpanel"
                                aria-labelledby="list-lagacyAndImpact-list"
                            >
                                <ul>
                                    <h2>Lagacy and Impact</h2>
                                    <li><b>Cultural Influence:</b> Bezos is widely regarded as one of the most influential figures in modern business, transforming retail and influencing how technology shapes our lives.</li>
                                    <li>
                                    <b>Criticism and Controversies:</b> His tenure at Amazon has also faced criticism regarding labor practices, market dominance, and privacy concerns.
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
                                    Jeff Bezos’s journey from a young tech enthusiast to one of the most influential entrepreneurs of the 21st century showcases his innovative spirit and relentless pursuit of excellence. His impact on e-commerce, technology, and space exploration continues to shape the future.
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