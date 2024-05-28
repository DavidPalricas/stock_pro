import "../css/info_button.css";
function Info_Button(){
    return(
        <button className="info_btn" onClick={()=> window.alert("O nosso sitema não garante backup de dados.")}> 
         !
        </button>
    )
}




export default Info_Button;