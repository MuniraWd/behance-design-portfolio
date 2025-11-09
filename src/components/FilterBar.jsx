import IconButtonFilter from './IconButtonFilter';
import icon1 from '../assets/images/icon-1.png';
import icon2 from '../assets/images/icon-2.png';
import icon3 from '../assets/images/icon-3.png';
import icon4 from '../assets/images/icon-4.png';
import icon5 from '../assets/images/icon-5.png';
import icon6 from '../assets/images/icon-6.png';
import icon7 from '../assets/images/icon-7.png';


const FilterBar = () => {
    return (

        <section className='mt-6 pb-6'>
            <div className='container mx-auto '>
                <div className='flex justify-betwwen gap-3'>
                    <div className='flex items-center gap-1.5'>

                        <IconButtonFilter>
                            <img src={icon1} alt="icon" />
                            <span>Creative Fields</span>
                            <span>
                                <img src="/vector-1.png" alt="vector1" />
                            </span>
                        </IconButtonFilter>

                        <IconButtonFilter>
                            <img src={icon2} alt="icon" />
                            <span>Tools</span>
                            <span>
                                <img src="/vector-1.png" alt="vector1" />
                            </span>
                        </IconButtonFilter>

                        <IconButtonFilter>
                            <img src={icon3} alt="icon" />
                            <span>Color</span>
                            <span>
                                <img src="/vector-1.png" alt="vector1" />
                            </span>
                        </IconButtonFilter>

                        <IconButtonFilter>
                            <img src={icon4} alt="icon" />
                            <span>Location</span>
                            <span>
                                <img src="/vector-1.png" alt="vector1" />
                            </span>
                        </IconButtonFilter>

                        <IconButtonFilter>
                            <img src={icon5} alt="icon" />
                            <span>Schools</span>
                            <span>
                                <img src="/vector-1.png" alt="vector1" />
                            </span>
                        </IconButtonFilter>

                        <IconButtonFilter>
                            <img src={icon6} alt="icon" />
                            <span>Assets</span>
                            <span>
                                <img src="/vector-1.png" alt="vector1" />
                            </span>
                        </IconButtonFilter>

                        <IconButtonFilter>
                            <img src={icon7} alt="icon" />
                            <span>Subscriptions</span>
                            <span>
                                <img src="/vector-1.png" alt="vector1" />
                            </span>
                        </IconButtonFilter>

                         <IconButtonFilter>
                            <img src={icon6} alt="icon" />
                            <span>Adress Link</span>
                            <span>
                                <img src="/vector-1.png" alt="vector1" />
                            </span>
                        </IconButtonFilter>
                         <IconButtonFilter>
                            <img src={icon5} alt="icon" />
                            <span>Education Side</span>
                            <span>
                                <img src="/vector-1.png" alt="vector1" />
                            </span>
                        </IconButtonFilter>
                        

                    </div>

                    <div className='justify-space-between '>
                        <span>Sort</span>
                        <div className="flex justify-space-between items-center gap-1">
                            <p className="font-light text-0.5">Recommended</p>
                            <img src="./vector-1.png" alt="vector" />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
};

export default FilterBar;
