import ContainerEdit from "./ContainerEdit.jsx"
import MURAL from "../assets/images/MURAL.png"
import like from "../assets/images/likes.png"
import view from "../assets/images/views.png"
import ARABIA from "../assets/images/ARABIA.png"
import SETTLE from "../assets/images/SETTLE.png"
import Character from "../assets/images/Character.png"

function ThirdContainer() {
    return (
        <section>
            <div className="conteiner max-w-348 mx-auto pb-10 mt-6">
                <div className="grirflex flex   gap-5  ">
                    <ContainerEdit>
                        <img src={MURAL} />
                        <div className="flex gap-5.25 group justify-between">
                            <div className="arcade">
                                <p className="font-bold">NANTES MURAL</p>
                                <p className="font-light text-0.5">OCU .</p>
                            </div>
                            <div className="flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <p className="font-bold">64</p>
                                <img src={view} alt="" />
                                <p className="font-bold">529</p>
                            </div>
                        </div>

                    </ContainerEdit>
                    <ContainerEdit>
                        <img src={ARABIA} />
                        <div className="flex gap-5.25 group justify-between">
                            <div className="arcade">
                                <p className="font-bold">VOGUE ARABIA 2023</p>
                                <p className="font-light text-0.5">Agnieszka Hoscilo</p>
                            </div>
                            <div className="flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <p className="font-bold">95</p>
                                <img src={view} alt="" />
                                <p className="font-bold">616</p>
                            </div>
                        </div>

                    </ContainerEdit>
                    <ContainerEdit>
                        <img src={SETTLE} />
                        <div className="flex gap-5.25 group justify-between">
                            <div className="arcade">
                                <p className="font-bold">NEVER SETTLE – FREELETICS</p>
                                <p className="font-bold">AD 2021</p>
                               <div className="flex items-center gap-1">
                                  <p className="font-light text-0.5">Multiple Owners</p>
                                <img src="./vector-1.png" alt="vector" />
                               </div>
                           
                            </div>
                            <div className="flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <p className="font-bold">617</p>
                                <img src={view} alt="" />
                                <p className="font-bold">5.5k</p>
                            </div>
                        </div>

                    </ContainerEdit>
                    <ContainerEdit>
                        <img src={Character} />
                        <div className="flex gap-5.25 group justify-between">
                            <div className="arcade">
                                <p className="font-bold">Arab Character Design</p>
                                <p className="font-light text-0.5">serag basel™</p>
                            </div>
                            <div className="flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <p className="font-bold">336</p>
                                <img src={view} alt="" />
                                <p className="font-bold">1.8k</p>
                            </div>
                        </div>

                    </ContainerEdit>
                </div>
            </div>
        </section>
    )
}

export default ThirdContainer;
