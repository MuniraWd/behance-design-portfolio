import ContainerEdit from "./ContainerEdit.jsx"
import MLB from "../assets/images/MLB.png"
import like from "../assets/images/likes.png"
import view from "../assets/images/views.png"
import digital from "../assets/images/digital.png"
import Nestor from "../assets/images/Nestor.png"
import Magazine from "../assets/images/Magazine.png"

function ForthContainer() {
    return (
        <section>
            <div className="conteiner max-w-348 mx-auto pb-10 mt-6">
                <div className="grirflex flex   gap-5  ">
                    <ContainerEdit>
                        <img src={MLB} />
                        <div className="imagegroup flex gap-5.25 group justify-between">
                            <div className="arcade">
                                <p className="font-bold">Bally Sports | MLB 2022</p>
                                <p className="font-light text-0.5">|drive| studio</p>
                            </div>
                            <div className="magee flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <p className="font-bold">317</p>
                                <img src={view} alt="" />
                                <p className="font-bold">5.2k</p>
                            </div>
                        </div>

                    </ContainerEdit>
                    <ContainerEdit>
                        <img src={digital} />
                        <div className="imagegroup flex gap-5.25 group justify-between">
                            <div className="arcade">
                                <p className="font-bold">A digital heaven for</p>
                                <p className="font-bold"> perfume enthusiasts</p>
                                <p className="font-light text-0.5">Vasava Studio</p>
                            </div>
                            <div className="magee flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <p className="font-bold">202</p>
                                <img src={view} alt="" />
                                <p className="font-bold">1.9k</p>
                            </div>
                        </div>

                    </ContainerEdit>
                    <ContainerEdit>
                        <img src={Nestor} />
                        <div className="imagegroup flex gap-5.25 group justify-between">
                            <div className="arcade">
                                <p className="font-bold">Nestor Salinas</p>

                                <div className="flex items-center gap-1">
                                    <p className="font-light text-0.5">Multiple Owners</p>
                                    <img src="./vector-1.png" alt="vector" />
                                </div>
                            </div>

                            <div className="magee flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <p className="font-bold">2.4k</p>
                                <img src={view} alt="" />
                                <p className="font-bold">29.6k</p>
                            </div>
                        </div>

                    </ContainerEdit>
                    <ContainerEdit>
                        <img src={Magazine} />
                        <div className="imagegroup flex gap-5.25 group justify-between">
                            <div className="arcade">
                                <p className="font-bold">Increment Magazine</p>
                                <p className="font-light text-0.5">Myriam Wares</p>
                            </div>
                            <div className="magee flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <p className="font-bold">341</p>
                                <img src={view} alt="" />
                                <p className="font-bold">3.8k</p>
                            </div>
                        </div>

                    </ContainerEdit>
                </div>
            </div>
        </section>
    )
}

export default ForthContainer;
