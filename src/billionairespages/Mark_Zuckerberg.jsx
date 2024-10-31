import './markzukerberg.css'
import image1 from '../assets/MarkZukerberg.png'
export default function Mark_Zuckerberg() {
    const billionaireName = "Mark Zuckerberg"
    return <>
        <div className="container">
            <div className='row markbody my-5'>
                <div className='card-group'>
                    <div className="card markcard">
                        <div className="card-body " style={{ boxShadow: '1px 1px 1px wheat,-1px -1px 1px wheat' }}>
                            <h5 className="card-title">{billionaireName}</h5>
                            <span>CEO of Facebook (now Meta Platforms, Inc.)
                            </span>
                            <p className="card-text" >
                                As of 2023, Mark Zuckerberg's net worth is estimated to be around $100 billion. However, net worth figures can fluctuate significantly due to changes in stock prices, particularly because a large portion of his wealth is tied to his ownership of Meta Platforms, Inc. (formerly Facebook). For the most accurate and current estimate, it's best to check reputable financial news sources or platforms that track billionaire net worths.
                            </p>
                        </div>
                    </div>
                    <div className="card markcard" >
                        <img src={image1} alt="" className='image' />
                    </div>
                </div>
            </div>
            <div className='row text-center my-5' style={{ boxShadow: '1px 2px 2px black,-1px -1px 2px black' }}><h2>About {billionaireName}</h2></div>
            <div className="row markbody">

                <div className="card-group">
                    <div className="card markcard">
                        <div className="list-group" id="list-tab" role="tablist" style={{ boxShadow: '0 2px 2px black,0 0 2px black' }}>
                            <a
                                className="list-group-item list-group-item-action active"
                                id="list-earlylifeEducation-list"
                                data-bs-toggle="list"
                                href="#list-earlylifeEducation"
                                role="tab"
                                aria-controls="list-earlylifeEducation"
                            >
                                Early Life and Education
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-foundingFacebook-list"
                                data-bs-toggle="list"
                                href="#list-foundingFacebook"
                                role="tab"
                                aria-controls="list-foundingFacebook"
                            >
                                Founding Facebook
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-businessGroAndChalenge-list"
                                data-bs-toggle="list"
                                href="#list-businessGroAndChalenge"
                                role="tab"
                                aria-controls="list-businessGroAndChalenge"
                            >
                                Business Growth and Challenges
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-visionAndFuture-list"
                                data-bs-toggle="list"
                                href="#list-visionAndFuture"
                                role="tab"
                                aria-controls="list-visionAndFuture"
                            >
                                Vision for the Future
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
                        </div>
                    </div>
                    <div className="card markcard">
                        <div className="tab-content" id="nav-tabContent" style={{ boxShadow: '1px 2px 2px black,-1px -1px 2px black' }}>
                            <div
                                className="tab-pane fade show active"
                                id="list-earlylifeEducation"
                                role="tabpanel"
                                aria-labelledby="list-earlylifeEducation-list"
                            >

                                <ul >
                                    <h2>Early Life and Education</h2>
                                    <li><b>Birth and Background:</b> Born on May 14, 1984, in White Plains, New York.</li>
                                    <li><b>Early Interests:</b> Developed an interest in programming at a young age; created a messaging program called ZuckNet..</li>
                                    <li><b>Harvard University:</b> Enrolled in 2002, where he studied psychology and computer science.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-foundingFacebook"
                                role="tabpanel"
                                aria-labelledby="list-foundingFacebook-list"
                            >
                                <ul>
                                    <h2>Founding Facebook</h2>
                                    <li><b>Launch of Facebook:</b> Co-founded Facebook in February 2004 with Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes, initially as a social network for Harvard students.</li>
                                    <li><b>Rapid Expansion:</b> Quickly expanded to other universities and then to the general public, revolutionizing social networking.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-businessGroAndChalenge"
                                role="tabpanel"
                                aria-labelledby="list-businessGroAndChalenge-list"
                            >
                                <ul>
                                    <h2>Business Growth and Challenges</h2>
                                    <li><b>Public Offering:</b> Facebook went public in May 2012, making Zuckerberg one of the youngest billionaires.</li>
                                    <li><b>Controversies:</b> Faced numerous challenges, including issues related to user privacy, data security, and misinformation on the platform.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-visionAndFuture"
                                role="tabpanel"
                                aria-labelledby="list-visionAndFuture-list"
                            >
                                <ul>
                                    <h2>Vision for the Future</h2>
                                    <li><b>Metaverse Development:</b> Committed to building the metaverse, a virtual reality space for social interaction, entertainment, and commerce.</li>
                                    <li><b>Ongoing Impact:</b> Continues to influence technology and social media, shaping the future of online communication.</li>
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
                                    <li><b>Marriage:</b> Married Priscilla Chan in 2012; the couple has two daughters.</li>
                                    <li><b>Philanthropy:</b> Co-founded the Chan Zuckerberg Initiative, focusing on education, healthcare, and social justice.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}