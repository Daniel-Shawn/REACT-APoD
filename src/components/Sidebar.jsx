
function Sidebar(props){
    const {handleModal, data} = props

    return(
        <div className="sidebar">
            <div className="bgOverlay"></div>
            <div className="sidebarContent">
                <h2>{data?.title}</h2>
                <div>
                    <div className="description">
                    <p>Description:</p>
                    <p>Date:{data?.date}</p>
                    </div>
                    <p>{data?.explanation}</p>
                </div>
                <button className="closeInfo" onClick={handleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Sidebar


