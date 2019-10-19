import React from "react";
import Label from "arui-feather/label/label";
import "./counter.css";
import Amount from "arui-feather/amount";
import Heading from "arui-feather/heading";

const MINORITY = 100000;

const FormatedAmount = ({ total }) => (
  <Amount
    amount={{
      value: total * MINORITY,
      currency: {
        code: "RUR",
        minority: MINORITY
      }
    }}
  />
);

export const Counters = ({ totalProfit, interval }) => (
  <div className="counters">
    <Heading size='s'>Доход от процентов:</Heading>
    <Label>
      в год: <FormatedAmount total={totalProfit / (interval / 12)} />
    </Label>
    <Label>
      в месяц: <FormatedAmount total={totalProfit / interval} />
    </Label>
    <Label>
      в день: ~<FormatedAmount total={totalProfit / interval / 30} />
    </Label>
    <Label>
      в час: ~<FormatedAmount total={totalProfit / interval / 30 / 24} />
    </Label>
    <Label>
      в минуту: ~
      <FormatedAmount total={totalProfit / interval / 30 / 24 / 60} />
    </Label>
    <Label>
      в секунду: ~
      <FormatedAmount total={totalProfit / interval / 30 / 24 / 60 / 60} />
    </Label>
  </div>
);
