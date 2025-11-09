import FooterMenu from './FooterMenu.jsx'
import FooterEdit from './FooterEdit.jsx'


function Footer() {
    return (
        <footer>
            <div className="conteiner max-w-360 mx-auto my-4">
                <div className="flle flex justify-between items-center">
                    <div className="flrx flex gap-4">
                        <div className='flex gap-4'>
                            <FooterMenu>
                                <p>More Behance</p>
                                <img src="./vector-1.png" />
                            </FooterMenu>
                            <FooterMenu>
                                <p>English</p>
                                <img src="./vector-1.png" />
                            </FooterMenu>
                        </div>
                        <div className='flex gap-4 font-semibold'>
                            <FooterEdit Tab='a' >
                                TOU
                            </FooterEdit>
                            <FooterEdit Tab='p'>
                                Privacy
                            </FooterEdit>
                            <FooterEdit>
                                Community
                            </FooterEdit>
                            <FooterEdit>
                                Help
                            </FooterEdit>
                            <FooterEdit>
                                Cookie preferences
                            </FooterEdit>
                            <FooterEdit>
                                Do not sell or share my personal information
                            </FooterEdit>
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <a href="#"> <img src="./adobe.png" /> </a>
                    </div>


                </div>
            </div>
        </footer>
    )
}

export default Footer
