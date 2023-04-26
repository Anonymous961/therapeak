import "./styles/popup.css";

const Popup = (props) => {
    // console.log(props)
    return (props.trigger)? ( 
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={()=>props.setTrigger(false)} style={{
                    width:"50px"
                }}>
                    <img src="https://i.postimg.cc/Cxj6G8nY/icons8-cancel-48.png" style={{maxWidth:"50px",maxHeight:"50px"}} alt="" />
                </button>
                {props.children}
            </div>
        </div>
     ):"";
}
 
export default Popup; 