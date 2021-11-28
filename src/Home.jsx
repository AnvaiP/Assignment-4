import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [articles, setArticles] = useState([]);

    const getArticleData = async () => {
        try {
            const res = await fetch(
                `https://newsapi.org/v2/everything?q=microsoft&from=2021-11-27&sortBy=popularity&apiKey=51b7cb604144489b8603d78b321af69d`
            )

            const data = await res.json();
            console.log(new Date(), "Article data:", data.articles.map(article => article.title));
            setArticles(data.articles.map(article => article.title));
        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getArticleData();
        const interval = setInterval(() => {
            getArticleData();
        }, 5000);
        return () => clearInterval(interval);
    }, [])
    return (<div>
        <header>
            <div className="header">
                <h1>Assignment 4</h1>
            </div>
        </header>
        <hr></hr>

        <div className="main-content">
            <div className="home-main">
                <div className="Blog1">
                    <div className="margin1">
                        <Link className="link" to='/blog1'>
                            <h1>Blog 1</h1>
                        </Link>
                        <p>Date: 20 November 2021</p>
                        <img className="images" src="assets/Blog1.jpg"></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="Blog2">
                    <div className="margin2">
                        <Link className="link" to='/blog2'>
                            <h1>Blog 2</h1>
                        </Link>
                        <p>Date: 20 December 2021</p>
                        <img className="images" src="assets/Blog2.jpg"></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="Blog3">
                    <div className="margin3">
                        <Link className="link" to='/blog3'>
                            <h1>Blog 3</h1>
                        </Link>
                        <p>Date: 10 December 2021</p>
                        <img className="images" src="assets/Blog3.jpg"></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
            <div className="home-nav">
                <nav class="navq" style={{ border: "none", marginTop: "30px", color: 'Black', backgroundColor: 'lightgray' }}>
                    <h2 style={{ color: "Black" }}>Headlines</h2>
                    <ul style={{ paddingInlineStart: "0" }}>
                        {articles.map(Player => <li style={{ listStyle: 'none', margin: '10px auto' }}>{Player}</li>)}
                    </ul>
                </nav>
            </div>
        </div>
        <hr></hr>

        <div className="footer">
            <footer>
                <p>Copyright &copy; HelloWorld.com</p>
            </footer>
        </div>
    </div>)

}

export default Home
