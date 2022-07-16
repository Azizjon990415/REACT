import Map from "./Map"

import "./App.css"
import React ,{Component} from "react";

class App extends Component {
  constructor() {
    super()
    this.state = { center: [0, 0] }
  }
  changeCenter = center => () => {
    this.setState({ center })
  }
  render() {
    return (
        <div style={{ textAlign: "center" }}>
          <div style={{ padding: "1rem 0" }}>
            <button
                className="btn"
                onClick={this.changeCenter([-122.4194, 37.7749])}
            >
              {"San Francisco"}
            </button>
            <button
                className="btn"
                onClick={this.changeCenter([151.2093, -33.8688])}
            >
              {"Sydney"}
            </button>
          </div>
          <Map center={this.state.center} />
        </div>
    )
  }
}
export default App