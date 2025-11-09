import ContainerEdit from "./ContainerEdit.jsx"
import Metascale from "../assets/images/Metascale.png"
import like from "../assets/images/likes.png"
import view from "../assets/images/views.png"
import Domo from "../assets/images/Domo.png"
import Tvshow  from "../assets/images/Tvshow.png"
import ABCD from "../assets/images/ABCD.png"

function FifthContainer() {
    return (
        <section>
            <div className="conteiner max-w-348 mx-auto pb-10 mt-6">
                <div className="grirflex flex   gap-5  ">
                    <ContainerEdit>
                        <img src={Metascale} />
                        <div className="imagegroup flex gap-5.25 group justify-between">
                            <div className="arcade">
                                <p className="font-bold">Bagel - Metascale</p>
                                <div className="flex items-center gap-1">
                                  <p className="font-light text-0.5">Multiple Owners</p>
                                <img src="./vector-1.png" alt="vector" />
                               </div>
                            </div>
                            <div className="magee flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <p className="font-bold">95</p>
                                <img src={view} alt="" />
                                <p className="font-bold">616</p>
                            </div>
                        </div>

                    </ContainerEdit>
                    <ContainerEdit>
                        <img src={Domo} />
                        <div className="imagegroup flex gap-5.25 group justify-between">
                            <div className="arcade">
                                <p className="font-bold">Domo - Brand Identity</p>
                                 <div className="flex items-center gap-1">
                                  <p className="font-light text-0.5">Multiple Owners</p>
                                <img src="./vector-1.png" alt="vector" />
                               </div>
                            </div>
                            <div className="magee flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <p className="font-bold">82</p>
                                <img src={view} alt="" />
                                <p className="font-bold">1.9k</p>
                            </div>
                        </div>

                    </ContainerEdit>
                    <ContainerEdit>
                        <img src={Tvshow} />
                        <div className="imagegroup flex gap-5.25 group justify-between">
                            <div className="arcade">
                                <p className="font-bold">TV Show Duos</p>
                                <p className="font-light text-0.5">Jovana Randjelovic</p>
                            </div>
                            <div className="magee flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <p className="font-bold">1k</p>
                                <img src={view} alt="" />
                                <p className="font-bold">13k</p>
                            </div>
                        </div>

                    </ContainerEdit>
                    <ContainerEdit>
                        <img src={ABCD} />
                        <div className="imagegroup flex gap-5.25 group justify-between">
                            <div className="arcade">
                                <p className="font-bold">ABCD Consulting</p>
                                <p className="font-light text-0.5">Lissa Kravts</p>
                            </div>
                            <div className="magee flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <p className="font-bold">32</p>
                                <img src={view} alt="" />
                                <p className="font-bold">452</p>
                            </div>
                        </div>

                    </ContainerEdit>
                </div>
            </div>
        </section>
    )
}

export default FifthContainer;
