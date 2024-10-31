import './reedhasting.css'
import image1 from '../assets/ReedHastings.png'
export default function Reed_Hastings(){
    const billionaireName ="Reed Hastings"
    return <>
    <div className="container">
            <div className='row reedbody my-5'>
                <div className='card-group'>
                    <div className="card reedcard">
                        <div className="card-body " style={{ boxShadow: '1px 1px 1px wheat,-1px -1px 1px wheat' }}>
                            <h5 className="card-title">{billionaireName}</h5>
                            <span><b>Chairman of the board of directors of Netflix
                            </b>
                            </span>
                            <p className="card-text" >
                            Wilmot Reed Hastings Jr. is an American billionaire businessman. He is the co-founder and executive chairman of Netflix, and is on a number of boards and non-profit organizations. A former president of the California State Board of Education, Hastings is also an advocate for charter schools.And His net worth is 460 crores USD as per October 2024.
                            </p>
                        </div>
                    </div>
                    <div className="card reedcard" >
                        <img src={image1} alt="" className='image' />
                    </div>
                </div>
            </div>
            <div className='row text-center my-5' style={{ boxShadow: '1px 2px 2px black,-1px -1px 2px black' }}><h2>About {billionaireName}</h2></div>
            <div className="row reedbody">

                <div className="card-group">
                    <div className="card reedcard">
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
                                id="list-cofoundingOfNetflix-list"
                                data-bs-toggle="list"
                                href="#list-cofoundingOfNetflix"
                                role="tab"
                                aria-controls="list-cofoundingOfNetflix"
                            >
                                Co-founding Netflix
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-leadershipAndGrowth-list"
                                data-bs-toggle="list"
                                href="#list-leadershipAndGrowth"
                                role="tab"
                                aria-controls="list-leadershipAndGrowth"
                            >
                                Leadership and Growth
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-businessPhilosophy-list"
                                data-bs-toggle="list"
                                href="#list-businessPhilosophy"
                                role="tab"
                                aria-controls="list-businessPhilosophy"
                            >
                                Business Philosophy
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
                                id="list-awardAndrecog-list"
                                data-bs-toggle="list"
                                href="#list-awardAndrecog"
                                role="tab"
                                aria-controls="list-awardAndrecog"
                            >
                                Award and Recognition
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-legacyandImpact-list"
                                data-bs-toggle="list"
                                href="#list-legacyandImpact"
                                role="tab"
                                aria-controls="list-legacyandImpact"
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
                    <div className="card reedcard">
                        <div className="tab-content" id="nav-tabContent" style={{ boxShadow: '1px 2px 2px black,-1px -1px 2px black' }}>
                            <div
                                className="tab-pane fade show active"
                                id="list-earlylife"
                                role="tabpanel"
                                aria-labelledby="list-earlylife-list"
                            >

                                <ul >
                                    <h2>Early Life</h2>
                                    <li> <b>Birth and Family Background:</b> Reed Hastings was born on October 8, 1960, in Boston, Massachusetts. He grew up in a family that valued education and intellectual pursuits.</li>
                                    <li><b>Education:</b> Hastings attended Bowdoin College, where he graduated with a Bachelor of Arts in Mathematics in 1983. He later earned a Master's degree in Computer Science from Stanford University in 1988.</li>
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
                                    <li><b>Teaching and Early Ventures:</b> After college, Hastings taught high school math in the Peace Corps in Swaziland. Upon returning to the U.S., he co-founded a software company called Pure Software in 1991, which specialized in development tools for software engineers.</li>
                                    <li><b>Acquisition of Pure Software:</b> The company grew rapidly and was acquired by Rational Software in 1997, which provided Hastings with the capital and experience to pursue new ventures.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-cofoundingOfNetflix"
                                role="tabpanel"
                                aria-labelledby="list-cofoundingOfNetflix-list"
                            >
                                <ul>
                                    <h2>Co-founding Netflix</h2>
                                    <li><b>Founding Netflix:</b> In 1997, Hastings co-founded Netflix with Marc Randolph. Initially, the company offered DVD rentals by mail, capitalizing on the emerging digital landscape.</li>
                                    <li><b>Shift to Streaming:</b> In 2007, Netflix introduced its streaming service, revolutionizing how people consume media and marking a significant shift in the entertainment industry.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-leadershipAndGrowth"
                                role="tabpanel"
                                aria-labelledby="list-leadershipAndGrowth-list"
                            >
                                <ul>
                                    <h2>Leadership and Growth</h2>
                                    <li><b>CEO Role:</b> Hastings has served as CEO of Netflix since its inception. His leadership has been pivotal in transforming Netflix from a DVD rental service to a leading global streaming platform.</li>
                                    <li><b>Original Content:</b> Under Hastings's direction, Netflix began producing original content, launching hits like "House of Cards" and "Stranger Things," which helped differentiate the service and attract subscribers.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-businessPhilosophy"
                                role="tabpanel"
                                aria-labelledby="list-businessPhilosophy-list"
                            >
                                <ul>
                                    <h2>Business Philosophy</h2>
                                    <li><b>Culture of Freedom and Responsibility:</b> Hastings is known for promoting a unique corporate culture at Netflix, emphasizing freedom, innovation, and accountability among employees.</li>
                                    <li><b>Disruption in Entertainment:</b> He has been a strong advocate for embracing change and innovation, often speaking about the importance of adapting to new technologies and consumer preferences.</li>
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
                                    <li><b>Education Initiatives:</b> Hastings is an active philanthropist, focusing on educational reform. He has supported various initiatives aimed at improving public education and increasing access to quality learning.</li>
                                    <li><b>Hastings Foundation:</b> Through the Hastings Foundation, he has funded educational projects and nonprofit organizations dedicated to enhancing educational opportunities for underserved communities.</li>
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
                                    <li><b>Global Expansion:</b> Under Hastings’s leadership, Netflix expanded its reach to over 190 countries, becoming a dominant player in the global streaming market.</li>
                                    <li><b>Continued Innovation:</b> He continues to oversee Netflix's strategy as it adapts to changing media consumption habits, exploring areas such as interactive content and international productions.</li>
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
                                    <li><b>Family:</b> Hastings is married to Patricia Ann Wexler, and they have two children. He has maintained a relatively private personal life while being active in various community initiatives.</li>
                                    <li><b>Interests:</b> An avid reader and technology enthusiast, Hastings enjoys exploring new ideas and trends in media and technology.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-awardAndrecog"
                                role="tabpanel"
                                aria-labelledby="list-awardAndrecog-list"
                            >
                                <ul>
                                    <h2>Award and Recognition</h2>
                                    <li>
                                    <b>Industry Honors: </b>Hastings has received numerous accolades for his contributions to the tech and entertainment industries, including recognition as one of TIME magazine's 100 Most Influential People.
                                    </li>
                                    <li>
                                    <b>Business Leadership:</b> He is often cited for his visionary leadership and has served on various boards and committees focused on technology and education.
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-legacyandImpact"
                                role="tabpanel"
                                aria-labelledby="list-legacyandImpact-list"
                            >
                                <ul>
                                    <h2>Legacy and Impact</h2>
                                    <li>
                                    <b>Pioneering Streaming Services:</b> Reed Hastings is credited with fundamentally changing how people consume media, paving the way for the rise of streaming services and altering the traditional entertainment landscape.
                                    </li>
                                    <li><b>Influence on Corporate Culture:</b> His emphasis on a unique workplace culture has inspired many companies to rethink their approach to employee management and innovation.</li>
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
                                    Reed Hastings’s journey from a software entrepreneur to the co-founder and CEO of Netflix exemplifies his commitment to innovation and disruption in the entertainment industry. His leadership has not only transformed Netflix into a global powerhouse but also left a lasting impact on how media is consumed worldwide.
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