import { Dashboard } from '@/components/Dashboard'
import PrivateRoute from '@/components/PrivateRoute'

const Home = () => {
  return (
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  );
}

export default Home