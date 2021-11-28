import React from 'react'

const Blog1 = () => {
    return (
        <div>
            <header>
                <div className="header">
                    <h1>Blog1</h1>
                </div>
            </header>
            <hr></hr>
            <div className="Blog1-blog">
                    <div className="margin1-blog1">
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
                <hr></hr>
                <div className="footer">
                    <footer>
                        <p>Copyright &copy; HelloWorld.com</p>
                    </footer>
                </div>
        </div>
    )
}

export default Blog1
