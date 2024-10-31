import './warrenbuffet.css'
import image1 from '../assets/WarrenBuffet.png'
export default function Warren_Buffett() {
    const billionaireName = "Warren Buffet"
    return <>
        <div className="container">
            <div className='row buffetbody my-5'>
                <div className='card-group'>
                    <div className="card buffetcard">
                        <div className="card-body " style={{ boxShadow: '1px 1px 1px wheat,-1px -1px 1px wheat' }}>
                            <h5 className="card-title">{billionaireName}</h5>
                            <span><b>Chairperson of Berkshire Hathaway
                            </b>
                            </span>
                            <p className="card-text" >
                                Warren Edward Buffett is an American businessman, investor, and philanthropist who currently serves as the chairman and CEO of Berkshire Hathaway. As a result of his investment success, Buffett is one of the best-known investors in the world. And his net worth is as per October 2024, 14,630 crores USD.
                            </p>
                        </div>
                    </div>
                    <div className="card buffetcard" >
                        <img src={image1} alt="" className='image' />
                    </div>
                </div>
            </div>
            <div className='row text-center my-5' style={{ boxShadow: '1px 2px 2px black,-1px -1px 2px black' }}><h2>About {billionaireName}</h2></div>
            <div className="row buffetbody">

                <div className="card-group">
                    <div className="card buffetcard">
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
                                id="list-berkshireHathway-list"
                                data-bs-toggle="list"
                                href="#list-berkshireHathway"
                                role="tab"
                                aria-controls="list-berkshireHathway"
                            >
                                Building Berkshire Hathaway
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-investmentPhilosophy-list"
                                data-bs-toggle="list"
                                href="#list-investmentPhilosophy"
                                role="tab"
                                aria-controls="list-investmentPhilosophy"
                            >
                                Investment Philosophy
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
                    <div className="card buffetcard">
                        <div className="tab-content" id="nav-tabContent" style={{ boxShadow: '1px 2px 2px black,-1px -1px 2px black' }}>
                            <div
                                className="tab-pane fade show active"
                                id="list-earlylife"
                                role="tabpanel"
                                aria-labelledby="list-earlylife-list"
                            >

                                <ul >
                                    <h2>Early Life</h2>
                                    <li><b>Birth and Family Background:</b> Warren Edward Buffett was born on August 30, 1930, in Omaha, Nebraska. He was the second of three children in a family that valued education and hard work. His father, Howard Buffett, was a stockbroker and U.S. Congressman.</li>
                                    <li><b>Education:</b> Buffett showed an early interest in business and investing. He attended the Wharton School at the University of Pennsylvania before transferring to the University of Nebraska-Lincoln, where he earned a Bachelor of Science in Business Administration. He later obtained a Master of Science in Economics from Columbia University.</li>
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
                                    <li><b>First Investments:</b> Buffett started his career in investing at a young age, selling chewing gum and newspapers. He invested in stocks and real estate during his teenage years, demonstrating an early talent for business.</li>
                                    <li><b>Mentorship under Benjamin Graham:</b> At Columbia, Buffett studied under Benjamin Graham, known as the father of value investing. This mentorship significantly influenced Buffett's investment philosophy.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-berkshireHathway"
                                role="tabpanel"
                                aria-labelledby="list-berkshireHathway-list"
                            >
                                <ul>
                                    <h2>Building Berkshire Hathaway
                                    </h2>
                                    <li><b>Acquisition of Berkshire Hathaway:</b> In 1965, Buffett took control of Berkshire Hathaway, a struggling textile manufacturing company. He began to reshape the company into an investment vehicle.</li>
                                    <li>
                                        <b>Diversification:</b> Under Buffett’s leadership, Berkshire Hathaway diversified its portfolio, acquiring companies in various industries, including insurance (GEICO), utilities, and consumer goods (Coca-Cola).
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-investmentPhilosophy"
                                role="tabpanel"
                                aria-labelledby="list-investmentPhilosophy-list"
                            >
                                <ul>
                                    <h2>Investment Philosophy</h2>
                                    <li><b>Value Investing:</b> Buffett is renowned for his value investing approach, focusing on acquiring undervalued companies with strong fundamentals. He emphasizes long-term investments and a thorough understanding of businesses.</li>
                                    <li><b>The “Oracle of Omaha”:</b> His successful investment strategies and consistent performance earned him the nickname “The Oracle of Omaha,” and he became one of the world's richest individuals.</li>
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
                                    <li><b>Giving Pledge:</b> Buffett is a strong advocate for philanthropy. In 2006, he announced his plan to give away the majority of his wealth, pledging to donate over 99% of his fortune to charitable causes.

                                    </li>
                                    <li><b>Buffett Foundation:</b> He has supported various philanthropic initiatives through the Susan Thompson Buffett Foundation, focusing on education, healthcare, and poverty alleviation.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-awardAndRecog"
                                role="tabpanel"
                                aria-labelledby="list-awardAndRecog-list"
                            >
                                <ul>
                                    <h2>Awards and Recognition</h2>
                                    <li><b>Business Honors:</b> Buffett has received numerous accolades for his contributions to finance and philanthropy, including the Presidential Medal of Freedom in 2011.</li>
                                    <li>
                                    <b>Influence on Investing:</b> He is widely regarded as one of the most influential investors of all time, with many investors and business leaders citing him as a role model.
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
                                    <h2>Legacy and Impact
                                    </h2>
                                    <li><b>Financial Wisdom:</b> Warren Buffett's investment strategies and insights have shaped modern investing practices. His annual letters to Berkshire Hathaway shareholders are highly regarded for their wisdom and practicality.</li>
                                    <li><b>Cultural Icon:</b> Buffett’s down-to-earth persona, combined with his financial acumen, has made him a cultural icon, inspiring generations of investors and entrepreneurs.</li>
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
                                    <li><b>Family:</b> Buffett married Susan Thompson in 1952, and they had three children. After her passing in 2004, he remarried Astrid Menks in 2006. He values family and has instilled the importance of financial literacy in his children.</li>
                                    <li>
                                    <b>Lifestyle:</b> Despite his immense wealth, Buffett is known for his frugal lifestyle. He still resides in the same house he bought in 1958 and enjoys simple pleasures, such as playing bridge and reading.
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
                                    Warren Buffett’s journey from a young boy with a passion for business to one of the wealthiest and most respected investors in the world exemplifies hard work, intelligence, and a commitment to philanthropy. His legacy continues to influence the fields of finance and charitable giving, making a lasting impact on society.
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