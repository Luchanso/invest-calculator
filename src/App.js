import React, { Component } from "react";
import Amount from "arui-feather/amount";
import Input from "arui-feather/input";
import Heading from "arui-feather/heading";
import ThemeProvider from "arui-feather/theme-provider";
import Label from "arui-feather/label";
import { Line } from "react-chartjs-2";

import "./app.css";
import { Counters } from "./Counters";

const calculateData = (
  rate = 1,
  investments = 0,
  startCapital = 0,
  intervals = 2
) => {
  const pRate = Number(rate);
  const pInvestments = Number(investments);
  const pStartCapital = Number(startCapital);
  const pIntervals = Number(intervals) + 1;
  const dataPoints = [pStartCapital];

  for (let i = 1; i < pIntervals; i++) {
    const lastPoint = dataPoints[i - 1];
    dataPoints[i] = pInvestments + lastPoint * (1 + pRate / 12 / 100);
  }

  return dataPoints;
};

const calculateDataFactory = (investments, startCapital, intervals) => rate =>
  calculateData(rate, investments, startCapital, intervals);

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
    return <Input {...options} />;
  }

  renderInvestments() {
    const options = {
      label: "Ежемесячные инвестиции (рублей)",
      onChange: this.handleInvestments,
      value: String(this.state.investments),
      type: "number",
      width: "available"
    };
    return <Input {...options} />;
  }

  renderStartCapital() {
    const options = {
      label: "Стартовый капитал (рублей)",
      onChange: this.handleStartCapital,
      value: String(this.state.startCapital),
      type: "number",
      width: "available"
    };
    return <Input {...options} />;
  }

  renderInterval() {
    const options = {
      label: "Срок инвестирования (месяцев)",
      onChange: this.handleInterval,
      value: String(this.state.interval),
      type: "number",
      width: "available"
    };
    return <Input {...options} />;
  }

  renderChart(
    dataPoints0,
    dataPoints25,
    dataPoints75,
    dataPoints100,
    diff,
    percent
  ) {
    const { interval }= this.state;
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
      pointHoverBorderColor: "rgba(220,220,220,1)"
    };
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
          data: dataPoints100
        },
        {
          ...baseStyle,
          label: "Накопления под подушкой",
          backgroundColor: "rgba(244, 66, 72, 0.4)",
          borderColor: "rgb(244, 66, 72)",
          pointBorderColor: "rgb(244, 66, 72)",
          pointBackgroundColor: "#fff",
          pointHoverBackgroundColor: "rgb(244, 66, 72)",
          data: dataPoints0
        },
        {
          ...baseStyle,
          label: "Процент инвестиций x0.75",
          backgroundColor: "rgba(241, 244, 66, 0.4)",
          borderColor: "rgb(241, 244, 66)",
          pointBorderColor: "rgb(241, 244, 66)",
          pointBackgroundColor: "#fff",
          pointHoverBackgroundColor: "rgb(241, 244, 66)",
          data: dataPoints75
        },
        {
          ...baseStyle,
          label: "Процент инвестиций x0.25",
          backgroundColor: "rgba(119, 66, 244, 0.4)",
          borderColor: "rgb(119, 66, 244)",
          pointBorderColor: "rgb(119, 66, 244)",
          pointBackgroundColor: "#fff",
          pointHoverBackgroundColor: "rgb(119, 66, 244)",
          data: dataPoints25
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
    const total = dataPoints100[dataPoints100.length - 1];
    const REINVEST = {
      value: total,
      currency: {
        code: "RUR",
        minority: 1
      }
    };

    return (
      <div className="chart">
        <Label>Разница в деньгах</Label> <Amount amount={AMOUNT} />{" "}
        <Label>{(percent * 100).toFixed(2)} %</Label>
        <br />
        <Label>Получено за счет реинвестирования</Label>{" "}
        <Amount amount={REINVEST} />
        <br />
        <div className="line-chart">
          <Line data={data} heigth={5000} />
        </div>
      </div>
    );
  }

  render() {
    const { rate, investments, startCapital, interval } = this.state;

    const calculateData = calculateDataFactory(
      investments,
      startCapital,
      interval
    );

    const invest0 = calculateData(0);
    const invest25 = calculateData(rate * 0.25);
    const invest75 = calculateData(rate * 0.75);
    const invest100 = calculateData(rate);

    const diff = invest100[invest100.length - 1] - invest0[invest0.length - 1];
    const percent = diff / invest0[invest0.length - 1];

    return (
      <ThemeProvider theme="alfa-on-color">
        <div className="app">
          <Heading size="xl">Калькулятор инвестиций</Heading>
          <div className='finance'>
            <div className="form">
              {this.renderRatioForm()}
              {this.renderInvestments()}
              {this.renderStartCapital()}
              {this.renderInterval()}
            </div>
            <div className="counter-block">
              <Counters interval={interval} totalProfit={diff} />
            </div>
          </div>
          {this.renderChart(
            invest0,
            invest25,
            invest75,
            invest100,
            diff,
            percent
          )}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
