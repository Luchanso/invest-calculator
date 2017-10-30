import React, { Component } from "react";
import Amount from "arui-feather/amount";
import Input from "arui-feather/input";
import Heading from "arui-feather/heading";
import ThemeProvider from "arui-feather/theme-provider";
import Label from "arui-feather/label";
import { Line } from "react-chartjs-2";

import "./app.css";

const calculateData = (
  rate = 1,
  investments,
  startCapital = 0,
  intervals = 2
) => {
  const pRate = Number(rate);
  const pInvestments = Number(investments);
  const pStartCapital = Number(startCapital);
  const pIntervals = Number(intervals);
  const dataPoints = [pStartCapital];

  for (let i = 1; i < pIntervals; i++) {
    const lastPoint = dataPoints[i - 1];
    dataPoints[i] = pInvestments + lastPoint * (1 + pRate / 12 / 100);
  }

  return dataPoints;
};

class App extends Component {
  state = {
    rate: 6,
    investments: 5000,
    startCapital: 50000,
    interval: 12
  };

  handleRatioForm = value => {
    this.setState({ rate: value });
  };

  handleInvestments = value => {
    this.setState({ investments: value });
  };

  handleStartCapital = value => {
    this.setState({ startCapital: value });
  };

  handleInterval = value => {
    this.setState({ interval: value });
  };

  renderCurrency() {}

  renderRatioForm() {
    const options = {
      label: "Процентная ставка (%)",
      onChange: this.handleRatioForm,
      value: String(this.state.rate),
      type: "number",
      width: "available"
    };
    return (
      <div className="form">
        <Input {...options} />
      </div>
    );
  }

  renderInvestments() {
    const options = {
      label: "Ежемесячные инвестиции (рублей)",
      onChange: this.handleInvestments,
      value: String(this.state.investments),
      type: "number",
      width: "available"
    };
    return (
      <div className="form">
        <Input {...options} />
      </div>
    );
  }

  renderStartCapital() {
    const options = {
      label: "Стартовый капитал (рублей)",
      onChange: this.handleStartCapital,
      value: String(this.state.startCapital),
      type: "number",
      width: "available"
    };
    return (
      <div className="form">
        <Input {...options} />
      </div>
    );
  }

  renderInterval() {
    const options = {
      label: "Срок инвестирования (месяцев)",
      onChange: this.handleInterval,
      value: String(this.state.interval),
      type: "number",
      width: "available"
    };
    return (
      <div className="form">
        <Input {...options} />
      </div>
    );
  }

  renderChart() {
    const { rate, investments, startCapital, interval } = this.state;

    const dataPointsInvestments = calculateData(
      rate,
      investments,
      startCapital,
      interval
    );
    const dataPointsInvestmentsUp = calculateData(
      rate * 0.75,
      investments,
      startCapital,
      interval
    );
    const dataPointsInvestmentsDown = calculateData(
      rate * 0.25,
      investments,
      startCapital,
      interval
    );
    const dataPointsZero = calculateData(
      0,
      investments,
      startCapital,
      interval
    );

    const diff =
      dataPointsInvestments[dataPointsInvestments.length - 1] -
      dataPointsZero[dataPointsZero.length - 1];
    const percent = diff / dataPointsZero[dataPointsZero.length - 1];

    const labels = [...Array(Math.max(1, interval)).keys()].map(
      item => item + 1
    );

    const baseStyle = {
      fill: false,
      lineTension: 0.1,
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      pointHoverBorderColor: "rgba(220,220,220,1)",
    }
    const data = {
      labels,
      datasets: [
        {
          ...baseStyle,
          label: "Размер денег с инвестициями",
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          pointBorderColor: "rgba(75,192,192,1)",
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          data: dataPointsInvestments
        },
        {
          ...baseStyle,
          label: "Размер денег без инвестициями",
          backgroundColor: "rgba(244, 66, 72, 0.4)",
          borderColor: "rgb(244, 66, 72)",
          pointBorderColor: "rgb(244, 66, 72)",
          pointBackgroundColor: "#fff",
          pointHoverBackgroundColor: "rgb(244, 66, 72)",
          data: dataPointsZero
        },
        {
          ...baseStyle,
          label: "Процент инвестиций x0.75",
          backgroundColor: "rgba(241, 244, 66, 0.4)",
          borderColor: "rgb(241, 244, 66)",
          pointBorderColor: "rgb(241, 244, 66)",
          pointBackgroundColor: "#fff",
          pointHoverBackgroundColor: "rgb(241, 244, 66)",
          data: dataPointsInvestmentsUp
        },
        {
          ...baseStyle,
          label: "Процент инвестиций x0.25",
          backgroundColor: "rgba(119, 66, 244, 0.4)",
          borderColor: "rgb(119, 66, 244)",
          pointBorderColor: "rgb(119, 66, 244)",
          pointBackgroundColor: "#fff",
          pointHoverBackgroundColor: "rgb(119, 66, 244)",
          data: dataPointsInvestmentsDown
        }
      ]
    };

    const AMOUNT = {
      value: diff,
      currency: {
        code: "RUR",
        minority: 1
      }
    };

    return (
      <div className="chart">
        <Label>Разница в деньгах:</Label> <Amount amount={AMOUNT} />{" "}
        <Label>{(percent * 100).toFixed(2)} %</Label>
        <Line data={data} />
      </div>
    );
  }

  render() {
    return (
      <ThemeProvider theme="alfa-on-color">
        <div className="app">
          <Heading size="xl">Калькулятор инвестиций</Heading>
          {this.renderRatioForm()}
          {this.renderInvestments()}
          {this.renderStartCapital()}
          {this.renderInterval()}
          {this.renderChart()}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
