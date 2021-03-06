'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _httpGet = require('./common/httpGet');

var _httpGet2 = _interopRequireDefault(_httpGet);

var _httpPost = require('./common/httpPost');

var _httpPost2 = _interopRequireDefault(_httpPost);

var _httpDelete = require('./common/httpDelete');

var _httpDelete2 = _interopRequireDefault(_httpDelete);

var _RestCommonApi2 = require('./RestCommonApi');

var _RestCommonApi3 = _interopRequireDefault(_RestCommonApi2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RestFuturesApi = function (_RestCommonApi) {
    _inherits(RestFuturesApi, _RestCommonApi);

    function RestFuturesApi(url, accessKey, passphrase, secretKey) {
        _classCallCheck(this, RestFuturesApi);

        var _this = _possibleConstructorReturn(this, (RestFuturesApi.__proto__ || Object.getPrototypeOf(RestFuturesApi)).call(this, url));

        _this.url = url;
        _this.accessKey = accessKey;
        _this.passphrase = passphrase;
        _this.secretKey = secretKey;
        return _this;
    }

    /**
     * 合约持仓信息
     * 获取合约账户所有的持仓信息。
     * GET /api/futures/v3/position
     * @returns
        margin_mode	String	账户类型：全仓 crossed
        liquidation_price	Price	预估爆仓价
        long_qty	Number	多仓数量
        long_avail_qty	Number	多仓可平仓数量
        long_avg_cost	Price	开仓平均价
        long_settlement_price	Price	多仓结算基准价
        realized_pnl	Number	已实现盈余
        short_qty	Number	空仓数量
        short_avail_qty	Number	空仓可平仓数量
        short_avg_cost	Price	开仓平均价
        short_settlement_price	String	空仓结算基准价
        instrument_id	Number	合约ID，如BTC-USD-180213
        leverage	Date	杠杆倍数
        created_at	Date	创建时间
        updated_at	Date	更新时间
     * @memberof RestFuturesApi
     */


    _createClass(RestFuturesApi, [{
        key: 'getFuturesPosition',
        value: async function getFuturesPosition() {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/position', {}, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 单个合约持仓信息
         * 获取某个合约的持仓信息。
         * GET /api/futures/v3/<instrument_id>/position
         * @returns
            margin_mode	String	账户类型：全仓 crossed
            liquidation_price	Price	预估爆仓价
            long_qty	Number	多仓数量
            long_avail_qty	Number	多仓可平仓数量
            long_avg_cost	Price	开仓平均价
            long_settlement_price	Price	结算基准价
            realized_pnl	Number	已实现盈余
            leverage	Number	杠杆倍数
            short_qty	Number	空仓数量
            short_avail_qty	Number	空仓可平仓数量
            short_avg_cost	Price	开仓平均价
            short_settlement_price	Price	结算基准价
            instrument_id	String	合约ID，如BTC-USD-180213
            created_at	Date	创建时间
            updated_at	Date	更新时间
         * @memberof RestFuturesApi
         */

    }, {
        key: 'getFuturesPosition',
        value: async function getFuturesPosition(instrument_id) {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/' + instrument_id + '/position', {}, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 所有币种合约账户信息
         * 获取所有币种的合约账户信息。
         * GET /api/futures/v3/accounts
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'getFuturesAccounts',
        value: async function getFuturesAccounts() {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/accounts', {}, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 获取合约币种杠杆倍数
         * 获取合约账户币种杠杆倍数
         * GET /api/futures/v3/accounts/<currency>/leverage
         * @param {*} currency
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'getFuturesLeverage',
        value: async function getFuturesLeverage(currency) {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/accounts/' + currency + '/leverage', {}, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 设定合约币种杠杆倍数
         * 设定合约账户币种杠杆倍数，注意当前仓位有持仓或者挂单禁止切换杠杆。
         * POST /api/futures/v3/accounts/<currency>/leverage
         * @param {*} currency
         * @param {*} leverage
         * @param {*} currency
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'postFuturesLeverage',
        value: async function postFuturesLeverage(currency, leverage) {
            return await (0, _httpPost2.default)(this.url + '/api/futures/v3/accounts/' + currency + '/leverage', {
                leverage: leverage,
                currency: currency
            }, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 账单流水查询
         * 列出帐户资产流水。帐户资产流水是指导致帐户余额增加或减少的行为。流水会分页，并且按时间倒序排序和存储，最新的排在最前面。请参阅分页部分以获取第一页之后的其他纪录。
         * GET /api/futures/v3/accounts/<currency>/ledger
         * @param {*} currency
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'getFuturesLedger',
        value: async function getFuturesLedger(currency) {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/accounts/' + currency + '/ledger', {}, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 下单
         * OKEx合约交易提供了限价单下单模式。只有当您的账户有足够的资金才能下单。一旦下单，您的账户资金将在订单生命周期内被冻结。被冻结的资金以及数量取决于订单指定的类型和参数。
         * POST /api/futures/v3/order
         *
         * @param {*} client_oid String	否	[非必填]由您设置的订单ID来识别您的订单
         * @param {*} instrument_id String	是	合约ID，如BTC-USD-180213
         * @param {*} type String	是	1:开多2:开空3:平多4:平空
         * @param {*} order_type String	否 0：普通委托（order type不填或填0都是普通委托）1：只做Maker（Post only）2：全部成交或立即取消（FOK）3：立即成交并取消剩余（IOC）4：市价委托
         * @param {*} price Number 是	每张合约的价格
         * @param {*} size String	否	是否以对手价下单(0:不是 1:是)，默认为0，当取值为1时。price字段无效
         * @param {*} match_price String	否	是否以对手价下单(0:不是 1:是)，默认为0，当取值为1时。price字段无效
         * @param {*} leverage Number	是	要设定的杠杆倍数，10或20
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'postFuturesOrder',
        value: async function postFuturesOrder(client_oid, instrument_id, type, order_type, price, size, match_price, leverage) {
            return await (0, _httpPost2.default)(this.url + '/api/futures/v3/order', {
                client_oid: client_oid,
                instrument_id: instrument_id,
                type: type,
                order_type: order_type,
                price: price,
                size: size,
                match_price: match_price,
                leverage: leverage
            }, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 批量下单
         * 批量进行合约下单操作。
         * POST /api/futures/v3/orders
         * @param {*} instrument_id String	是	合约ID，如BTC-USD-180213
         * @param {*} leverage 	Number	是	要设定的杠杆倍数，10或20
         * @param {*} orders_data String	是	JSON类型的字符串 例：[{price:5,amount:2,type:1,match_price:1},{price:2,amount:3,type:1,match_price:1}] 最大下单量为5，price,amount,type,match_price参数参考future_trade接口中的说明
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'postFuturesOrders',
        value: async function postFuturesOrders(instrument_id, leverage, orders_data) {
            return await (0, _httpPost2.default)(this.url + '/api/futures/v3/orders', {
                instrument_id: instrument_id,
                leverage: leverage,
                orders_data: orders_data
            }, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 撤销指定订单
         * 撤销之前下的未完成订单。
         * POST /api/futures/v3/cancel_order/<instrument_id>/<order_id>
         * @param {*} instrument_id
         * @param {*} order_id
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'postFuturesCancel_order',
        value: async function postFuturesCancel_order(instrument_id, order_id) {
            return await (0, _httpPost2.default)(this.url + '/api/futures/v3/cancel_order/' + instrument_id + '/' + order_id, {}, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 批量撤销订单
         * 根据指定的order_id撤销某个合约的未完成订单，每次最多可撤20个。
         * POST /api/futures/v3/cancel_batch_orders/<instrument_id>
         * @param {*} instrument_id String	是	撤销指定合约品种的订单
         * @param {*} order_ids String[]	是	撤销指定的订单ID
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'postFuturesCancel_batch_orders',
        value: async function postFuturesCancel_batch_orders(instrument_id, order_ids) {
            return await (0, _httpPost2.default)(this.url + '/api/futures/v3/cancel_batch_orders/' + instrument_id, {
                order_ids: order_ids
            }, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 获取订单列表
         * 列出您当前所有的订单信息（from的优先级高于to，当同时传from和to参数时，系统返回from参数的请求值）
         * GET /api/futures/v3/orders/<instrument_id>
         *
         * @param {*} instrument_id 	是	订单状态(0:等待成交 1:部分成交 2:已完成）
         * @param {*} status 是	合约ID，如BTC-USD-180213
         * @param {*} from 	否	请求此页码之后的分页内容（举例页码为：1，2，3，4，5。from 4 只返回第5页，to 4只返回第3页）
         * @param {*} to 	否	请求此页码之前的分页内容（举例页码为：1，2，3，4，5。from 4 只返回第5页，to 4只返回第3页）
         * @param {*} limit 否	分页返回的结果集数量，默认为100，最大为100，按时间顺序排列，越早下单的在前面
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'getFuturesOrdersByInstrument_id',
        value: async function getFuturesOrdersByInstrument_id(instrument_id, status, from, to, limit) {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/orders/' + instrument_id, {
                status: status,
                from: from,
                to: to,
                limit: limit
            }, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 获取订单信息
         * 通过订单ID获取单个订单信息。
         * GET /api/futures/v3/orders/<instrument_id>/<order_id>
         * @param {*} instrument_id
         * @param {*} order_id
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'getFuturesOrdersByInstrument_idAndOrderId',
        value: async function getFuturesOrdersByInstrument_idAndOrderId(instrument_id, order_id) {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/orders/' + instrument_id + '/' + order_id, {}, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 获取成交明细
         * 获取最近的成交明细列表（from的优先级高于to，当同时传from和to参数时，系统返回from参数的请求值）。
         * GET /api/futures/v3/fills
         *
         * @param {*} order_id String	是	仅限此order_id的资金明细列表，默认返回所有
         * @param {*} instrument_id String	是	仅限此instrument_id的资金明细列表，默认返回所有
         * @param {*} from Number	否	请求此页码之后的分页内容（举例页码为：1，2，3，4，5。from 4 只返回第5页，to 4只返回第3页）
         * @param {*} to Number	否	请求此页码之前的分页内容（举例页码为：1，2，3，4，5。from 4 只返回第5页，to 4只返回第3页）
         * @param {*} limit Number	否	分页返回的结果集数量，默认为100，最大为100，按时间顺序排列，越早下单的在前面
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'getFuturesFills',
        value: async function getFuturesFills(order_id, instrument_id, from, to, limit) {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/orders/' + instrument_id + '/' + order_id, {
                order_id: order_id,
                instrument_id: instrument_id,
                from: from,
                to: to,
                limit: limit
            }, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 获取合约信息
         * 用于获取行情数据，这组公开接口提供了行情数据的快照，无需认证即可调用。 获取可用合约的列表，查询各合约的交易限制和价格步长等信息。
         * GET /api/futures/v3/instruments
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'getFuturesInstruments',
        value: async function getFuturesInstruments() {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/instruments', {}, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 获取深度数据
         * 获取合约的深度列表。这个请求不支持分页，一个请求返回整个深度列表。
         * GET /api/futures/v3/instruments/<instrument_id>/book
         * @param {*} instrument_id String	是	合约ID，如BTC-USD-180213
         * @param {*} size Number	否	返回深度数量，最大值可传200，即买卖深度共400条
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'getFuturesInstrumentsBook',
        value: async function getFuturesInstrumentsBook(instrument_id, size) {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/instruments/' + instrument_id + '/book', {
                size: size
            }, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 获取全部ticker信息
         * 获取平台全部合约的最新成交价、买一价、卖一价和24小时交易量的快照信息。
         * GET /api/futures/v3/instruments/ticker
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'getFuturesInstrumentsTicker',
        value: async function getFuturesInstrumentsTicker() {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/instruments/ticker', {}, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 获取某个ticker信息
         * 获取合约的最新成交价、买一价、卖一价和24小时交易量的快照信息。
         * GET /api/futures/v3/instruments/<instrument_id>/ticker
         *
         * @param {*} instrument_id String	是	合约ID，如BTC-USD-180213
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'getFuturesInstrumentsTickerByInstrument_id',
        value: async function getFuturesInstrumentsTickerByInstrument_id(instrument_id) {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/instruments/' + instrument_id + '/ticker', {}, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
        * 获取成交数据
        * 获取合约最新的2000条成交列表（from的优先级高于to，当同时传from和to参数时，系统返回from参数的请求值）。
        * GET /api/futures/v3/instruments/<instrument_id>/trades
        * @param {*} instrument_id String	是	合约ID，如BTC-USD-180213
        * @param {*} from Number	否	请求此页码之后的分页内容（举例页码为：1，2，3，4，5。from 4 只返回第5页，to 4只返回第3页）
        * @param {*} to 	Number	否	请求此页码之前的分页内容（举例页码为：1，2，3，4，5。from 4 只返回第5页，to 4只返回第3页）
        * @param {*} limit 	Number	否	分页返回的结果集数量，默认为100，最大为100，按时间顺序排列，越早下单的在前面
        * @returns
        * @memberof RestFuturesApi
        */

    }, {
        key: 'getFuturesInstrumentsTradesByInstrument_id',
        value: async function getFuturesInstrumentsTradesByInstrument_id(instrument_id, from, to, limit) {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/instruments/' + instrument_id + '/trades', {
                from: from,
                to: to,
                limit: limit
            }, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 获取K线数据
         * 获取合约的K线数据。K线数据按请求的粒度分组返回。
         * GET /api/futures/v3/instruments/<instrument-id>/candles
         * @param {*} instrument_id 	String	是	合约ID，如BTC-USD-180213
         * @param {*} start	Date	否	开始时间(ISO UTC标准，例如：2018-06-20T02:31:00Z)
         * @param {*} end Date	否	结束时间(ISO UTC标准，例如：2018-06-20T02:31:00Z)
         * @param {*} granularity Number	否	时间粒度，以秒为单位，如[60/180/300 900/1800/3600/7200/14400/21600/43200/86400/604800]，详见下解释说明
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'getFuturesInstrumentsCandlesByInstrument_id',
        value: async function getFuturesInstrumentsCandlesByInstrument_id(instrument_id, start, end, granularity) {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/instruments/' + instrument_id + '/candles', {
                start: start,
                end: end,
                granularity: granularity
            }, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 获取指数信息
         * 获取币种指数。此接口为公共接口，不需要身份验证。
         * GET/api/futures/v3/instruments/<instrument_id>/index
         * @param {*} instrument_id  	String	指数币对，如BTC-USD
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'getFuturesInstrumentsIndexByInstrument_id',
        value: async function getFuturesInstrumentsIndexByInstrument_id(instrument_id) {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/instruments/' + instrument_id + '/index', {}, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 获取法币汇率
         * 获取法币汇率。此接口为公共接口，不需要身份验证。
         * GET /api/futures/v3/rate
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'getFuturesRate',
        value: async function getFuturesRate() {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/rate', {}, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 获取预估交割价
         * 获取合约预估交割价。交割预估价只有交割前一小时才有返回值。此接口为公共接口，不需要身份验证。
         * GET /api/futures/v3/instruments/<instrument_id>/estimated_price
         *
         * @param {*} instrument_id String	是	合约ID，如BTC-USD-180213
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'getFuturesInstrumentsEstimated_price',
        value: async function getFuturesInstrumentsEstimated_price(instrument_id) {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/instruments/' + instrument_id + '/estimated_price', {}, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 获取平台总持仓量
         * 获取合约整个平台的总持仓量。此接口为公共接口，不需要身份验证。
         * GET /api/futures/v3/instruments/<instrument_id>/open_interest
         *
         * @param {*} instrument_id
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'getFuturesInstrumentsOpen_interest',
        value: async function getFuturesInstrumentsOpen_interest(instrument_id) {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/instruments/' + instrument_id + '/open_interest', {}, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 获取当前限价
         * 获取合约当前可开仓的最高买价和最低卖价。此接口为公共接口，不需要身份验证。
         *  GET /api/futures/v3/instruments/<instrument_id>/price_limit
         *
         * @param {*} instrument_id
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'getFuturesInstrumentsPrice_limit',
        value: async function getFuturesInstrumentsPrice_limit(instrument_id) {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/instruments/' + instrument_id + '/price_limit', {}, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         * 获取爆仓单
         * 获取合约爆仓单，此接口为公共接口，不需要身份验证（from的优先级高于to，当同时传from和to参数时，系统返回from参数的请求值）。
         * GET /api/futures/v3/instruments/<instrument_id>/liquidation
         *
         * @param {*} instrument_id 	String	是	合约ID，如BTC-USD-180213
         * @param {*} status String	是	状态(0:最近7天数据（包括第7天） 1:7天前数据)
         * @param {*} from Number	否	请求此页码之后的分页内容（举例页码为：1，2，3，4，5。from 4 只返回第5页，to 4只返回第3页）
         * @param {*} to 	Number	否	请求此页码之前的分页内容（举例页码为：1，2，3，4，5。from 4 只返回第5页，to 4只返回第3页）
         * @param {*} limit 	Number	否	分页返回的结果集数量，默认为100，最大为100，按时间顺序排列，越早下单的在前面
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'getFuturesInstrumentsLiquidation',
        value: async function getFuturesInstrumentsLiquidation(instrument_id, status, from, to, limit) {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/instruments/' + instrument_id + '/liquidation', {
                status: status,
                from: from,
                to: to,
                limit: limit
            }, this.accessKey, this.passphrase, this.secretKey);
        }

        /**
         *
         * 获取合约挂单冻结数量
         * 获取合约挂单冻结的数量.
         * GET/api/futures/v3/accounts/<instrument_id>/holds（URL里带大括号的都是路径参数，下同）
         * @param {*} instrument_id
         * @returns
         * @memberof RestFuturesApi
         */

    }, {
        key: 'getFuturesInstrumentsHolds',
        value: async function getFuturesInstrumentsHolds(instrument_id) {
            return await (0, _httpGet2.default)(this.url + '/api/futures/v3/accounts/' + instrument_id + '/holds', {}, this.accessKey, this.passphrase, this.secretKey);
        }
    }]);

    return RestFuturesApi;
}(_RestCommonApi3.default);

exports.default = RestFuturesApi;