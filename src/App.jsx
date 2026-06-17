import MethodOne from './Capco/MethodOne';
import MethodTwo from './Capco/MethodTwo';
import MethodThree from './Capco/MethodThree';
import '../src/css/App.css';

export default function App() {
  return (
    <div className="main-container">
      <div className="capco-container">
        <MethodOne />
        <MethodTwo />
        <MethodThree />
      </div>
    </div>
  )
}

