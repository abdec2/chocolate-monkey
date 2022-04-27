import Team from './components/Team';
import Story from './components/Story';
import Mission from './components/Mission';
import Roadmap from './components/Roadmap';
import Mint from './components/Mint';

const Home = () => {
    return (
        <>
            <Story />
            <Mission />
            <Roadmap />
            <Team />
            <Mint />
        </>
    )
}

export default Home