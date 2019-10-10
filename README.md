# backtest_javascript

FMZ backtest engine javascript package
support talib TA

## install
```
npm install -g git+https://github.com/fmzquant/backtest_javascript.git
```

## simple example
```javascript
var fmz = require("fmz")

var task = fmz.VCtx({
start: '2019-09-06 00:00:00',
end: '2019-10-05 00:00:00',
period: '1h',
exchanges: [{"eid":"Bitfinex","currency":"BTC_USD"}]
})

console.log(exchange.GetTicker())
console.log(exchange.GetAccount())

console.log(task.Join())
```

The config string can be generated automatically by saving the backtest configuration in the strategy edit page.

配置字符串可以通过策略编辑界面里的保存回测配置来自动生成

![meta](https://www.fmz.com/upload/asset/aa67494fc6306759753385bf7634ee4cd437f3f2.png) 
 
## documentation
https://www.fmz.com/api

