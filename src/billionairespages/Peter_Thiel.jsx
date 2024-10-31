import './peterthiel.css'
import image1 from '../assets/Peter_Thiel.png'
export default function Peter_Thiel() {
    const billionaireName = "Peter Thiel"
    return <>
        <div className="container">
            <div className='row peterbody my-5'>
                <div className='card-group'>
                    <div className="card petercard">
                        <div className="card-body " style={{ boxShadow: '1px 1px 1px wheat,-1px -1px 1px wheat' }}>
                            <h5 className="card-title">{billionaireName}</h5>
                            <span>Former CEO of PayPal

                            </span>
                            <p className="card-text" >
                            Peter Andreas Thiel is an American entrepreneur, venture capitalist, and political activist. A co-founder of PayPal, Palantir Technologies, and Founders Fund, he was the first outside investor in Facebook. And His Net worth is 1,060 crores USD as per October 2024.
                            </p>
                        </div>
                    </div>
                    <div className="card petercard" >
                        <img src={image1} alt="" className='image' />
                    </div>
                </div>
            </div>
            <div className='row text-center my-5' style={{ boxShadow: '1px 2px 2px black,-1px -1px 2px black' }}><h2>About {billionaireName}</h2></div>
            <div className="row peterbody">

                <div className="card-group">
                    <div className="card petercard">
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
                                id="list-cofoundingPaypal-list"
                                data-bs-toggle="list"
                                href="#list-cofoundingPaypal"
                                role="tab"
                                aria-controls="list-cofoundingPaypal"
                            >
                                Co-founding PayPal
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-VenturalCapital-list"
                                data-bs-toggle="list"
                                href="#list-VenturalCapital"
                                role="tab"
                                aria-controls="list-VenturalCapital"
                            >
                                Venture Capital and Investments
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-politicalInvolvement-list"
                                data-bs-toggle="list"
                                href="#list-politicalInvolvement"
                                role="tab"
                                aria-controls="list-politicalInvolvement"
                            >
                                Political Involvement
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-leadershipThought-list"
                                data-bs-toggle="list"
                                href="#list-leadershipThought"
                                role="tab"
                                aria-controls="list-leadershipThought"
                            >
                                Writing and Thought Leadership
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-philanthropy-list"
                                data-bs-toggle="list"
                                href="#list-philanthropy"
                                role="tab"
                                aria-controls="list-philanthropy"
                            >
                                Philanthropy and Initiatives
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
                                id="list-legacyAndImpact-list"
                                data-bs-toggle="list"
                                href="#list-legacyAndImpact"
                                role="tab"
                                aria-controls="list-legacyAndImpact"
                            >
                                Legacy and Impact
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
                    <div className="card petercard">
                        <div className="tab-content" id="nav-tabContent" style={{ boxShadow: '1px 2px 2px black,-1px -1px 2px black' }}>
                            <div
                                className="tab-pane fade show active"
                                id="list-earlylife"
                                role="tabpanel"
                                aria-labelledby="list-earlylife-list"
                            >

                                <ul >
                                    <h2>Early Life</h2>
                                    <li><b> Birth and Family Background:</b> Peter Thiel was born on October 11, 1967, in Frankfurt, West Germany. His family immigrated to the United States when he was a toddler, settling in Foster City, California.
                                    </li>

                                    <li> <b>Education:</b>Thiel showed an early aptitude for mathematics and philosophy. He attended Stanford University, where he earned a Bachelor of Arts in Philosophy in 1989. He later received a Juris Doctor (J.D.) from Stanford Law School in 1992.</li>
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
                                    <li><b>Investment and Law:</b> After law school, Thiel worked as a clerk for a federal judge and then practiced law at a prestigious firm. However, his interest in technology and entrepreneurship led him to pivot to the tech industry.</li>
                                    <li><b>First Ventures:</b> In 1996, Thiel co-founded Thiel Capital Management, which focused on technology investments. He also became involved in various tech startups during this period.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-cofoundingPaypal"
                                role="tabpanel"
                                aria-labelledby="list-cofoundingPaypal-list"
                            >
                                <ul>
                                    <h2>Co-founding PayPal</h2>
                                    <li><b>PayPal:</b> In 1999, Thiel co-founded Confinity, which later merged with X.com, an online payment company co-founded by Elon Musk. This merger led to the creation of PayPal, where Thiel served as the CEO.</li>
                                    <li><b>Acquisition by eBay:</b> PayPal went public in 2002 and was subsequently acquired by eBay for $1.5 billion. Thiel's stake made him a multimillionaire.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-VenturalCapital"
                                role="tabpanel"
                                aria-labelledby="list-VenturalCapital-list"
                            >
                                <ul>
                                    <h2>Venture Capital and Investments</h2>
                                    <li><b>Founding Founders Fund:</b> In 2005, Thiel co-founded Founders Fund, a venture capital firm that has invested in several successful startups, including Facebook, SpaceX, and Airbnb.</li>
                                    <li><b>Facebook Investment:</b> Thiel was one of the first outside investors in Facebook, investing $500,000 in 2004. His early support helped propel the company’s growth, and he later served on its board.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-politicalInvolvement"
                                role="tabpanel"
                                aria-labelledby="list-politicalInvolvement-list"
                            >
                                <ul>
                                    <h2>Political Involvement</h2>
                                    <li><b>Libertarian Views:</b> Thiel is known for his libertarian views and has been an outspoken advocate for free speech and individual liberties.</li>
                                    <li><b>Support for Political Candidates:</b> He has supported various political candidates, notably endorsing Donald Trump in the 2016 presidential election, which sparked significant media attention and controversy.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-leadershipThought"
                                role="tabpanel"
                                aria-labelledby="list-leadershipThought-list"
                            >
                                <ul>
                                    <h2>Writing and Thought Leadership</h2>
                                    <li><b>Author:</b> In 2014, Thiel published "Zero to One: Notes on Startups, or How to Build the Future," which offers insights into innovation and entrepreneurship. The book has been influential in tech and business circles.</li>
                                    <li>
                                    <b>Public Speaking:</b> Thiel is a sought-after speaker, often discussing topics related to technology, capitalism, and the future of innovation.
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-philanthropy"
                                role="tabpanel"
                                aria-labelledby="list-philanthropy-list"
                            >
                                <ul>
                                    <h2>Philanthropy and Initiatives</h2>
                                    <li><b>Thiel Foundation:</b> He founded the Thiel Foundation, which supports scientific research and technology development. The foundation is known for its Thiel Fellowship, which awards young entrepreneurs to pursue their business ideas instead of attending college.</li>
                                    <li><b>Focus on Innovation:</b> Thiel advocates for advancements in technology that challenge traditional industries, aiming to foster a culture of innovation.</li>
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
                                    <li><b>Interests and Hobbies:</b> Thiel is known for his interest in technology, philosophy, and science fiction. He often explores themes of futurism and innovation in his discussions and writings.</li>
                                    <li><b>Privacy and Public Image:</b> Thiel is a private individual, often avoiding the spotlight despite his high-profile investments and political involvement.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-legacyAndImpact"
                                role="tabpanel"
                                aria-labelledby="list-legacyAndImpact-list"
                            >
                                <ul>
                                    <h2>Legacy and Impact</h2>
                                    <li>
                                    <b>Influence in Tech:</b> Peter Thiel is regarded as one of the most influential figures in Silicon Valley, having played a crucial role in shaping the landscape of technology and venture capital.
                                    </li>
                                    <li>
                                    <b>Controversial Figure:</b> His political stances and business practices have made him a polarizing figure, sparking debates about the role of technology in society.
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
                                        Peter Thiel’s journey from a young immigrant to a prominent entrepreneur and investor highlights his profound impact on the tech industry and his advocacy for innovation and individualism. His legacy continues to shape discussions around entrepreneurship, technology, and the future of capitalism.
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