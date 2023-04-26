import './styles/journal.css'

const Journal = () => {
    return ( 
        <>
        <div className="containerr">
            <div className="left">
                <div className="entry">
                    <input type="text" id="entry" placeholder="Tell me what happened today ❤️‍🩹"/>
                </div>
                <button>Submit</button>
            </div>
            <div className="right">
                <div className="textt">
                    <h1 className='journal-heading'> Let out your thoughts. 🧘🏻  </h1>
                    <h2 className='journal-text1'>
                        Often releasing your thoughts out in a diary makes you feel much better. So note down or record all that you want to rant and the entry remains with you. We will predict how your day was .... 
                    </h2>
                    <h3 className='journal-text2'>
                        Sounds interesting right?
                    </h3>
                <h4 className='journal-text3'>
                    Then c'mmon, start recording 
                </h4>
                <img src="https://i.postimg.cc/13nVvSm5/607f7d902f5de-unscreen.gif"/>
                </div>
            </div>
        </div>
        </>
    );
}
export default Journal;