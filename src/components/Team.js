import Member from "./Member"
import Dear_Artist from './../images/Dear_Artist_Artist.jpg'
import God_Ares_Head_Master from './../images/God_Ares_Head_Master.jpg'
import Kazey_Developer from './../images/Kazey_Developer.jpg'
import o_mai_goodness_Social_Media_Manager from './../images/o_mai_goodness_Social_Media_Manager.jpg'
import Oske_Discord_Manager from './../images/Oske_Discord_Manager.jpg'


const Team = () => {
  return (
    <section className="popular-collections-area " id="team">

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-7">
            <div className="intro text-center">
              {/* <span>TEAM</span> */}
              <h3 className="mt-3 mb-0">TEAM</h3>
            </div>
          </div>
        </div>
        <div className="row items justify-content-center">
          <Member name="God Ares" designation="Head Master" image={God_Ares_Head_Master} />
          <Member name="Dear Artist" designation="Artist" image={Dear_Artist} />
          <Member name="Oske" designation="Discord Manager" image={Oske_Discord_Manager} />
          <Member name="o_mai_goodness" designation="Social Media Manager" image={o_mai_goodness_Social_Media_Manager} />
          <Member name="Kazey" designation="Developer" image={Kazey_Developer} />

        </div>

      </div>
    </section>
  )
}

export default Team