function Footer(props){
    const {handleModal, data} = props

    return(
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>{data?.title}</h1>
                <h2>APOD Project</h2>
            </div>
            <button className="moreInfo" onClick={handleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}

export default Footer