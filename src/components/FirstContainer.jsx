import ContainerEdit from "./ContainerEdit.jsx";
import car from "../assets/images/car.png";
import like from "../assets/images/likes.png";
import view from "../assets/images/views.png";
import illustration from "../assets/images/illustration.jpg";
import shadhow from "../assets/images/shadhow.jpg";
import cow from "../assets/images/cow.jpg"

function FirstContainer() {
    return (
        <section>
            <div className="conteiner max-w-348 mx-auto pb-10 mt-6 ">
                <div className="grirflex flex   gap-5  ">
                    <ContainerEdit>
                        <img src={car} />
                        <div className="flex gap-5.25 group justify-between ">
                            <div className="arcade">
                                <p className="font-bold">2d Arcade style experiments</p>
                                <p className="font-light text-0.5">ARCADE STUDIO</p>
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
                        <img src={illustration} />
                        <div className="imagegroup flex gap-5.25 group justify-between ">
                            <div className="arcade">
                                <p className="font-bold">Fashion Illustration Vol.22</p>
                                <p className="font-light text-0.5">SEUNGWON HONG</p>
                            </div>
                            <div className="flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <p className="font-bold">187</p>
                                <img src={view} alt="" />
                                <p className="font-bold">2K</p>
                            </div>
                        </div>

                    </ContainerEdit>
                    <ContainerEdit>
                        <img src={shadhow} />
                        <div className=" flex gap-5.25 group justify-between">
                            <div className="arcade">
                                <p className="font-bold">A search for mother</p>
                                <p className="font-light text-0.5">Bade Fuwa</p>
                            </div>
                            <div className="flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <p className="font-bold">56</p>
                                <img src={view} alt="" />
                                <p className="font-bold">547</p>
                            </div>
                        </div>

                    </ContainerEdit>
                    <ContainerEdit>
                        <img src={cow} />
                        <div className=" flex gap-5.25 group justify-between ">
                            <div className="arcade ">
                                <p className="font-bold">Cow Cow Cow!</p>
                          
                               <div className="flex items-center gap-1">
                                  <p className="font-light text-0.5">Multiple Owners</p>
                                <img src="./vector-1.png" alt="vector" />
                               </div>
                           
                            </div>
                            <div className="flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <p className="font-bold">784</p>
                                <img src={view} alt="" />
                                <p className="font-bold">3K</p>
                            </div>
                        </div>

                    </ContainerEdit>
                </div>
            </div>
        </section>
    )
}

export default FirstContainer;
