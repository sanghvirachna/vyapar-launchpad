import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import Reader from '../components/Player/Reader';
const Player = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Player" />
      <Reader />
    </DefaultLayout>
  );
};

export default Player;
