import './oprahwin.css'
import image1 from '../assets/OprahWinfrey.png'
export default function Oprah_Winfrey() {
    const billionaireName = "Oprah Winfrey"
    return <>
        <div className="container">
            <div className='row oprahBody my-5'>
                <div className='card-group'>
                    <div className="card oprahCard">
                        <div className="card-body " style={{ boxShadow: '1px 1px 1px wheat,-1px -1px 1px wheat' }}>
                            <h5 className="card-title">{billionaireName}</h5>
                            <span><b>American host and television producer
                            </b>
                            </span>
                            <p className="card-text" >
                                Oprah Gail Winfrey, known mononymously as Oprah, is an American talk show host, television producer, actress, author, and media proprietor. She is best known for her talk show, The Oprah Winfrey Show, broadcast from Chicago, which ran in national syndication for 25 years, from 1986 to 2011. Her net worth is 300 crores USD as per October 2024<br />
                            </p>
                        </div>
                    </div>
                    <div className="card oprahCard" >
                        <img src={image1} alt="" className='image' />
                    </div>
                </div>
            </div>
            <div className='row text-center my-5' style={{ boxShadow: '1px 2px 2px black,-1px -1px 2px black' }}><h2>About {billionaireName}</h2></div>
            <div className="row oprahBody">

                <div className="card-group">
                    <div className="card oprahCard">
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
                                id="list-careerEarly-list"
                                data-bs-toggle="list"
                                href="#list-careerEarly"
                                role="tab"
                                aria-controls="list-careerEarly"
                            >
                                Early Career
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-riseToFame-list"
                                data-bs-toggle="list"
                                href="#list-riseToFame"
                                role="tab"
                                aria-controls="list-riseToFame"
                            >
                                Rise to Fame
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-businessVentures-list"
                                data-bs-toggle="list"
                                href="#list-businessVentures"
                                role="tab"
                                aria-controls="list-businessVentures"
                            >
                                Business Ventures
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
                                id="list-awardAndRecognition-list"
                                data-bs-toggle="list"
                                href="#list-awardAndRecognition"
                                role="tab"
                                aria-controls="list-awardAndRecognition"
                            >
                                Award and Recognition
                            </a>
                            <a
                                className="list-group-item list-group-item-action"
                                id="list-legacy-list"
                                data-bs-toggle="list"
                                href="#list-legacy"
                                role="tab"
                                aria-controls="list-legacy"
                            >
                                Legacy
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
                    <div className="card oprahCard">
                        <div className="tab-content" id="nav-tabContent" style={{ boxShadow: '1px 2px 2px black,-1px -1px 2px black' }}>
                            <div
                                className="tab-pane fade show active"
                                id="list-earlylife"
                                role="tabpanel"
                                aria-labelledby="list-earlylife-list"
                            >

                                <ul >
                                    <h2>Early Life</h2>
                                    <li><b>Birth and Family Background:</b> Oprah Gail Winfrey was born on January 29, 1954, in Kosciusko, Mississippi. She was raised in poverty by her single mother, Vernita Lee, and experienced a challenging childhood marked by instability and hardship.</li>

                                    <li><b>Education:</b> Oprah attended Nicolet High School in Wisconsin and later transferred to the University of Wisconsin-Madison on a full scholarship, where she studied communication.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-careerEarly"
                                role="tabpanel"
                                aria-labelledby="list-careerEarly-list"
                            >
                                <ul>
                                    <h2>Early Career</h2>
                                    <li><b>Media Beginnings:</b> Oprah began her career in media at a young age, working as a news anchor for a local television station in Nashville while still in college.</li>

                                    <li><b>The Oprah Winfrey Show:</b> In 1986, she launched "The Oprah Winfrey Show," which quickly became a nationally syndicated talk show and one of the most popular in television history.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-riseToFame"
                                role="tabpanel"
                                aria-labelledby="list-riseToFame-list"
                            >
                                <ul>
                                    <h2>Rise to Fame</h2>
                                    <li><b>Cultural Impact:</b> The show addressed a variety of topics, including personal development, spirituality, and social issues. Oprah's empathetic interviewing style and focus on personal stories resonated with millions of viewers.</li>

                                    <li><b>Book Club and Influence:</b> Oprah's Book Club, launched in 1996, became a cultural phenomenon, significantly boosting book sales and introducing many authors to a wider audience.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-businessVentures"
                                role="tabpanel"
                                aria-labelledby="list-businessVentures-list"
                            >
                                <ul>
                                    <h2>Business Ventures</h2>
                                    <li><b>Production Company:</b> Oprah founded Harpo Productions in 1986, which produced her talk show and other successful projects, including films and documentaries</li>
                                    <li><b>OWN Network:</b> In 2011, she launched the Oprah Winfrey Network (OWN), focusing on inspirational programming and lifestyle content.</li>
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
                                    <li><b>Charitable Efforts:</b> Oprah is known for her philanthropic work, including the establishment of the Oprah Winfrey Foundation and the Oprah Winfrey Operating Foundation. She has donated millions to education, healthcare, and empowerment initiatives.</li>
                                    <li><b>Oprah Winfrey Foundation:</b> The foundation supports various causes, including education for girls in Africa and disaster relief efforts.</li>
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
                                    <li><b>Relationships:</b> Oprah has been in a long-term relationship with Stedman Graham since 1986. Although they are not married, they consider each other partners in life.</li>
                                    <li>
                                        <b>Health and Wellness:</b> Oprah is an advocate for health and wellness, sharing her personal journey with weight loss and mental health struggles, which has resonated with many of her fans.
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-awardAndRecognition"
                                role="tabpanel"
                                aria-labelledby="list-awardAndRecognition-list"
                            >
                                <ul>
                                    <h2>Award and Recognition</h2>
                                    <li><b>Achievements:</b> Over her career, Oprah has received numerous awards, including multiple Daytime Emmy Awards, the Presidential Medal of Freedom, and the Cecil B. DeMille Award at the Golden Globes.</li>
                                    <li><b>Influence:</b> Time magazine has named her one of the 100 most influential people in the world multiple times, and she is often cited as one of the most powerful women in media.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-legacy"
                                role="tabpanel"
                                aria-labelledby="list-legacy-list"
                            >
                                <ul>
                                    <h2>Legacy</h2>
                                    <li><b>Cultural Icon:</b> Oprah Winfrey is considered a cultural icon and a pioneer for African American women in the media. Her impact on television, literature, and philanthropy has left a lasting legacy.</li>
                                    <li><b>Inspiration:</b> She has inspired countless individuals to pursue their dreams and use their voices for change, encouraging a focus on personal growth and community service.</li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-conclusion"
                                role="tabpanel"
                                aria-labelledby="list-conclusion-list"
                            >
                                <ul>
                                    <h2>Conclusion
                                    </h2>
                                    <li>
                                        Oprah Winfrey’s journey from a challenging childhood to becoming a global media leader and philanthropist exemplifies resilience, determination, and the power of storytelling. Her influence continues to inspire millions around the world, making her one of the most impactful figures in modern history.
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