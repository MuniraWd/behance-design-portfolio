import ContainerEdit from "./ContainerEdit.jsx"
import card from "../assets/images/card.png"
import like from "../assets/images/likes.png"
import view from "../assets/images/views.png"
import plant from "../assets/images/plant.png"
import beetl from "../assets/images/beetl.png"
import fish from "../assets/images/fish.png"

function CarContainer() {
    return (
        <section>
            <div className="conteiner max-w-348 mx-auto pb-10 mt-6">
                <div className="grirflex flex   gap-5  ">
                    <ContainerEdit>
                        <img src={card} />
                        <div className="flex gap-5.25 group justify-between">
                            <div className="arcade">
                                <p className="font-bold">Onça</p>
                                <p className="font-light text-0.5">Alejandro Gavancho</p>
                            </div>
                            <div className="flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <p className="font-bold">95</p>
                                <img src={view} alt="" />
                                <p className="font-bold">456</p>
                            </div>
                        </div>

                    </ContainerEdit>
                    <ContainerEdit>
                        <img src={plant} />
                        <div className="flex gap-5.25 group justify-between">
                            <div className="arcade">
                                <p className="font-bold">VARNE</p>
                                <p className="font-light text-0.5">Mahmod Mowafy</p>
                            </div>
                            <div className="flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <p className="font-bold">95</p>
                                <img src={view} alt="" />
                                <p className="font-bold">231</p>
                            </div>
                        </div>

                    </ContainerEdit>
                    <ContainerEdit>
                        <img src={beetl} />
                        <div className="flex gap-5.25 group justify-between">
                            <div className="arcade">
                                <p className="font-bold">Sunday Best & Someday</p>
                                <p className=" font-bold">Studio for BEETL</p>

                                <div className="flex items-center gap-1">
                                    <p className="font-light text-0.5">Multiple Owners</p>
                                    <img src="./vector-1.png" alt="vector" />
                                </div>

                            </div>
                            <div className="flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <p className="font-bold">444</p>
                                <img src={view} alt="" />
                                <p className="font-bold">1k</p>
                            </div>
                        </div>

                    </ContainerEdit>
                    <ContainerEdit>
                        <img src={fish} />
                        <div className="flex gap-5.25 group justify-between">
                            <div className="arcade">
                                <p className="font-bold">cool fish</p>
                                <p className="font-light text-0.5">Johann Banta</p>
                            </div>
                            <div className="flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <p className="font-bold">245</p>
                                <img src={view} alt="" />
                                <p className="font-bold">786</p>

                            </div>
                        </div>

                    </ContainerEdit>
                </div>
            </div>
        </section>
    )
}

export default CarContainer;
