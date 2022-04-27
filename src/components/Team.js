import Member from "./Member"
import team1 from './../images/team(1).jpg'
import team2 from './../images/team(2).jpg'
import team3 from './../images/team(3).jpg'
import team4 from './../images/team(4).jpg'
import team5 from './../images/team(5).jpg'


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
          <Member name="God Ares" designation="Head Master" image={team1} />
          <Member name="Dear Artist" designation="Artist" image={team2} />
          <Member name="Oske" designation="Discord Manager" image={team3} />
          <Member name="o_mai_goodness" designation="Social Media Manager" image={team4} />
          <Member name="Kazey" designation="Developer" image={team5} />

        </div>

      </div>
    </section>
  )
}

export default Team