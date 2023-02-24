import Layout from '@/componets/Layout'
import Leaderboard from '@/componets/Leaderboard'
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export default function Home() {
  return (
    <>
      <Layout>
      <Provider store={store}>
        <Leaderboard/>
        </Provider>
      </Layout>
    </>
  )
}

