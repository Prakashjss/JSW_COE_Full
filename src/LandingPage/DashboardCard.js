
const MainCard = () =>{
    return(

        <div className="main_card_group">
            <div className="row">

                <div className="card">
                    <div className="row d-flex">
                        <div className="w-75 card_details_div">
                            <h4>475</h4>
                            <span>Total Projects</span>
                        </div>
                         <div className="w-25 card_icon_div">
                          <img className="layer_img" src="/images/Icon_1.png" alt="Logo" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="row d-flex">
                        <div className="w-75 card_details_div">
                            <h4>270</h4>
                            <span>Registered Projects</span>
                        </div>
                        <div className="w-25 card_icon_div">
                          <img className="layer_img" src="/images/Icon_2.png" alt="Logo" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="row d-flex">
                        <div className="w-75 card_details_div">
                            <h4>156</h4>
                            <span>Completed Projects</span>
                        </div>
                         <div className="w-25 card_icon_div">
                          <img className="layer_img" src="/images/Icon_3.png" alt="Logo" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="row d-flex">
                        <div className="w-75 card_details_div">
                            <h4>89</h4>
                            <span>Vetted Projects</span>
                        </div>
                        <div className="w-25 card_icon_div">
                          <img className="layer_img" src="/images/Icon_4.png" alt="Logo" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="row d-flex">
                        <div className="w-75 card_details_div">
                            <h4>88</h4>
                            <span>Drafted Projects</span>
                        </div>
                        <div className="w-25 card_icon_div">
                          <img className="layer_img" src="/images/Icon_5.png" alt="Logo" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
} 

export default MainCard;