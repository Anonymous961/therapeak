const Chatbox = () => {
    return (
        <div>
            <div className="container">
                <div className="leftSide">
    
                    <div className="header">
                
                            <h4> Your friends</h4>
                        
                        <ul className="nav_icons">
                            <li><ion-icon name="scan-circle-outline"></ion-icon></li>
                            <li><ion-icon name="chatbox"></ion-icon></li>
                            <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
                        </ul>
                    </div>
                   
                    <div className="search_chat">
                        <div>
                            <input type="text" placeholder="Search or start new chat"/>
                            <ion-icon name="search-outline"></ion-icon> 
                        </div>                
                    </div>
                   
                    <div className="chatlist">
                        <div className="block active">
                            <div className="imgBox">
                                <img src="data:image/png;base64,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" className="cover" alt=""/>
                            </div>
                            <div className="details">
                                <div className="listHead">
                                    <h4>Pumpkin Pie</h4>
                                    <p className="time">10:56</p>
                                </div>
                                <div className="message_p">
                                    <p>How are you doing?</p>
                                </div>
                            </div>
                        </div>
        
                        <div className="block unread">
                            <div className="imgBox">
                                <img src="data:image/png;base64,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" className="cover" alt=""/>
                            </div>
                            <div className="details">
                                <div className="listHead">
                                    <h4>Butter Melon</h4>
                                    <p className="time">12:34</p>
                                </div>
                                <div className="message_p">
                                    <p>I love your youtube videos!</p>
                                    <b>1</b>
                                </div>
                            </div>
                        </div>
        
                        <div className="block unread">
                            <div className="imgBox">
                                <img src="data:image/png;base64,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" className="cover" alt=""/>
                            </div>
                            <div className="details">
                                <div className="listHead">
                                    <h4>Cotton Candy</h4>
                                    <p className="time">Yesterday</p>
                                </div>
                                <div className="message_p">
                                    <p>I just subscribed to your channel</p>
                                    <b>2</b>
                                </div>
                            </div>
                        </div>
                        
                        
                        
                        
                    </div>
                </div>
                <div className="rightSide">
                    <div className="header">
                        <div className="imgText">
                            <div className="userimg">
                                <img src="data:image/png;base64,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" alt="" className="cover"/>
                                </div>
                            <h4>Pumpkin Pie<br/><span>online</span></h4>
                        </div>
                        <ul className="nav_icons">
                            <li><ion-icon name="search-outline"></ion-icon></li>
                            <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
                        </ul>
                    </div>
        
                    
                    <div className="chatbox">
                        <div className="message my_msg">
                            <p>Hi <br/><span>12:18</span></p>
                        </div>
                        <div className="message friend_msg">
                            <p>Hey <br/><span>12:18</span></p>
                        </div>
                        <div className="message my_msg">
                            <p>Where are you from?<br/><span>12:15</span></p>
                        </div>
                        <div className="message friend_msg">
                            <p>I am from Amsterdam. Wbu? <br/><span>12:15</span></p>
                        </div>
                        <div className="message my_msg">
                            <p>I am from Delhi, India.<br/><span>12:15</span></p>
                        </div>
                        <div className="message friend_msg">
                            <p>How old are you? <br/><span>12:15</span></p>
                        </div>
                        <div className="message my_msg">
                            <p>I am 21. Wbu? <br/><span>12:15</span></p>
                        </div>
                        <div className="message friend_msg">
                            <p>Great. I am 19<br/><span>12:15</span></p>
                        </div>
                        <div className="message my_msg">
                            <p>Amsterdam is a great place tbh<br/><span>12:15</span></p>
                        </div>
                        <div className="message friend_msg">
                            <p>I have heard about India greatly too.<br/><span>12:15</span></p>
                        </div>
                        <div className="message my_msg">
                            <p> Happy to hear that<br/><span>12:15</span></p>
                        </div>
                        <div className="message friend_msg">
                            <p> How are you doing? <br/><span>12:15</span></p>
                        </div>
                        
                    </div>
                    
                  
                    <div className="chat_input">
                        <ion-icon name="happy-outline"></ion-icon>
                    
                        <input type="text" placeholder="Type a message"/>
                        <ion-icon name="mic"></ion-icon>
                    </div>
                </div>
            </div>
        
        
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    );
}