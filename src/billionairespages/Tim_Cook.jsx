import './timcook.css'
import image1 from '../assets/Timcook.png'
export default function Tim_Cook(){
    const billionaireName= "Tim Cook"
    return <>
    
    <div className="container">
            <div className='row timbody my-5'>
                <div className='card-group'>
                    <div className="card timcard">
                        <div className="card-body " style={{ boxShadow: '1px 1px 1px wheat,-1px -1px 1px wheat' }}>
                            <h5 className="card-title">{billionaireName}</h5>
                            <span><b>CEO of Apple</b>
                            </span>
                            <p className="card-text" >
                            Timothy Donald Cook is an American business executive who is the current chief executive officer of Apple Inc. Cook had previously been the company's chief operating officer under its co-founder Steve Jobs. And His Net worth is 230 crores USD as per October 2024.
                            </p>
                        </div>
                    </div>
                    <div className="card timcard" >
                        <img src={image1} alt="" className='image' />
                    </div>
                </div>
            </div>
            <div className='row text-center my-5' style={{ boxShadow: '1px 2px 2px black,-1px -1px 2px black' }}><h2>About {billionaireName}</h2></div>
            <div className="row timbody">

                <div className="card-group">
                    <div className="card timcard">
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
                                id="list-joiningApple-list"
                                data-bs-toggle="list"
                                href="#list-joiningApple"
                                role="tab"
                                aria-controls="list-joiningApple"
                            >
                                Joining Apple
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-risingToLeader-list"
                                data-bs-toggle="list"
                                href="#list-risingToLeader"
                                role="tab"
                                aria-controls="list-risingToLeader"
                            >
                                Rising to Leadership
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-leaderStyleAndVision-list"
                                data-bs-toggle="list"
                                href="#list-leaderStyleAndVision"
                                role="tab"
                                aria-controls="list-leaderStyleAndVision"
                            >
                                Leadership Style and Vision
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-socialResponsibility-list"
                                data-bs-toggle="list"
                                href="#list-socialResponsibility"
                                role="tab"
                                aria-controls="list-socialResponsibility"
                            >
                                Social Responsibility and Advocacy
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-awardAndRecog-list"
                                data-bs-toggle="list"
                                href="#list-awardAndRecog"
                                role="tab"
                                aria-controls="list-awardAndRecog"
                            >
                                Awards and Recognition
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
                    <div className="card timcard">
                        <div className="tab-content" id="nav-tabContent" style={{ boxShadow: '1px 2px 2px black,-1px -1px 2px black' }}>
                            <div
                                className="tab-pane fade show active"
                                id="list-earlylife"
                                role="tabpanel"
                                aria-labelledby="list-earlylife-list"
                            >

                                <ul >
                                    <h2>Early Life</h2>
                                    <li><b>Birth and Family Background:</b> Timothy Donald Cook was born on November 1, 1960, in Mobile, Alabama. He was raised in a working-class family, with his father working in a shipyard and his mother as a homemaker.</li>
                                    <li><b>Education:</b> Cook attended Auburn University, where he earned a Bachelor of Science in Industrial Engineering in 1982. He later received a Master of Business Administration (MBA) from Duke University's Fuqua School of Business in 1988.</li>
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
                                    <li><b>Initial Roles:</b> Cook began his career at IBM, where he worked in the company’s personal computer division. He then moved to the Intelligent Electronics division as a fulfillment manager.</li>
                                    <li><b>Diverse Experience:</b> Cook held positions at other technology companies, including Apple’s competitor, Compaq, and later joined a startup called Fabrik before returning to Apple.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-joiningApple"
                                role="tabpanel"
                                aria-labelledby="list-joiningApple-list"
                            >
                                <ul>
                                    <h2>Joining Apple</h2>
                                    <li><b>Joining Apple:</b> Tim Cook joined Apple in 1998 as Senior Vice President for Worldwide Operations. His expertise in supply chain management and operations was instrumental in transforming Apple’s manufacturing processes.</li>
                                    <li>
                                    <b>Operational Success:</b> Under Cook’s leadership, Apple improved its inventory management and streamlined its supply chain, which contributed to the company's profitability and efficiency.
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-risingToLeader"
                                role="tabpanel"
                                aria-labelledby="list-risingToLeader-list"
                            >
                                <ul>
                                    <h2>Rising to Leadership</h2>
                                    <li><b>Chief Operating Officer:</b> In 2005, Cook was promoted to Chief Operating Officer (COO) and continued to play a crucial role in Apple's growth, overseeing the company's worldwide sales and operations.</li>
                                    <li><b>Transition to CEO:</b> In August 2011, Cook was named CEO of Apple, succeeding Steve Jobs, who resigned due to health issues. Cook had been a close associate of Jobs and was well-prepared for the role.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-leaderStyleAndVision"
                                role="tabpanel"
                                aria-labelledby="list-leaderStyleAndVision-list"
                            >
                                <ul>
                                    <h2>Leadership Style and Vision</h2>
                                    <li><b>Management Philosophy:</b> Tim Cook is known for his collaborative leadership style, emphasis on operational excellence, and focus on sustainability and social responsibility.</li>
                                    <li><b>Product Innovation:</b> Under Cook’s leadership, Apple launched several key products, including the Apple Watch, AirPods, and advancements in the iPhone series, continuing to push the boundaries of technology.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-socialResponsibility"
                                role="tabpanel"
                                aria-labelledby="list-socialResponsibility-list"
                            >
                                <ul>
                                    <h2>Social Responsibility and Advocacy</h2>
                                    <li><b>Privacy and Security:</b> Cook has been a strong advocate for user privacy and data security, positioning Apple as a leader in protecting consumer data in the tech industry.</li>
                                    <li><b>Environmental Initiatives:</b> He has committed Apple to sustainability, ensuring that the company’s operations are carbon neutral by 2030 and advocating for renewable energy.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-awardAndRecog"
                                role="tabpanel"
                                aria-labelledby="list-awardAndRecog-list"
                            >
                                <ul>
                                    <h2>Awards and Recognition
                                    </h2>
                                    <li><b>Industry Honors:</b> Cook has received numerous awards and recognitions for his leadership and contributions to technology, including being named to TIME magazine's list of the 100 most influential people multiple times.</li>
                                    <li><b>Civic Engagement:</b> He has been recognized for his commitment to social causes and corporate responsibility, influencing business practices worldwide.</li>
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
                                    <li><b>Private Individual:</b> Tim Cook is known for being private about his personal life. He enjoys outdoor activities and has a passion for fitness.</li>
                                    <li>
                                    <b>Advocacy for Equality:</b> Cook is openly gay, making him one of the first openly LGBTQ+ CEOs of a Fortune 500 company. He has been an advocate for LGBTQ+ rights and diversity in the workplace.
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
                                    <h2>Legacy and Impact</h2>
                                    <li>
                                    <b>Transformation of Apple:</b> Cook has successfully transitioned Apple into a services-oriented company, focusing on software and digital services alongside hardware.
                                    </li>
                                    <li>
                                    <b>Global Influence:</b> His leadership has solidified Apple’s position as one of the most valuable companies in the world, impacting technology, business, and culture.
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
                                    Tim Cook’s journey from a small-town boy in Alabama to the CEO of Apple exemplifies resilience, innovation, and a commitment to social responsibility. His leadership continues to shape the future of technology, making a lasting impact on the industry and society.
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