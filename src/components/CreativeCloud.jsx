import CreativeCloudEdit from "./CreativeCloudEdit.jsx"
import beautiful from "../assets/images/beautiful.jpg"
import creativelogo from "../assets/images/creativelogo.png";
import social from "../assets/images/social.jpg"
import photoshop from "../assets/images/photoshop.png"
import illustrator from "../assets/images/illustrator.png"
import ai from "../assets/images/ai.png"
import premiere from "../assets/images/premiere.png"
import pr from "../assets/images/pr.png"


function CreativeCloud() {
  return (
    <section className="py-13 bg-secondry">
      <div className="conteiner conteiner max-w-348 mx-auto">
        <div className="CCflex px-7.5 flex gap-15">
          <div className="cctext max-w-75 flex flex-col gap-7.5 justify-start items-start">
            <div className="header flex flex-col gap-1">
              <h1 className="font-bold">Create with Creative Cloud</h1>
              <p>Whatever you want to create, Adobe Creative Cloud has what you need to make it amazing.</p>
            </div>
            <button className=" bg-primary duration-300 hover:bg-black text-white font-bold hover:text-gray-400 px-4 py-2 rounded-full cursor-pointer">
              See all plans
            </button>
          </div>
          <div className="ccconteiner flex gap-4">
            <CreativeCloudEdit>
              <div>
                <img className="hover:scale-90 duration-300" src={social} />
              </div>
              <div className="flex gap-3 ">
                <div>
                  <img src={creativelogo} />
                </div>
                <div className="max-w-48">
                  <p className="font-bold">Creative Cloud All Apps</p>
                  <p className="font-light text-0.5">Easily create stunning social graphics, short videos, and web pages that make you stand out.</p>
                </div>
              </div>
            </CreativeCloudEdit>
            <CreativeCloudEdit>
              <div >
                <img className="hover:scale-90 duration-300" src={beautiful} />
              </div>
              <div className="flex gap-3 ">
                <div>
                  <img src={photoshop} />
                </div>
                <div className="max-w-48">
                  <p className="font-bold">Photoshop - Image editing & design</p>
                  <p className="font-light text-0.5">Create beautiful images, graphics, paintings, and 3D artwork on your desktop or iPad.</p>
                </div>
              </div>
            </CreativeCloudEdit>
            <CreativeCloudEdit>
              <div>
                <img className="hover:scale-90 duration-300" src={illustrator} />
              </div>
              <div className="flex gap-3 ">
                <div>
                  <img src={ai} />
                </div>
                <div className="max-w-48">
                  <p className="font-bold">Illustrator - Logos, icons & illustration</p>
                  <p className="font-light text-0.5">Create beautiful designs, icons, and more — then use them anyplace at any size.</p>
                </div>
              </div>
            </CreativeCloudEdit>
            <CreativeCloudEdit>
              <div>
                <img className="hover:scale-90 duration-300" src={premiere} />
              </div>
              <div className="flex gap-3 ">
                <div>
                  <img src={pr} />
                </div>
                <div className="max-w-48">
                  <p className="font-bold">Premiere Pro - Video editing</p>
                  <p className="font-light text-0.5">Create everything from social clips to feature films with the leading video editor.</p>
                </div>
              </div>
            </CreativeCloudEdit>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CreativeCloud

