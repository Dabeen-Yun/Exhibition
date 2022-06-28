import type { NextPage } from 'next'
import MainHeader from '../components/header/main-header'
import SubHeader from '../components/header/sub-header';

const Home: NextPage = () => {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  )
}

export default Home;
