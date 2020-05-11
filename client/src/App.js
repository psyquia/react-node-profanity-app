import React, { Component } from "react";
import { Bar, HandleHolder, Results } from './components';
import styles from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: [],
      apiLoading: false,
      handle: "",
    };
  }

  sendHandleToAPI = async (handle) => {
    var data = {
      handle: handle,
    };

    this.setState({ apiLoading: true });

    fetch("http://10.0.0.209:8080/handle", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((res) => {
        let report = JSON.parse(res);
        console.log(report);
        this.setState({ apiResponse: report.wordInstances, apiLoading: false });
      })
      .catch((err) => err);
  };

  sendReportToAPI = async (falsePositive) => {
    var data = {
      falsePos: falsePositive,
    };
    // this.setState({ apiLoading: true });

    fetch("http://10.0.0.209:8080/report", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => err);
  };

  componentDidMount() {
  }

  handleEnter = (handle) => (e) => {
    if (e.key === "Enter") {
      this.handleSend(handle)();
    }
  }

  handleSend = (handle) => () => {
    this.setState({ handle: handle })
    this.sendHandleToAPI(handle);
  }

  render() {
    return (
      <div className={styles.app}>
        <Bar />
        <Results handle={this.state.handle} loading={this.state.apiLoading} data={this.state.apiResponse} onReport={this.sendReportToAPI} />
        <HandleHolder handleEnter={this.handleEnter} handleClick={this.handleSend} />
      </div>
    );
  }
}

export default App;
