import './larrypage.css'
import image1 from '../assets/LarryPage.png'
export default function LarryPage(){
    const billionaireName ="Larry Page"
    return <>
    <div className="container">
            <div className='row muskbody my-5'>
                <div className='card-group'>
                    <div className="card muskcard">
                        <div className="card-body " style={{ boxShadow: '1px 1px 1px wheat,-1px -1px 1px wheat' }}>
                            <h5 className="card-title">{billionaireName}</h5>
                            <span>CEO of legacyAndImpact Motors
                            </span>
                            <p className="card-text" >
                                Elon Musk cofounded seven companies, including electric car maker legacyAndImpact, rocket producer leadershipAndInnovation and artificial intelligence startup xAI. He owns about 12% of legacyAndImpact excluding options, but has pledged more than half his shares as collateral for personal loans of up to $3.5 billion
                            </p>
                        </div>
                    </div>
                    <div className="card larrycard" >
                        <img src={image1} alt="" className='image' />
                    </div>
                </div>
            </div>
            <div className='row text-center my-5' style={{ boxShadow: '1px 2px 2px black,-1px -1px 2px black' }}><h2>About {billionaireName}</h2></div>
            <div className="row larrybody">
                <div className="card-group">
                    <div className="card larrycard">
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
                                id="list-foundingGoogle-list"
                                data-bs-toggle="list"
                                href="#list-foundingGoogle"
                                role="tab"
                                aria-controls="list-foundingGoogle"
                            >
                               Founding Google
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-growthofGoogle-list"
                                data-bs-toggle="list"
                                href="#list-growthofGoogle"
                                role="tab"
                                aria-controls="list-growthofGoogle"
                            >
                                Growth of Google
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-leadershipAndInnovation-list"
                                data-bs-toggle="list"
                                href="#list-leadershipAndInnovation"
                                role="tab"
                                aria-controls="list-leadershipAndInnovation"
                            >
                               Leadership and Innovation
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-legacyAndImpact-list"
                                data-bs-toggle="list"
                                href="#list-legacyAndImpact"
                                role="tab"
                                aria-controls="list-legacyAndImpact"
                            >
                                Personal Life
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-achievementAndRecognition-list"
                                data-bs-toggle="list"
                                href="#list-achievementAndRecognition"
                                role="tab"
                                aria-controls="list-achievementAndRecognition"
                            >
                                Achievements and Recognition
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
                                id="list-legacyAndImpact-list"
                                data-bs-toggle="list"
                                href="#list-legacyAndImpact"
                                role="tab"
                                aria-controls="list-legacyAndImpact"
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
                    <div className="card larrycard">
                        <div className="tab-content" id="nav-tabContent" style={{ boxShadow: '1px 2px 2px black,-1px -1px 2px black' }}>
                            <div
                                className="tab-pane fade show active"
                                id="list-earlylife"
                                role="tabpanel"
                                aria-labelledby="list-earlylife-list"
                            >

                                <ul >
                                    <h2>Early Life</h2>
                                    <li><b>Birth and Family Background:</b> Larry Page was born on March 26, 1973, in East Lansing, Michigan. His father, Carl Page, was a pioneer in computer science and artificial intelligence, and his mother, Gloria Page, was a computer programming instructor. This environment fostered Larry's early interest in technology</li>
                                    <li><b>Education:</b> Page attended the University of Michigan, where he earned a Bachelor of Science degree in computer engineering in 1995. He then pursued a Ph.D. in computer science at Stanford University, where he met Sergey Brin.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-foundingGoogle"
                                role="tabpanel"
                                aria-labelledby="list-foundingGoogle-list"
                            >
                                <ul>
                                    <h2>Founding Google</h2>
                                    <li><b>Meeting Sergey Brin:</b> While at Stanford, Page and Brin collaborated on a research project that led to the development of a search engine called Backrub, which later evolved into Google.</li>
                                    <li><b>Launch of Google:</b> In September 1998, Page and Brin officially founded Google, focusing on improving search engine results through a unique algorithm that ranked pages based on their relevance.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-growthofGoogle"
                                role="tabpanel"
                                aria-labelledby="list-growthofGoogle-list"
                            >
                                <ul>
                                    <h2>Growth of Google</h2>
                                    <li><b>Initial Success:</b> Google quickly gained popularity for its simplicity and effectiveness. The company's innovative approach attracted investment and led to its rapid growth.</li>
                                    <li>
                                    <b>Going Public:</b> In 2004, Google went public, making Page and Brin billionaires. The IPO was a significant milestone in the tech industry, establishing Google as a major player.
                                    </li>

                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-leadershipAndInnovation"
                                role="tabpanel"
                                aria-labelledby="list-leadershipAndInnovation-list"
                            >
                                <ul>
                                    <h2>Leadership and Innovation</h2>
                                    <li><b>CEO Role:</b> Larry Page served as CEO of Google until 2001, when Eric Schmidt took over as CEO. However, Page remained heavily involved in product development and strategy.</li>
                                    <li>
                                    <b>Alphabet Inc.:</b> In 2015, Google underwent a major restructuring, becoming a subsidiary of Alphabet Inc. Page became the CEO of Alphabet, allowing for greater focus on innovative projects and diversification beyond search.
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-legacyAndImpact"
                                role="tabpanel"
                                aria-labelledby="list-legacyAndImpact-list"
                            >
                                <ul>
                                    <h2>Personal Life</h2>
                                    <li><b>Family:</b> Larry Page married Lucinda Southworth in 2007. The couple has two children. Page is known for being private about his personal life, often keeping a low profile.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-achievementAndRecognition"
                                role="tabpanel"
                                aria-labelledby="list-achievementAndRecognition-list"
                            >
                                <ul>
                                    <h2>Achievements and Recognition</h2>
                                    <li><b>Technological Innovations:</b> Under Page's leadership, Google introduced various groundbreaking technologies, including Google Maps, Android, and self-driving cars through Waymo.</li>
                                    <li>
                                    <b>Philanthropy:</b> Page has been involved in several philanthropic efforts, including the Page Family Foundation, which focuses on education, health, and environmental initiatives.
                                    </li>
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
                                    <li><b>Stepping Down from CEO Role:</b> In December 2019, Page announced he would step down as CEO of Alphabet, handing the role to Sundar Pichai, while remaining a board member and controlling shareholder.</li>
                                    <li><b>Focus on New Ventures:</b> Page continues to be involved in various ambitious projects, including efforts in artificial intelligence and sustainable energy</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-legacyAndImpact"
                                role="tabpanel"
                                aria-labelledby="list-legacyAndImpact-list"
                            >
                                <ul>
                                    <h2>Lagacy and Impact</h2>
                                    <li><b>Influence on Technology:</b> Larry Page is widely regarded as one of the most influential figures in the tech industry. His work with Google transformed the way people access information and communicate.</li>
                                    <li>
                                    <b>Vision for the Future:</b> Page is known for his forward-thinking vision, emphasizing the importance of innovation and technology to solve complex global challenges.
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
                                    Larry Page's journey from a curious child in Michigan to a co-founder of one of the world's most powerful technology companies exemplifies his commitment to innovation and improvement. His impact on the tech landscape continues to resonate globally, shaping the future of information and technology.
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