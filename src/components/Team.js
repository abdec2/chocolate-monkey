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
              <h3 className="mt-3 mb-0">Executive Team</h3>
              <p>We scoured the globe and brought in some of the best experts we could find to help us make Chocolate Monkeys successful.  This team has decades of experience in the candy business!</p>
            </div>
          </div>
        </div>
        <div className="row items justify-content-center">
          <Member name="Green M&M" designation="Expert in not melting in your hands" image={team1} />
          <Member name="Chocolate Bunny" designation="Hollow in the middle" image={team2} />
          <Member name="Red Gummy Bear" designation="Cute and Squishy" image={team3} />
          <Member name="Willy Wonka" designation="Candy Factory Owner" image={team4} />
          <Member name="Peeps" designation="Specializes in marshmallows" image={team5} />

        </div>

      </div>
    </section>
  )
}

export default Team