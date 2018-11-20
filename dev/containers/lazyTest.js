import { lazyConnect } from '../../src';
import Test from '../components/Test';

const mapStateToProps = ({ app: { test } }) => ({ test });
const asyncMapDispatchToProps = type =>
  import(`../actions/${type}`).then(({ triggerTest, clearTest }) => ({
    triggerTest,
    clearTest,
  }));

export default type =>
  lazyConnect(mapStateToProps, asyncMapDispatchToProps(type))(Test);
