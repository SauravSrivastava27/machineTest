import MethodOne from './capco/MethodOne';
import MethodTwo from './capco/MethodTwo';
import MethodThree from './capco/MethodThree';
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

