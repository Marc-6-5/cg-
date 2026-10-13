// 课程数据：7 周 × 21 节课
// 重点：所有案例都用 A 股真实走势复盘

const lessons = {
  // ============ 第 1 周：道氏基础 ============
  "1-1": {
    week: 1,
    title: "三种趋势",
    duration: "25 分钟",
    difficulty: "入门",
    tags: ["道氏理论", "趋势识别"],
    content: `
      <h2>市场只有三种状态</h2>
      <p>道氏理论最伟大的贡献不是预测，而是<strong>分类</strong>。它告诉你：市场只有三种状态，搞清楚是哪种，比预测点位重要一万倍。</p>

      <h3>1. 主要趋势（Major Trend）</h3>
      <ul>
        <li>持续时间：<strong>1 年到数年</strong></li>
        <li>幅度：通常 20% 以上</li>
        <li>作用：决定"做不做"的大方向</li>
        <li>A股实例：2019年初 ~ 2021年初的"核心资产"牛市</li>
      </ul>

      <h3>2. 次级趋势（Secondary Trend）</h3>
      <ul>
        <li>持续时间：<strong>3 周到 3 个月</strong></li>
        <li>幅度：通常是主趋势的 1/3 - 2/3</li>
        <li>作用：主要趋势中的回调/反弹</li>
        <li>A股实例：2020年3月疫情底的反弹，就是 2019-2021 大牛市中的一个次级回调</li>
      </ul>

      <h3>3. 短期波动（Minor Trend）</h3>
      <ul>
        <li>持续时间：<strong>几天到几周</strong></li>
        <li>幅度：随机性强</li>
        <li>作用：噪音，<em>专业交易者会忽略</em></li>
        <li>A股实例：每天的分时波动、连续几天的涨跌</li>
      </ul>

      <div class="card card-key">
        <span class="label">核心原则</span>
        <p><strong>短线波动服从次级趋势，次级趋势服从主要趋势。</strong></p>
        <p>这是道氏的"三层蛋糕"模型——逆主要趋势做交易，胜率天然就低。</p>
      </div>

      <h3>图示：三种趋势的嵌套关系</h3>
      ${chartNestedTrend()}

      <div class="card card-warn">
        <span class="label">新手误区</span>
        <p>很多散户亏钱不是因为技术差，而是<strong>在主要下降趋势里抢反弹</strong>。把日线当主要趋势看，其实它只是噪音。永远先确认大级别方向。</p>
      </div>

      <h3>延伸：道氏理论的六大基本原则</h3>
      <ol>
        <li>市场包含并消化一切信息</li>
        <li>市场有三种趋势（主要 / 次级 / 短期）</li>
        <li>主要趋势分为三阶段：积累 → 公众参与 → 派发</li>
        <li>两类指数必须相互验证（工业与运输——即道琼斯时代的两种平均指数）</li>
        <li>趋势将持续到出现明确的反转信号为止</li>
        <li>成交量应能验证趋势（辅助判断，而非充分条件）</li>
      </ol>
    `
  },

  "1-2": {
    week: 1,
    title: "高低点结构",
    duration: "30 分钟",
    difficulty: "入门",
    tags: ["趋势判断", "最核心"],
    content: `
      <h2>判断趋势最可靠的标准：高低点结构</h2>
      <p>所有花里胡哨的指标，最终都可以归约到这一个简单的问题：<strong>高点在抬高，还是在降低？</strong></p>

      <h3>上升趋势的"双抬高"</h3>
      <ul>
        <li><strong>高点抬高</strong>（Higher High, HH）</li>
        <li><strong>低点抬高</strong>（Higher Low, HL）</li>
      </ul>
      <p>两个条件同时满足，就是上升趋势。任何一个被破坏，趋势就可能结束。</p>

      <h3>下降趋势的"双降低"</h3>
      <ul>
        <li><strong>高点降低</strong>（Lower High, LH）</li>
        <li><strong>低点降低</strong>（Lower Low, LL）</li>
      </ul>

      <h3>盘整的"乱"特征</h3>
      <p>高点有高有低、低点有高有低，结构混乱，<em>这时候就别动手</em>。</p>

      <h3>图示：趋势结构对比</h3>
      ${chartHHLL()}

      <div class="card card-tip">
        <span class="label">实战口诀</span>
        <p><strong>上涨看支撑不破，下跌看压力不过。</strong></p>
        <p>上升趋势中，每次回踩的低点不破前低，就是健康；只要某次回踩破了前低，趋势可能转。</p>
      </div>

      <h3>A股真实案例：贵州茅台 2022-2023</h3>
      <p>2022 年初反弹高点约 1900 元，此后<strong>每个反弹高点都比前一个低、每个回调低点也比前一个低</strong>，是典型的下降趋势结构。如果在 2022 年初的反弹中抄底，会非常痛苦。</p>
      <p><em>注：个股历史点位务必用前复权价格查看</em>，否则除权除息会让高低点失真、无法比较。</p>
    `
  },

  "1-3": {
    week: 1,
    title: "牛熊判断",
    duration: "20 分钟",
    difficulty: "入门",
    tags: ["大方向", "仓位决策"],
    content: `
      <h2>用道氏判断当前市场状态</h2>
      <p>每周花 5 分钟做这件事，<strong>能避开 80% 的亏损</strong>。</p>

      <h3>三步判断法</h3>
      <ol>
        <li>看<strong>月线</strong>：高点抬高了吗？低点抬高了吗？</li>
        <li>如果月线不清晰，看<strong>周线</strong>：周线的双抬高/双降低</li>
        <li>如果周线还是盘整，<em>那就等</em>——盘整期不亏就是赚</li>
      </ol>

      <h3>四象限决策表</h3>
      ${chartQuadrant()}

      <div class="card card-key">
        <span class="label">决策原则</span>
        <p><strong>只在【上升+回调】象限入场。</strong></p>
        <p>【上升+新高】象限是加速段，可以追但要小仓；【下降+反弹】象限只做超短；【下降+新低】象限完全空仓。</p>
      </div>

      <div class="card card-warn">
        <span class="label">经验观察</span>
        <p>A股一轮完整的牛熊里，<strong>真正顺畅上涨的时间往往只占一小部分，而主要涨幅集中在这些阶段</strong>（具体占比随统计区间和口径不同差异较大，不必纠结精确数字）。其余大部分时间处于震荡或下跌，这时候低仓甚至空仓、少动手，往往比频繁交易更好。</p>
      </div>
    `
  },

  // ============ 第 2 周：道氏实战 ============
  "2-1": {
    week: 2,
    title: "量价验证",
    duration: "25 分钟",
    difficulty: "入门",
    tags: ["成交量", "健康度"],
    content: `
      <h2>量价关系：验证趋势的健康度</h2>
      <p>价格的涨跌必须得到成交量的<strong>支持</strong>，否则就是假动作。</p>
      <p><em>顺带纠正一个常见误解：道氏理论里的"相互验证"，原义是指工业指数与运输指数（两类平均）要互相印证，并不是讲量价关系。量价分析是后来的实务经验总结，别把出处安到道氏头上。</em></p>

      <h3>健康上涨</h3>
      <p>价涨量增，价跌量缩。这是强势特征——上涨时大家抢着买，下跌时没人卖，<em>筹码锁定良好</em>。</p>

      <h3>危险信号</h3>
      <p>价涨量缩：上涨动力不足，容易见顶。价跌量增：恐慌涌出，可能加速赶底。</p>

      <h3>图示：量价关系</h3>
      ${chartVolumePrice()}

      <div class="card card-tip">
        <span class="label">实操技巧</span>
        <p>看成交量不是看绝对值，而是看<strong>量比</strong>＝当日平均每分钟成交量 ÷ 过去 5 个交易日的平均每分钟成交量（盘中随开盘时间推进动态变化）。量比 1.5-3 倍是温和放量，3 倍以上是巨量（可能是出货）。</p>
        <p>若你看的是"当前量 ÷ 近 20 日均量"，那叫<strong>相对成交量</strong>（如 VOL ÷ MA(VOL,20)），和量比不是一回事，别混用。</p>
        <p>再看两个常用角度：<strong>换手率</strong>＝成交量 ÷ 流通股本，衡量筹码活跃度；<strong>资金流向</strong>（大单净额）看主力动向。三者角度不同，可互相印证，但都别迷信单一指标。</p>
      </div>
    `
  },

  "2-2": {
    week: 2,
    title: "趋势线画法",
    duration: "30 分钟",
    difficulty: "进阶",
    tags: ["画线", "支撑压力"],
    content: `
      <h2>连接高低点，看清主力的"底线"</h2>
      <p>趋势线是道氏理论最直观的工具，<strong>但 80% 的人画错了</strong>。</p>

      <h3>正确的画法</h3>
      <ol>
        <li><strong>上升趋势线</strong>：连接两个明显的回调低点，向右延伸</li>
        <li><strong>下降趋势线</strong>：连接两个明显的反弹高点，向右延伸</li>
        <li>至少需要 <strong>2 个触点</strong>，3 个触点更可靠</li>
      </ol>

      <h3>三个常见错误</h3>
      <ul>
        <li>⚠️ 用收盘价连线 —— 不推荐，多数流派用 K 线的极值点（最高/最低价）</li>
        <li>❌ 试图精确贴合每一根 K 线 —— 错！会画出花</li>
        <li>❌ 触点不够就画 —— 错！一根 K 线触的不算</li>
      </ul>

      <h3>图示：正确的趋势线</h3>
      ${chartTrendLine()}

      <div class="card card-key">
        <span class="label">实战要点</span>
        <p>趋势线被<strong>有效跌破</strong>（不是一碰到就算）通常意味着趋势可能改变。"有效跌破"没有统一标准，常用的一档经验是：收盘价跌破趋势线下方约 3%，且次日没有收回——<em>3% 只是启发式阈值，可结合波动率调整，不是铁律</em>。</p>
      </div>

      <h3>假突破（骗线）怎么处理</h3>
      <ul>
        <li><strong>向上假突破</strong>：放量冲过压力后很快缩量跌回 → 多半是诱多，反而要警惕</li>
        <li><strong>向下假突破</strong>：跌破支撑后快速收回 → 可能是"挖坑洗盘"，不该急着割</li>
        <li>判断关键看<strong>幅度 + 时间 + 量能</strong>：破位后 2-3 根 K 线内收回、且量能萎缩，更可能是假突破</li>
      </ul>
    `
  },

  "2-3": {
    week: 2,
    title: "A股案例：沪深300 2018-2024",
    duration: "35 分钟",
    difficulty: "进阶",
    tags: ["复盘", "实操"],
    content: `
      <h2>用道氏理论复盘沪深300 6年走势</h2>
      <p>这一节是<strong>纯实战</strong>，我们把理论套到真实数据上。</p>

      <h3>2018-2019：完整下降+反转</h3>
      <ul>
        <li>2018年1月高点 ~ 4400，2018年12月低点 ~ 2900</li>
        <li>高点不断降低、低点不断降低 = 教科书级下降趋势</li>
        <li>2019年1月突破前期下降趋势线 = 趋势反转信号</li>
      </ul>

      <h3>2019-2021：双抬高牛市</h3>
      <ul>
        <li>2019/6 低点约 3500 → 2020/3 低点约 3500 → 之后回踩低点抬高至约 4900（2021/3 附近）</li>
        <li>低点抬高 + 高点抬高 = 明确上升趋势</li>
        <li>趋势中的回调通常是买点（前提是结构未被破坏）</li>
      </ul>

      <h3>2022-2024：下降 + 弱震荡</h3>
      <ul>
        <li>高点不断降低（2021/2 约 5800 → 2022/7 约 4500 → 2023/1 约 4300）</li>
        <li>低点也在下移（2022/10 约 3500 → 2024/2 约 3200）</li>
        <li>高点降低 + 低点降低 = 这段其实是下降趋势，其间只有反弹机会</li>
        <li>这段时间<em>整体应低仓（30% 以下）</em>，只在超跌反弹里做小仓短线</li>
      </ul>

      <h3>图示：沪深300结构复盘</h3>
      ${chartHS300()}

      <div class="card card-tip">
        <span class="label">复盘心得</span>
        <p>如果只允许用一个工具，<strong>道氏的高低点结构是最稳的</strong>。它不会让你抓到所有机会，但能帮你躲过几乎所有大亏。</p>
      </div>
    `
  },

  // ============ 第 3 周：斐波那契入门 ============
  "3-1": {
    week: 3,
    title: "黄金分割原理",
    duration: "25 分钟",
    difficulty: "入门",
    tags: ["数学基础", "心理共振"],
    content: `
      <h2>为什么 0.618 这个数字"管用"</h2>
      <p>斐波那契回撤听起来玄学，但背后有<strong>三重支撑</strong>。</p>

      <h3>1. 数学基础</h3>
      <p>斐波那契数列：1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...</p>
      <p>每一项 = 前两项之和。相邻两项的比值趋近于 <strong>0.618</strong>。</p>
      <p>在自然界（如向日葵种子排列、鹦鹉螺壳）里也确实能观察到接近这个比值的比例，于是它被染上了一层"神秘感"。</p>

      <h3>2. 心理基础（存疑，了解即可）</h3>
      <p>有人主张人的情绪反应（追涨、犹豫、决断、后悔）在时间分布上也接近黄金分割，但这一条<strong>缺乏严格证据</strong>，听听就好，不必当真。</p>
      <p>更实在的解释是：0.382 和 0.618 是大家共同盯着的位置，主力"洗盘"和散户"抄底"容易在这里撞到一起。</p>

      <h3>3. 反身性（最关键）</h3>
      <p>因为大家都看 0.618，所以价格到那里<strong>真的会有买盘</strong>——这叫"自证预言"。</p>

      <h3>斐波那契数列图示</h3>
      ${chartFibonacci()}

      <div class="card card-key">
        <span class="label">核心结论</span>
        <p>0.618 之所以"准"，不是因为它有魔力，而是因为<strong>千万个交易者同时在用它</strong>。这和"一种语言之所以通用"的逻辑是一样的。</p>
        <p>所以更准确的说法是：它是一条<strong>约定俗成</strong>的参考线，而不是自然定律——共识在，它就有效；共识变了，它也会失效。</p>
      </div>
    `
  },

  "3-2": {
    week: 3,
    title: "四个核心回撤位",
    duration: "30 分钟",
    difficulty: "核心",
    tags: ["实战工具", "必须掌握"],
    content: `
      <h2>只记这四个数字：0.236 / 0.382 / 0.5 / 0.618</h2>
      <p>斐波那契工具不要贪多，<strong>四个核心位 + 0.786 共五个</strong>，足够覆盖 90% 的场景。</p>

      <h3>回撤位含义</h3>
      <p>如果一波上涨从 10 元到 20 元（涨 10 元），那么回调到：</p>
      <ul>
        <li><strong>0.236</strong> = 20 - 10×0.236 = <strong>17.64 元</strong>（极浅回撤，超强势）</li>
        <li><strong>0.382</strong> = 20 - 10×0.382 = <strong>16.18 元</strong>（强势回撤，最常见）</li>
        <li><strong>0.5</strong> = 20 - 10×0.5 = <strong>15 元</strong>（半山腰，心理关口）</li>
        <li><strong>0.618</strong> = 20 - 10×0.618 = <strong>13.82 元</strong>（黄金位，最强支撑）</li>
        <li><strong>0.786</strong> = 20 - 10×0.786 = <strong>12.14 元</strong>（深度回撤，趋势可能破）</li>
      </ul>

      <h3>图示：四个回撤位</h3>
      ${chartRetracement()}

      <div class="card card-tip">
        <span class="label">A 股实战经验</span>
        <p>在 A 股，<strong>0.382 和 0.618 是用得最多的</strong>。强势股回调到 0.382 就企稳，普通股回调到 0.618 才企稳。0.5 是个"半信半疑"的位置，<em>经常假突破</em>。</p>
      </div>

      <div class="card card-warn">
        <span class="label">关键提醒</span>
        <p>回撤位<strong>不是精确点位</strong>，而是一个区域。实际操作中要给 2-3% 的容错。比如 0.618 位置在 13.82 元，那么 13.5 - 14.2 元这个区间都是合理的入场点。</p>
      </div>
    `
  },

  "3-3": {
    week: 3,
    title: "画线工具使用",
    duration: "20 分钟",
    difficulty: "入门",
    tags: ["工具操作"],
    content: `
      <h2>三步画出斐波那契回撤</h2>
      <p>所有看盘软件（同花顺、东方财富、通达信）都自带这个工具。</p>

      <h3>步骤</h3>
      <ol>
        <li>选中"斐波那契回撤"工具</li>
        <li><strong>起点</strong>：从趋势的起点开始拖（上涨趋势找最低点）</li>
        <li><strong>终点</strong>：拖到趋势的终点（上涨趋势找最高点）</li>
      </ol>

      <h3>重要原则</h3>
      <ul>
        <li>方向要选对：上涨看回调到 0.382/0.618 是不是支撑</li>
        <li>下跌看反弹到 0.382/0.618 是不是压力</li>
        <li>不要套用所有级别——<strong>只在大级别上画</strong>，日线/周线最好</li>
      </ul>

      <h3>图示：画线方法</h3>
      ${chartFibDraw()}

      <div class="card card-key">
        <span class="label">多周期共振</span>
        <p><strong>同花顺右键 → 画线工具 → 斐波那契回撤</strong>。建议在周线和日线两个级别都画一遍，<em>两个级别都到 0.618 = 强支撑</em>。</p>
      </div>
    `
  },

  // ============ 第 4 周：斐波那契进阶 ============
  "4-1": {
    week: 4,
    title: "扩展位测量目标价",
    duration: "30 分钟",
    difficulty: "进阶",
    tags: ["目标位", "止盈"],
    content: `
      <h2>测量"涨到哪里"：1.272 / 1.618 / 2.618</h2>
      <p>回撤位是找"哪里是支撑"，<strong>扩展位是找"涨到哪儿是顶"</strong>。</p>

      <h3>扩展位计算</h3>
      <p>如果一波上涨是 10 → 20 元（涨幅 10 元），回调到 0.618 即 13.82 元后再次启动，扩展位目标：</p>
      <ul>
        <li><strong>1.272</strong> = 13.82 + 10×1.272 = <strong>26.54 元</strong>（第一目标）</li>
        <li><strong>1.618</strong> = 13.82 + 10×1.618 = <strong>30.00 元</strong>（黄金目标）</li>
        <li><strong>2.618</strong> = 13.82 + 10×2.618 = <strong>40.00 元</strong>（超强势）</li>
      </ul>

      <h3>图示：扩展位</h3>
      ${chartExtension()}

      <div class="card card-tip">
        <span class="label">止盈策略</span>
        <p>主流资金分批止盈的常见做法：<strong>1.272 减仓 30%，1.618 减仓 30%，剩余看 2.618</strong>。这样既不会卖飞，也不会全部回吐。</p>
      </div>

      <div class="card card-warn">
        <span class="label">别被"精准"骗了</span>
        <p>扩展位是用<strong>已经走完的</strong>起止点反推出来的，本质是"事后看图说话"。实战中你并不知道回调低点和前高最终在哪，所以扩展位只能当作<strong>参考目标区间</strong>，必须配合趋势和结构确认，不能当成必然到点。</p>
      </div>
    `
  },

  "4-2": {
    week: 4,
    title: "时间窗口",
    duration: "20 分钟",
    difficulty: "进阶",
    tags: ["时间周期", "变盘日"],
    content: `
      <h2>斐波那契时间：第13天、第21天、第34天</h2>
      <p>斐波那契数列也用于<strong>预测变盘时间</strong>。从重要转折点开始数：</p>
      <ul>
        <li><strong>第 8 天</strong>：小变盘窗口</li>
        <li><strong>第 13 天</strong>：重要变盘窗口 ⭐</li>
        <li><strong>第 21 天</strong>：重要变盘窗口 ⭐</li>
        <li><strong>第 34 天</strong>：重大变盘窗口 ⭐</li>
        <li><strong>第 55 天</strong>：重大变盘窗口</li>
      </ul>

      <h3>图示：时间窗口</h3>
      ${chartTimeWindow()}

      <div class="card card-warn">
        <span class="label">使用注意</span>
        <p>时间窗口不是"必涨/必跌日"，而是"容易变盘日"。在这些日子附近，<em>市场容易出现方向选择</em>。配合价格位置一起用，准确率会高很多。</p>
      </div>
    `
  },

  "4-3": {
    week: 4,
    title: "实战复盘：宁德时代 2022-2024",
    duration: "35 分钟",
    difficulty: "实战",
    tags: ["完整复盘"],
    content: `
      <h2>用斐波那契完整复盘宁德时代</h2>
      <p>宁德时代是 A 股新能源龙头，它的走势里有几处比较贴合斐波那契的位置。</p>
      <p><em>说明：以下价格均按前复权口径查看；个股历史点位若不前复权，除权除息会让高低点失真、无法比较。</em></p>

      <h3>2022年下跌浪复盘</h3>
      <ul>
        <li>高点：2022年1月 ~ 692 元</li>
        <li>低点：2022年4月 ~ 308 元（跌 384 元）</li>
        <li>反弹目标：0.382 = 692 - 384×0.382 = <strong>545 元</strong></li>
        <li>实际反弹高点：<strong>549 元</strong>（误差 0.7%）</li>
      </ul>

      <h3>第二次回调</h3>
      <ul>
        <li>前一段反弹：从 408 元涨到 549 元（涨 141 元）</li>
        <li>0.5 回撤位：549 − 141×0.5 = <strong>478.5 元</strong></li>
        <li>实际低点：<strong>478 元</strong>（几乎精确命中）</li>
      </ul>

      <h3>图示：复盘对照</h3>
      ${chartCATL()}

      <div class="card card-tip">
        <span class="label">复盘心得</span>
        <p>宁德时代是教科书级的<strong>"精准命中斐波那契"</strong>案例。但要记住：<em>这是事后看图说话</em>，实战中你不可能知道 692 就是最高点。所以斐波那契要"配合其他工具确认"，不能单独使用。</p>
      </div>
    `
  },

  // ============ 第 5 周：缠论基础 ============
  "5-1": {
    week: 5,
    title: "分型识别",
    duration: "30 分钟",
    difficulty: "入门",
    tags: ["缠论基础", "K线"],
    content: `
      <h2>缠论第一关：找到转折点</h2>
      <p>缠论的所有高级概念，都建立在<strong>两个最基础的东西</strong>上：分型 + 笔。这一节我们搞定分型。</p>

      <h3>什么是分型？</h3>
      <p>3 根 K 线的组合，<strong>中间那根的最高价/最低价</strong>被左右两根包住，就形成分型。</p>

      <h3>顶分型 vs 底分型</h3>
      <ul>
        <li><strong>顶分型</strong>：中间 K 线的<em>高点</em>最高、<em>低点</em>也最高 → 短期可能见顶</li>
        <li><strong>底分型</strong>：中间 K 线的<em>高点</em>最低、<em>低点</em>也最低 → 短期可能见底</li>
      </ul>

      <h3>图示：分型识别</h3>
      ${chartFenxing()}

      <div class="card card-warn">
        <span class="label">重要提醒</span>
        <p>分型<strong>不等于买入信号</strong>。一个分型只能说明"这里出现了转折的可能性"，<em>必须经过"笔"和"中枢"的确认</em>才能构成真正的买卖点。</p>
      </div>

      <h3>K线包含处理（进阶）</h3>
      <p>当一根 K 线的最高最低完全在另一根 K 线的范围内，需要"合并"处理：</p>
      <ul>
        <li>向上时：取两根 K 线的<strong>高点最高 + 低点最高</strong></li>
        <li>向下时：取两根 K 线的<strong>高点最低 + 低点最低</strong></li>
      </ul>
      <p>处理完之后再判断分型。这是缠论的"基本功"，初学者可以先跳过，但学完会清晰很多。</p>
    `
  },

  "5-2": {
    week: 5,
    title: "笔的画法",
    duration: "35 分钟",
    difficulty: "核心",
    tags: ["缠论核心", "必须掌握"],
    content: `
      <h2>从分型到笔：缠论的"原子"</h2>
      <p>分型只是"点"，<strong>笔才是"线"</strong>。从底分型到顶分型（或反过来），中间至少要有一根独立 K 线，这一段就叫一笔。</p>

      <h3>画笔的严格定义</h3>
      <ol>
        <li>从<strong>底分型</strong>开始 → 上升到<strong>顶分型</strong>结束（向上笔）</li>
        <li>从<strong>顶分型</strong>开始 → 下降到<strong>底分型</strong>结束（向下笔）</li>
        <li>底与顶之间至少有 <strong>1 根独立 K 线</strong>（不能是包含关系）</li>
        <li>严格笔要求至少 5 根 K 线（老版本）</li>
      </ol>

      <h3>图示：笔的画法</h3>
      ${chartBi()}

      <div class="card card-key">
        <span class="label">笔的重要性</span>
        <p>笔是缠论的<strong>最小分析单位</strong>。所有的"线段、中枢、走势类型"都是笔的组合。<em>笔画不准，后面全是错的</em>。</p>
      </div>

      <h3>常见错误</h3>
      <ul>
        <li>❌ 分型之间直接相连（忽略独立 K 线要求）</li>
        <li>❌ 不处理 K 线包含关系就画笔</li>
        <li>❌ 把"近似分型"当成分型</li>
      </ul>
    `
  },

  "5-3": {
    week: 5,
    title: "线段初识",
    duration: "25 分钟",
    difficulty: "进阶",
    tags: ["缠论结构"],
    content: `
      <h2>从笔到线段：构建更大级别的结构</h2>
      <p>线段是<strong>至少由 3 笔构成</strong>的走势单位。它解决了笔的"碎片化"问题，让我们看到更稳定的结构。</p>

      <h3>线段定义</h3>
      <ul>
        <li>至少 3 笔，<strong>前 3 笔必须重叠</strong>（形成特征序列）</li>
        <li>线段被破坏 = 出现反向的"特征序列缺口"</li>
        <li>上升线段被向下笔破坏，结束；下降线段被向上笔破坏，结束</li>
      </ul>

      <h3>图示：线段结构</h3>
      ${chartXianduan()}

      <div class="card card-warn">
        <span class="label">学习建议</span>
        <p>线段是缠论<strong>最容易劝退的部分</strong>。新手可以先学"分型+笔"和"中枢"，线段等实操中遇到再回头补。<em>不必一次学完</em>。</p>
      </div>
    `
  },

  // ============ 第 6 周：缠论核心 ============
  "6-1": {
    week: 6,
    title: "中枢概念",
    duration: "40 分钟",
    difficulty: "核心",
    tags: ["缠论灵魂", "必须掌握"],
    content: `
      <h2>中枢：多空双方"打架的场地"</h2>
      <p>中枢是缠论的<strong>灵魂</strong>，理解了中枢就理解了缠论 80%。</p>

      <h3>什么是中枢？</h3>
      <p>某级别走势中，<strong>前三笔产生的高低点重叠区间</strong>，就构成了该级别的中枢。</p>
      <p>简单说：<em>价格在一个区间内反复震荡，这个区间就是中枢</em>。</p>

      <h3>图示：中枢识别</h3>
      ${chartZhongshu()}

      <h3>中枢的三种情况</h3>
      <ul>
        <li><strong>上升中继</strong>：上涨中回调形成中枢，<em>继续涨的概率大</em></li>
        <li><strong>下降中继</strong>：下跌中反弹形成中枢，<em>继续跌的概率大</em></li>
        <li><strong>顶部/底部</strong>：在高位或低位形成的中枢，往往是反转信号</li>
      </ul>

      <div class="card card-key">
        <span class="label">核心原则</span>
        <p><strong>走势必完美</strong>：任何级别的任何行情，都<em>必然包含至少一个中枢</em>。一个走势类型 = 中枢 + 进入段 + 离开段。</p>
      </div>

      <h3>中枢的级别</h3>
      <p>严格说，缠论的<strong>级别是由结构递归定义的</strong>（"中枢的级别由构成它的次级别走势类型决定"），并<strong>不直接等于</strong>你看盘所用的周期。</p>
      <p>实战中为了方便，才近似地说"1 分钟图上画的中枢 ≈ 1 分钟级别中枢、日线上的 ≈ 日线级别中枢"。<strong>大级别中枢是真正的"墙"，小级别中枢只是"门槛"。</strong></p>
    `
  },

  "6-2": {
    week: 6,
    title: "三类买卖点",
    duration: "45 分钟",
    difficulty: "核心",
    tags: ["买卖点", "实操"],
    content: `
      <h2>缠论的核心：三类买卖点</h2>
      <p>所有缠论分析，最终都<strong>指向一个目标：找买卖点</strong>。</p>

      <h3>第一类买点：一买</h3>
      <ul>
        <li><strong>定义</strong>：下跌趋势结束、第一个上涨中枢形成前</li>
        <li><strong>位置</strong>：背驰点 = 跌不动了</li>
        <li><strong>风险</strong>：最大（可能只是反弹而非反转）</li>
        <li><strong>仓位</strong>：建议 20-30%</li>
      </ul>

      <h3>第二类买点：二买 ⭐</h3>
      <ul>
        <li><strong>定义</strong>：一买后第一段上涨结束，随后的<strong>次级别回调不再创新低</strong></li>
        <li><strong>位置</strong>：一买低点上方、第一次回踩确认处（<em>注意：判断依据是"不破前低"，与中枢无关</em>）</li>
        <li><strong>风险</strong>：中等</li>
        <li><strong>仓位</strong>：建议 50%<em>（最佳性价比买点）</em></li>
      </ul>

      <h3>第三类买点：三买 ⭐⭐</h3>
      <ul>
        <li><strong>定义</strong>：上涨中枢形成后，<strong>突破中枢后回踩不进中枢</strong></li>
        <li><strong>位置</strong>：主升浪的起爆点</li>
        <li><strong>风险</strong>：最低（止损明确）</li>
        <li><strong>仓位</strong>：可以加到 70%</li>
      </ul>

      <h3>图示：三类买点</h3>
      ${chartBuyPoints()}

      <div class="card card-tip">
        <span class="label">实战建议</span>
        <p>初学者<strong>只做二买和三买</strong>，不碰一买。一买的判断太主观，<em>容易抄在半山腰</em>。三买是最"舒服"的买点，但出现频率低，要耐心等。</p>
        <p><em>一句话区分：<strong>二买</strong>看的是"回调不破前面的低点"，跟中枢无关；<strong>三买</strong>看的是"回踩不再跌回中枢里"。两者判断依据不同，别混。</em></p>
      </div>

      <h3>三类卖点（镜像）</h3>
      <p>卖点逻辑和买点完全镜像。一卖 = 上涨背驰；二卖 = 一卖后反弹不过前高；三卖 = 跌破中枢后反弹不进中枢。</p>
    `
  },

  "6-3": {
    week: 6,
    title: "区间套",
    duration: "30 分钟",
    difficulty: "进阶",
    tags: ["精确入场", "多级别"],
    content: `
      <h2>缠论的"狙击枪"：区间套</h2>
      <p>区间套 = <strong>大级别买点 = 小级别买点</strong>，层层嵌套，精确入场。</p>

      <h3>思维方法</h3>
      <ol>
        <li>先用<strong>周线</strong>找到大级别趋势方向</li>
        <li>再用<strong>日线</strong>找到大级别买点区域</li>
        <li>再用<strong>60分钟</strong>找到次级别买点</li>
        <li>最后用<strong>15分钟</strong>找精确入场点</li>
      </ol>

      <h3>图示：区间套</h3>
      ${chartQujian()}

      <div class="card card-key">
        <span class="label">核心心法</span>
        <p><strong>看大做小，顺大势逆小势。</strong></p>
        <p>大级别定方向（顺势），小级别找入场点（逆小势）。两个一起用，既不会逆大趋势，又不会追在小高点。</p>
      </div>

      <div class="card card-warn">
        <span class="label">警惕过度分析</span>
        <p>区间套不是用来"找完美点位"的，<em>而是用来"提高胜率"的</em>。5分钟级别的精确入场，对 1 个月持仓来说意义不大。多花时间在大级别判断上。</p>
      </div>
    `
  },

  // ============ 第 7 周：三剑合璧 ============
  "7-1": {
    week: 7,
    title: "联合作战模型",
    duration: "40 分钟",
    difficulty: "综合",
    tags: ["综合", "框架"],
    content: `
      <h2>三剑合璧：道氏定方向，斐波定位置，缠论定时机</h2>
      <p>这是整个课程的<strong>集大成</strong>，把三个工具串成一个完整决策流程。</p>

      <h3>四步决策流程</h3>
      <ol>
        <li><strong>第一步：道氏定方向</strong>（月线/周线）</li>
        <li>当前是上升/下降/盘整？答：上升</li>
        <li>如果方向不明确 → 跳过本只股票</li>
        <li>在上升趋势中，找回调</li>
        <li><strong>第二步：斐波定位置</strong>（日线）</li>
        <li>回调到 0.382 / 0.5 / 0.618 哪个位置？</li>
        <li>0.382：强势股票的最佳入场区</li>
        <li>0.618：普通股票的最佳入场区</li>
        <li><strong>第三步：缠论定时机</strong>（60分钟）</li>
        <li>出现底分型？笔的转折？中枢完成？</li>
        <li>出现二买或三买 = 精确入场点</li>
        <li><strong>第四步：止损设定</strong></li>
        <li>止损放在中枢下沿/前低</li>
        <li>止盈用斐波扩展位 1.272/1.618</li>
      </ol>

      <h3>图示：完整决策流程</h3>
      ${chartFramework()}

      <div class="card card-tip">
        <span class="label">为什么不建议单用一个工具</span>
        <p><strong>只用道氏</strong>：知道方向但不知道位置和时机，容易追高杀跌</p>
        <p><strong>只用斐波</strong>：知道位置但不知道方向和确认，容易接飞刀</p>
        <p><strong>只用缠论</strong>：能找买卖点但容易被"千人千缠"困扰，缺乏过滤</p>
        <p><strong>三者结合</strong>：方向+位置+时机三位一体，胜率大幅提升</p>
      </div>
    `
  },

  "7-2": {
    week: 7,
    title: "仓位管理",
    duration: "30 分钟",
    difficulty: "实战",
    tags: ["风控", "资金管理"],
    content: `
      <h2>比技术更重要的：仓位管理</h2>
      <p>交易圈里有句话：<em>判断对错不重要，仓位管理才决定生死</em>。（这类"名言"在流传中常被张冠李戴，领会意思即可，不必纠结出处。）</p>

      <h3>凯利公式（简化版）</h3>
      <p>参考仓位 = <strong>(胜率 × 赔率 − 失败率) ÷ 赔率</strong></p>
      <p>比如：胜率 60%、赔率 3:1，则 (0.6×3 − 0.4) ÷ 3 ≈ <strong>46.7%</strong>。</p>
      <p><em>注意：凯利公式给出的是理论最优上限，实战中通常只用它的 1/4 到 1/2（"半凯利"）</em>——因为胜率、赔率本身都是估计值，估偏了会急剧放大回撤。</p>

      <h3>实战仓位策略</h3>
      <ul>
        <li><strong>试探仓</strong>：20% 仓位，<em>先建仓确认</em></li>
        <li><strong>加仓</strong>：出现二买确认后加到 50%</li>
        <li><strong>主仓</strong>：三买出现后加到 70%</li>
        <li><strong>绝不满仓</strong>：永远留 30% 现金应对极端情况</li>
      </ul>

      <h3>止损铁律</h3>
      <div class="card card-warn">
        <span class="label">三不一改</span>
        <p><strong>不止损不交易，不预测不重仓，不分散不满仓，错了就改别死扛。</strong></p>
        <p>止损位一旦设定，<em>绝对不能下移</em>。唯一可以调整的是向上移动（移动止损/保本损）。</p>
      </div>

      <h3>止损位怎么定（两种简单办法）</h3>
      <ul>
        <li><strong>结构止损</strong>：放在中枢下沿 / 前低的下方（道氏、缠论都适用）</li>
        <li><strong>波动止损</strong>：入场价 − 2×ATR(14)（ATR 是 14 日平均真实波幅，波动大就自动放宽）</li>
        <li>二者相比，取"更近的、更讲得通"的那个；并保证<strong>单笔最大亏损控制在总资金的 1%-2% 以内</strong>，再据此反推仓位</li>
      </ul>

      <h3>别忘了交易成本</h3>
      <ul>
        <li>佣金（各家不同，双边收取）、印花税（<strong>卖出单边 0.05%</strong>，2023 年起减半）、过户费（金额很小）</li>
        <li>滑点与冲击成本：频繁交易时尤其明显，短线尤甚</li>
        <li>结论：再精确的止盈止损位，也要扣掉成本后仍有正期望才值得做——这也是"少动手"的又一个理由</li>
      </ul>

      <h3>图示：仓位管理</h3>
      ${chartPosition()}
    `
  },

  "7-3": {
    week: 7,
    title: "毕业复盘",
    duration: "45 分钟",
    difficulty: "综合",
    tags: ["总结", "展望"],
    content: `
      <h2>毕业复盘：你的下一步</h2>
      <p>恭喜你走完了 7 周学习！现在我们做一次<strong>系统复盘</strong>。</p>

      <h3>三大工具的能力边界</h3>
      <table style="width:100%; border-collapse: collapse; margin: 16px 0;">
        <thead>
          <tr style="background: #1f2530;">
            <th style="padding: 10px; text-align: left; border: 1px solid #2a3142;">工具</th>
            <th style="padding: 10px; text-align: left; border: 1px solid #2a3142;">擅长</th>
            <th style="padding: 10px; text-align: left; border: 1px solid #2a3142;">不擅长</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid #2a3142;"><strong>道氏理论</strong></td>
            <td style="padding: 10px; border: 1px solid #2a3142;">大方向判断、过滤噪音</td>
            <td style="padding: 10px; border: 1px solid #2a3142;">精确入场点</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #2a3142;"><strong>斐波那契</strong></td>
            <td style="padding: 10px; border: 1px solid #2a3142;">支撑压力位、目标测量</td>
            <td style="padding: 10px; border: 1px solid #2a3142;">方向判断</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #2a3142;"><strong>缠论</strong></td>
            <td style="padding: 10px; border: 1px solid #2a3142;">精确买卖点、结构分析</td>
            <td style="padding: 10px; border: 1px solid #2a3142;">大方向过滤（千人千缠）</td>
          </tr>
        </tbody>
      </table>

      <h3>10条心法</h3>
      <ol>
        <li>先看大周期，再看小周期</li>
        <li>方向不对，努力白费</li>
        <li>突破要放量，回调要缩量</li>
        <li>不追涨，不杀跌</li>
        <li>止损是成本，不是错误</li>
        <li>不要在盘整期重仓</li>
        <li>二买比一买安全，三买比二买效率</li>
        <li>0.618 是关键位，0.382 是机会位</li>
        <li>复盘比盯盘重要 10 倍</li>
        <li><strong>保住本金，永远是第一位</strong></li>
      </ol>

      <h3>下一步学习建议</h3>
      <ul>
        <li>📚 缠论：缠中说禅《教你炒股票》108 课（原帖）</li>
        <li>📚 道氏理论：罗伯特·雷亚《道氏理论》；汉密尔顿《股市晴雨表》（道氏理论由查尔斯·道奠基，后两位是整理与阐释者）</li>
        <li>📚 斐波那契：Constance Brown《Fibonacci Analysis》（中译《斐波那契分析》）</li>
        <li>💻 工具：同花顺/东方财富/通达信（自带画线工具）</li>
        <li>📝 复盘：每天写交易日记，每周做一次周复盘</li>
      </ul>

      <div class="card card-tip">
        <span class="label">最重要的提醒</span>
        <p>技术分析<strong>只能提高概率，不能保证结果</strong>。市场上没有圣杯。<em>最好的风控是仓位管理</em>，不是预测能力。</p>
        <p>希望这套学习手册对你有帮助。投资这条路，慢慢来比较快 🚀</p>
      </div>

      <h3>风险与合规提示（务必阅读）</h3>
      <div class="card card-warn">
        <span class="label">风险提示</span>
        <p>A 股实行 <strong>T+1</strong> 交易，并有 <strong>涨跌停</strong>（主板 ±10%，ST 股 ±5%，科创板/创业板 ±20%）、停牌、退市等制度约束；融资融券、期权等还会带来 <strong>杠杆放大风险</strong>。这些都会影响"止盈止损位"能否真正执行。</p>
        <p>本手册所有内容仅为<strong>技术分析方法的学习与交流</strong>，<strong>不构成任何投资建议</strong>。历史走势不代表未来，请独立判断、自负盈亏。</p>
      </div>
    `
  }
};

// ============ SVG 图表函数 ============
function chartNestedTrend() {
  return `
    <div class="chart">
      <div class="chart-title">三层趋势嵌套：主要 → 次级 → 短期</div>
      <svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#f0b35e"/>
            <stop offset="100%" stop-color="#ff7a59"/>
          </linearGradient>
        </defs>
        <!-- 网格 -->
        <g stroke="#2a3142" stroke-width="1">
          <line x1="0" y1="60" x2="800" y2="60"/>
          <line x1="0" y1="120" x2="800" y2="120"/>
          <line x1="0" y1="180" x2="800" y2="180"/>
        </g>
        <!-- 主要趋势 -->
        <path d="M 20 200 L 200 180 L 400 150 L 600 100 L 780 50" stroke="url(#g1)" stroke-width="3" fill="none"/>
        <text x="20" y="220" fill="#f0b35e" font-size="12">主要趋势（年度）</text>
        <!-- 次级趋势 -->
        <path d="M 20 200 L 100 190 L 180 170 L 250 165 L 320 145 L 400 150 L 480 130 L 560 110 L 620 100 L 700 75 L 780 50" stroke="#5eb1f0" stroke-width="2" fill="none" stroke-dasharray="0"/>
        <text x="20" y="20" fill="#5eb1f0" font-size="12">次级趋势（数月）</text>
        <!-- 短期波动 -->
        <path d="M 20 200 L 50 195 L 80 205 L 110 192 L 140 198 L 170 188 L 200 180 L 230 175 L 260 178 L 290 168 L 320 145 L 350 152 L 380 160 L 410 150 L 440 142 L 470 148 L 500 138 L 530 130 L 560 110 L 590 105 L 620 100 L 650 92 L 680 80 L 710 70 L 740 60 L 770 52 L 780 50" stroke="#8b95a8" stroke-width="1" fill="none" opacity="0.6"/>
        <text x="600" y="220" fill="#8b95a8" font-size="12">短期波动（数日）</text>
      </svg>
    </div>
  `;
}

function chartHHLL() {
  return `
    <div class="chart">
      <div class="chart-title">上升趋势：HH + HL / 下降趋势：LH + LL</div>
      <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
        <!-- 上升趋势 -->
        <text x="20" y="20" fill="#4ade80" font-size="13" font-weight="bold">上升趋势 (HH + HL)</text>
        <g stroke="#2a3142" stroke-width="1">
          <line x1="0" y1="40" x2="800" y2="40"/>
          <line x1="0" y1="80" x2="800" y2="80"/>
          <line x1="0" y1="120" x2="800" y2="120"/>
        </g>
        <path d="M 50 110 L 150 80 L 250 95 L 350 60 L 450 75 L 550 45 L 700 30" stroke="#4ade80" stroke-width="2" fill="none"/>
        <circle cx="150" cy="80" r="4" fill="#4ade80"/>
        <circle cx="250" cy="95" r="4" fill="#4ade80"/>
        <circle cx="350" cy="60" r="4" fill="#4ade80"/>
        <circle cx="450" cy="75" r="4" fill="#4ade80"/>
        <circle cx="550" cy="45" r="4" fill="#4ade80"/>
        <text x="350" y="20" fill="#8b95a8" font-size="11" text-anchor="middle">高点抬高 ↑ 低点抬高 ↑</text>

        <!-- 下降趋势 -->
        <text x="20" y="160" fill="#f87171" font-size="13" font-weight="bold">下降趋势 (LH + LL)</text>
        <g stroke="#2a3142" stroke-width="1">
          <line x1="0" y1="180" x2="800" y2="180"/>
          <line x1="0" y1="220" x2="800" y2="220"/>
          <line x1="0" y1="260" x2="800" y2="260"/>
        </g>
        <path d="M 50 180 L 150 210 L 250 195 L 350 230 L 450 215 L 550 250 L 700 265" stroke="#f87171" stroke-width="2" fill="none"/>
        <circle cx="150" cy="210" r="4" fill="#f87171"/>
        <circle cx="250" cy="195" r="4" fill="#f87171"/>
        <circle cx="350" cy="230" r="4" fill="#f87171"/>
        <circle cx="450" cy="215" r="4" fill="#f87171"/>
        <circle cx="550" cy="250" r="4" fill="#f87171"/>
        <text x="350" y="160" fill="#8b95a8" font-size="11" text-anchor="middle">高点降低 ↓ 低点降低 ↓</text>
      </svg>
    </div>
  `;
}

function chartQuadrant() {
  return `
    <div class="chart">
      <div class="chart-title">四象限决策表</div>
      <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="20" width="200" height="130" fill="#064e3b" stroke="#4ade80" stroke-width="2"/>
        <rect x="300" y="20" width="200" height="130" fill="#4a3a1a" stroke="#f0b35e" stroke-width="2"/>
        <rect x="100" y="150" width="200" height="130" fill="#4c1d1d" stroke="#f87171" stroke-width="2"/>
        <rect x="300" y="150" width="200" height="130" fill="#1f2530" stroke="#8b95a8" stroke-width="2"/>
        <text x="200" y="80" fill="#4ade80" font-size="16" font-weight="bold" text-anchor="middle">上升 + 回调</text>
        <text x="200" y="105" fill="#4ade80" font-size="13" text-anchor="middle">⭐ 最佳入场点</text>
        <text x="200" y="125" fill="#8b95a8" font-size="11" text-anchor="middle">道氏 + 斐波 + 缠论</text>

        <text x="400" y="80" fill="#f0b35e" font-size="16" font-weight="bold" text-anchor="middle">上升 + 新高</text>
        <text x="400" y="105" fill="#f0b35e" font-size="13" text-anchor="middle">追涨但控仓</text>
        <text x="400" y="125" fill="#8b95a8" font-size="11" text-anchor="middle">风险偏高</text>

        <text x="200" y="210" fill="#f87171" font-size="16" font-weight="bold" text-anchor="middle">下降 + 反弹</text>
        <text x="200" y="235" fill="#f87171" font-size="13" text-anchor="middle">⚠️ 谨慎做超短</text>
        <text x="200" y="255" fill="#8b95a8" font-size="11" text-anchor="middle">不重仓</text>

        <text x="400" y="210" fill="#8b95a8" font-size="16" font-weight="bold" text-anchor="middle">下降 + 新低</text>
        <text x="400" y="235" fill="#8b95a8" font-size="13" text-anchor="middle">❌ 禁止入场</text>
        <text x="400" y="255" fill="#8b95a8" font-size="11" text-anchor="middle">等待反转</text>

        <!-- 坐标轴 -->
        <line x1="300" y1="20" x2="300" y2="280" stroke="#8b95a8" stroke-width="1" stroke-dasharray="3,3"/>
        <line x1="100" y1="150" x2="500" y2="150" stroke="#8b95a8" stroke-width="1" stroke-dasharray="3,3"/>
        <text x="20" y="85" fill="#8b95a8" font-size="11">上升</text>
        <text x="20" y="225" fill="#8b95a8" font-size="11">下降</text>
        <text x="200" y="305" fill="#8b95a8" font-size="11" text-anchor="middle">回调/反弹</text>
        <text x="400" y="305" fill="#8b95a8" font-size="11" text-anchor="middle">新高/新低</text>
      </svg>
    </div>
  `;
}

function chartVolumePrice() {
  return `
    <div class="chart">
      <div class="chart-title">健康上涨：价涨量增 / 危险信号：价涨量缩</div>
      <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
        <!-- 健康走势 -->
        <text x="20" y="20" fill="#4ade80" font-size="13" font-weight="bold">✅ 健康上涨（价涨量增、价跌量缩）</text>
        <g stroke="#2a3142" stroke-width="1">
          <line x1="0" y1="40" x2="800" y2="40"/>
          <line x1="0" y1="80" x2="800" y2="80"/>
        </g>
        <path d="M 50 100 L 150 90 L 250 75 L 350 60 L 450 50 L 550 35" stroke="#4ade80" stroke-width="2" fill="none"/>
        <!-- 量柱 -->
        <rect x="55" y="120" width="20" height="15" fill="#4ade80" opacity="0.6"/>
        <rect x="155" y="115" width="20" height="20" fill="#4ade80" opacity="0.6"/>
        <rect x="255" y="105" width="20" height="30" fill="#4ade80" opacity="0.6"/>
        <rect x="355" y="100" width="20" height="35" fill="#4ade80" opacity="0.6"/>
        <rect x="455" y="95" width="20" height="40" fill="#4ade80" opacity="0.6"/>
        <rect x="555" y="90" width="20" height="45" fill="#4ade80" opacity="0.6"/>

        <!-- 危险走势 -->
        <text x="20" y="170" fill="#f87171" font-size="13" font-weight="bold">⚠️ 量价背离（价涨量缩 = 见顶信号）</text>
        <g stroke="#2a3142" stroke-width="1">
          <line x1="0" y1="190" x2="800" y2="190"/>
          <line x1="0" y1="220" x2="800" y2="220"/>
        </g>
        <path d="M 50 250 L 150 245 L 250 240 L 350 235 L 450 230 L 550 225" stroke="#f87171" stroke-width="2" fill="none"/>
        <rect x="55" y="265" width="20" height="20" fill="#f87171" opacity="0.6"/>
        <rect x="155" y="270" width="20" height="15" fill="#f87171" opacity="0.6"/>
        <rect x="255" y="273" width="20" height="12" fill="#f87171" opacity="0.6"/>
        <rect x="355" y="275" width="20" height="10" fill="#f87171" opacity="0.6"/>
        <rect x="455" y="277" width="20" height="8" fill="#f87171" opacity="0.6"/>
        <rect x="555" y="278" width="20" height="7" fill="#f87171" opacity="0.6"/>
      </svg>
    </div>
  `;
}

function chartTrendLine() {
  return `
    <div class="chart">
      <div class="chart-title">上升趋势线：连接两个回调低点</div>
      <svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#2a3142" stroke-width="1">
          <line x1="0" y1="60" x2="800" y2="60"/>
          <line x1="0" y1="120" x2="800" y2="120"/>
          <line x1="0" y1="180" x2="800" y2="180"/>
        </g>
        <path d="M 50 80 L 130 110 L 200 140 L 280 130 L 350 100 L 430 70 L 510 95 L 580 60 L 660 50 L 750 30" stroke="#5eb1f0" stroke-width="2" fill="none"/>
        <!-- 趋势线 -->
        <line x1="50" y1="200" x2="700" y2="105" stroke="#f0b35e" stroke-width="2" stroke-dasharray="5,5"/>
        <!-- 触点 -->
        <circle cx="50" cy="200" r="6" fill="#f0b35e"/>
        <circle cx="200" cy="140" r="6" fill="#f0b35e"/>
        <circle cx="430" cy="70" r="6" fill="#f0b35e"/>
        <text x="100" y="220" fill="#f0b35e" font-size="12">3个触点 = 有效趋势线</text>
        <text x="50" y="245" fill="#8b95a8" font-size="11">起点</text>
        <text x="700" y="100" fill="#8b95a8" font-size="11">终点（延伸）</text>
      </svg>
    </div>
  `;
}

function chartHS300() {
  return `
    <div class="chart">
      <div class="chart-title">沪深300 2018-2024：完整趋势循环复盘</div>
      <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#2a3142" stroke-width="1">
          <line x1="0" y1="50" x2="800" y2="50"/>
          <line x1="0" y1="120" x2="800" y2="120"/>
          <line x1="0" y1="190" x2="800" y2="190"/>
        </g>
        <!-- 走势 -->
        <path d="M 30 60 L 100 40 L 170 35 L 240 80 L 300 130 L 360 180 L 420 200 L 480 170 L 540 130 L 600 90 L 660 60 L 720 80 L 780 110" stroke="#5eb1f0" stroke-width="2" fill="none"/>
        <!-- 阶段标记 -->
        <rect x="30" y="55" width="240" height="30" fill="#f87171" opacity="0.2"/>
        <text x="150" y="75" fill="#f87171" font-size="11" text-anchor="middle">2018 下降趋势</text>

        <rect x="270" y="100" width="120" height="100" fill="#8b95a8" opacity="0.2"/>
        <text x="330" y="155" fill="#8b95a8" font-size="11" text-anchor="middle">底部反转</text>

        <rect x="390" y="50" width="270" height="100" fill="#4ade80" opacity="0.2"/>
        <text x="525" y="105" fill="#4ade80" font-size="11" text-anchor="middle">2019-2021 上升趋势</text>

        <rect x="660" y="60" width="120" height="80" fill="#f0b35e" opacity="0.2"/>
        <text x="720" y="105" fill="#f0b35e" font-size="11" text-anchor="middle">2022-2024 下行</text>

        <!-- 高低点标注 -->
        <circle cx="240" cy="80" r="4" fill="#f87171"/>
        <circle cx="420" cy="200" r="4" fill="#4ade80"/>
        <circle cx="660" cy="60" r="4" fill="#f0b35e"/>
        <text x="245" y="75" fill="#8b95a8" font-size="10">HH 失效</text>
        <text x="425" y="215" fill="#8b95a8" font-size="10">HL 起点</text>
        <text x="665" y="55" fill="#8b95a8" font-size="10">LH 出现</text>
      </svg>
    </div>
  `;
}

function chartFibonacci() {
  return `
    <div class="chart">
      <div class="chart-title">斐波那契数列与黄金矩形</div>
      <svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg">
        <!-- 螺旋 -->
        <g transform="translate(80, 30)">
          <rect x="0" y="0" width="200" height="200" fill="none" stroke="#f0b35e" stroke-width="2"/>
          <rect x="200" y="0" width="123" height="123" fill="none" stroke="#f0b35e" stroke-width="2"/>
          <rect x="200" y="123" width="77" height="77" fill="none" stroke="#f0b35e" stroke-width="2"/>
          <rect x="277" y="123" width="46" height="46" fill="none" stroke="#f0b35e" stroke-width="2"/>
          <rect x="277" y="169" width="29" height="29" fill="none" stroke="#f0b35e" stroke-width="2"/>
          <rect x="306" y="169" width="17" height="17" fill="none" stroke="#f0b35e" stroke-width="2"/>
          <path d="M 0 200 A 200 200 0 0 1 200 0 A 123 123 0 0 1 323 123 A 77 77 0 0 1 246 200 A 46 46 0 0 1 292 154 A 29 29 0 0 1 263 183 A 17 17 0 0 1 280 200" stroke="#ff7a59" stroke-width="2" fill="none"/>
        </g>
        <!-- 数列 -->
        <text x="480" y="60" fill="#f0b35e" font-size="14" font-weight="bold">斐波那契数列：</text>
        <text x="480" y="90" fill="#d8dee9" font-size="13">1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...</text>
        <text x="480" y="130" fill="#4ade80" font-size="14" font-weight="bold">关键比值：</text>
        <text x="480" y="155" fill="#d8dee9" font-size="12">0.382 = 21÷55</text>
        <text x="480" y="180" fill="#d8dee9" font-size="12">0.5 = 一半位</text>
        <text x="480" y="205" fill="#d8dee9" font-size="12">0.618 = 34÷55（黄金）</text>
        <text x="480" y="230" fill="#d8dee9" font-size="12">1.618 = 55÷34（黄金）</text>
      </svg>
    </div>
  `;
}

function chartRetracement() {
  return `
    <div class="chart">
      <div class="chart-title">斐波那契回撤位：从 10元 到 20元 上涨后的回调</div>
      <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
        <!-- 关键位横线 -->
        <g stroke-width="1" stroke-dasharray="3,3">
          <line x1="50" y1="40" x2="750" y2="40" stroke="#5eb1f0"/>
          <line x1="50" y1="90" x2="750" y2="90" stroke="#4ade80"/>
          <line x1="50" y1="140" x2="750" y2="140" stroke="#f0b35e"/>
          <line x1="50" y1="190" x2="750" y2="190" stroke="#ff7a59"/>
          <line x1="50" y1="230" x2="750" y2="230" stroke="#f87171"/>
        </g>
        <!-- 标签 -->
        <text x="760" y="44" fill="#5eb1f0" font-size="12">20.00 (0%)</text>
        <text x="760" y="94" fill="#4ade80" font-size="12">17.64 (0.236)</text>
        <text x="760" y="144" fill="#f0b35e" font-size="12">16.18 (0.382)</text>
        <text x="760" y="194" fill="#ff7a59" font-size="12">15.00 (0.5)</text>
        <text x="760" y="234" fill="#f87171" font-size="12">13.82 (0.618)</text>
        <text x="760" y="265" fill="#8b95a8" font-size="12">12.14 (0.786)</text>
        <line x1="50" y1="260" x2="750" y2="260" stroke="#2a3142" stroke-dasharray="3,3"/>
        <!-- 走势示意 -->
        <path d="M 50 260 L 150 200 L 250 100 L 350 40 L 450 80 L 550 140 L 650 195 L 750 240" stroke="#5eb1f0" stroke-width="2" fill="none"/>
        <circle cx="350" cy="40" r="5" fill="#5eb1f0"/>
        <circle cx="750" cy="240" r="5" fill="#f87171"/>
        <text x="355" y="30" fill="#8b95a8" font-size="11">高点 20元</text>
        <text x="755" y="255" fill="#8b95a8" font-size="11">低点 10元</text>
      </svg>
    </div>
  `;
}

function chartFibDraw() {
  return `
    <div class="chart">
      <div class="chart-title">画线方法：从最低点拖到最高点（上涨）</div>
      <svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#2a3142" stroke-width="1">
          <line x1="0" y1="50" x2="800" y2="50"/>
          <line x1="0" y1="120" x2="800" y2="120"/>
          <line x1="0" y1="190" x2="800" y2="190"/>
        </g>
        <path d="M 50 220 L 130 200 L 200 180 L 280 160 L 360 130 L 440 90 L 520 60 L 600 70 L 680 110 L 750 160" stroke="#5eb1f0" stroke-width="2" fill="none"/>
        <!-- 起点终点 -->
        <circle cx="50" cy="220" r="6" fill="#4ade80"/>
        <text x="60" y="240" fill="#4ade80" font-size="12">起点（最低点）</text>
        <circle cx="440" cy="90" r="6" fill="#f87171"/>
        <text x="450" y="80" fill="#f87171" font-size="12">终点（最高点）</text>
        <!-- 箭头 -->
        <line x1="50" y1="220" x2="440" y2="90" stroke="#f0b35e" stroke-width="2" stroke-dasharray="5,5"/>
        <text x="240" y="155" fill="#f0b35e" font-size="12" text-anchor="middle">拖动方向 →</text>
      </svg>
    </div>
  `;
}

function chartExtension() {
  return `
    <div class="chart">
      <div class="chart-title">斐波那契扩展位：测量上涨目标</div>
      <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
        <g stroke-width="1" stroke-dasharray="3,3">
          <line x1="50" y1="220" x2="750" y2="220" stroke="#8b95a8"/>
          <line x1="50" y1="170" x2="750" y2="170" stroke="#f87171"/>
          <line x1="50" y1="120" x2="750" y2="120" stroke="#ff7a59"/>
          <line x1="50" y1="20" x2="750" y2="20" stroke="#4ade80"/>
        </g>
        <text x="760" y="224" fill="#8b95a8" font-size="12">13.82 (起点)</text>
        <text x="760" y="174" fill="#f87171" font-size="12">26.54 (1.272)</text>
        <text x="760" y="124" fill="#ff7a59" font-size="12">30.00 (1.618)</text>
        <text x="760" y="24" fill="#4ade80" font-size="12">40.00 (2.618)</text>
        <!-- 走势 -->
        <path d="M 50 240 L 150 220 L 250 200 L 350 220 L 450 170 L 550 120 L 650 70 L 750 24" stroke="#5eb1f0" stroke-width="2" fill="none"/>
        <circle cx="250" cy="200" r="5" fill="#5eb1f0"/>
        <text x="200" y="195" fill="#8b95a8" font-size="11">回调低点 13.82</text>
        <circle cx="450" cy="170" r="5" fill="#5eb1f0"/>
        <text x="455" y="165" fill="#8b95a8" font-size="11">第一目标 26.54</text>
      </svg>
    </div>
  `;
}

function chartTimeWindow() {
  return `
    <div class="chart">
      <div class="chart-title">斐波那契时间窗口：从重要转折开始数</div>
      <svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg">
        <line x1="50" y1="100" x2="50" y2="140" stroke="#5eb1f0" stroke-width="2"/>
        <text x="50" y="90" fill="#5eb1f0" font-size="12" text-anchor="middle">起点</text>
        <!-- 时间标尺 -->
        <g stroke="#8b95a8" stroke-width="1">
          <line x1="50" y1="120" x2="730" y2="120"/>
          <line x1="50" y1="115" x2="50" y2="125"/>
          <line x1="130" y1="115" x2="130" y2="125"/>
          <line x1="210" y1="115" x2="210" y2="125"/>
          <line x1="290" y1="115" x2="290" y2="125"/>
          <line x1="370" y1="115" x2="370" y2="125"/>
          <line x1="450" y1="115" x2="450" y2="125"/>
          <line x1="530" y1="115" x2="530" y2="125"/>
          <line x1="610" y1="115" x2="610" y2="125"/>
          <line x1="690" y1="115" x2="690" y2="125"/>
        </g>
        <text x="50" y="145" fill="#8b95a8" font-size="10" text-anchor="middle">0</text>
        <text x="130" y="145" fill="#8b95a8" font-size="10" text-anchor="middle">8</text>
        <text x="210" y="145" fill="#f0b35e" font-size="12" text-anchor="middle" font-weight="bold">13</text>
        <text x="290" y="145" fill="#8b95a8" font-size="10" text-anchor="middle">21</text>
        <text x="370" y="145" fill="#f0b35e" font-size="12" text-anchor="middle" font-weight="bold">34</text>
        <text x="450" y="145" fill="#8b95a8" font-size="10" text-anchor="middle">55</text>
        <text x="530" y="145" fill="#f0b35e" font-size="12" text-anchor="middle" font-weight="bold">89</text>
        <text x="610" y="145" fill="#8b95a8" font-size="10" text-anchor="middle">144</text>
        <text x="690" y="145" fill="#8b95a8" font-size="10" text-anchor="middle">233</text>

        <!-- 关键窗口 -->
        <circle cx="210" cy="120" r="8" fill="#f0b35e"/>
        <circle cx="370" cy="120" r="8" fill="#f0b35e"/>
        <circle cx="450" cy="120" r="8" fill="#f0b35e"/>
        <text x="210" y="50" fill="#f0b35e" font-size="12" text-anchor="middle">第13天</text>
        <text x="370" y="50" fill="#f0b35e" font-size="12" text-anchor="middle">第34天</text>
        <text x="450" y="50" fill="#f0b35e" font-size="12" text-anchor="middle">第55天</text>
        <text x="210" y="200" fill="#f0b35e" font-size="11" text-anchor="middle">变盘日</text>
        <text x="370" y="200" fill="#f0b35e" font-size="11" text-anchor="middle">变盘日</text>
        <text x="450" y="200" fill="#f0b35e" font-size="11" text-anchor="middle">变盘日</text>
      </svg>
    </div>
  `;
}

function chartCATL() {
  return `
    <div class="chart">
      <div class="chart-title">宁德时代 2022：斐波那契实战复盘（示意）</div>
      <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
        <g stroke-width="1" stroke-dasharray="3,3">
          <line x1="50" y1="40" x2="750" y2="40" stroke="#5eb1f0"/>
          <line x1="50" y1="110" x2="750" y2="110" stroke="#f0b35e"/>
          <line x1="50" y1="200" x2="750" y2="200" stroke="#f87171"/>
          <line x1="50" y1="240" x2="750" y2="240" stroke="#8b95a8"/>
        </g>
        <text x="760" y="44" fill="#5eb1f0" font-size="11">692 (高点)</text>
        <text x="760" y="114" fill="#f0b35e" font-size="11">545 (0.382)</text>
        <text x="760" y="204" fill="#f87171" font-size="11">479 (0.5)</text>
        <text x="760" y="244" fill="#8b95a8" font-size="11">308 (低点)</text>
        <!-- 走势 -->
        <path d="M 50 240 L 120 200 L 190 100 L 260 40 L 330 80 L 400 110 L 470 100 L 540 130 L 610 160 L 680 200 L 750 210" stroke="#5eb1f0" stroke-width="2" fill="none"/>
        <circle cx="190" cy="100" r="6" fill="#f0b35e"/>
        <text x="120" y="95" fill="#f0b35e" font-size="11">549 (实际反弹)</text>
        <circle cx="470" cy="100" r="6" fill="#f87171"/>
        <text x="475" y="95" fill="#f87171" font-size="11">478 (实际二底)</text>
        <text x="100" y="270" fill="#8b95a8" font-size="11">2022年1月</text>
        <text x="400" y="270" fill="#8b95a8" font-size="11" text-anchor="middle">2022年Q2</text>
        <text x="700" y="270" fill="#8b95a8" font-size="11">2022年Q3</text>
      </svg>
    </div>
  `;
}

function chartFenxing() {
  return `
    <div class="chart">
      <div class="chart-title">分型识别：3根K线的组合</div>
      <svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg">
        <!-- 顶分型 -->
        <text x="50" y="20" fill="#f87171" font-size="13" font-weight="bold">顶分型：中间K最高+最低都最高</text>
        <g>
          <rect x="80" y="80" width="40" height="50" fill="#4ade80" stroke="#4ade80"/>
          <line x1="80" y1="60" x2="120" y2="60" stroke="#4ade80"/>
          <line x1="80" y1="130" x2="120" y2="130" stroke="#4ade80"/>
          <rect x="140" y="50" width="40" height="80" fill="#f87171" stroke="#f87171"/>
          <line x1="140" y1="40" x2="180" y2="40" stroke="#f87171"/>
          <line x1="140" y1="140" x2="180" y2="140" stroke="#f87171"/>
          <rect x="200" y="90" width="40" height="40" fill="#4ade80" stroke="#4ade80"/>
          <line x1="200" y1="75" x2="240" y2="75" stroke="#4ade80"/>
          <line x1="200" y1="135" x2="240" y2="135" stroke="#4ade80"/>
        </g>
        <text x="160" y="170" fill="#f87171" font-size="11" text-anchor="middle">顶分型</text>

        <!-- 底分型 -->
        <text x="450" y="20" fill="#4ade80" font-size="13" font-weight="bold">底分型：中间K最高+最低都最低</text>
        <g>
          <rect x="480" y="80" width="40" height="40" fill="#f87171" stroke="#f87171"/>
          <line x1="480" y1="70" x2="520" y2="70" stroke="#f87171"/>
          <line x1="480" y1="125" x2="520" y2="125" stroke="#f87171"/>
          <rect x="540" y="110" width="40" height="20" fill="#4ade80" stroke="#4ade80"/>
          <line x1="540" y1="120" x2="580" y2="120" stroke="#4ade80"/>
          <line x1="540" y1="135" x2="580" y2="135" stroke="#4ade80"/>
          <rect x="600" y="85" width="40" height="40" fill="#f87171" stroke="#f87171"/>
          <line x1="600" y1="75" x2="640" y2="75" stroke="#f87171"/>
          <line x1="600" y1="130" x2="640" y2="130" stroke="#f87171"/>
        </g>
        <text x="560" y="170" fill="#4ade80" font-size="11" text-anchor="middle">底分型</text>
      </svg>
    </div>
  `;
}

function chartBi() {
  return `
    <div class="chart">
      <div class="chart-title">笔：从底分型到顶分型，至少1根独立K线</div>
      <svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg">
        <!-- 上涨笔 -->
        <text x="50" y="20" fill="#4ade80" font-size="13" font-weight="bold">向上笔：底分型 → 顶分型</text>
        <g>
          <rect x="60" y="150" width="30" height="20" fill="#4ade80"/>
          <rect x="100" y="140" width="30" height="20" fill="#4ade80"/>
          <rect x="140" y="120" width="30" height="20" fill="#4ade80"/>
          <rect x="180" y="100" width="30" height="20" fill="#4ade80"/>
          <rect x="220" y="80" width="30" height="20" fill="#4ade80"/>
          <rect x="260" y="60" width="30" height="20" fill="#4ade80"/>
          <rect x="300" y="50" width="30" height="20" fill="#f87171"/>
        </g>
        <line x1="45" y1="170" x2="320" y2="50" stroke="#4ade80" stroke-width="2" stroke-dasharray="4,4"/>
        <text x="170" y="200" fill="#4ade80" font-size="11" text-anchor="middle">向上笔</text>

        <!-- 下降笔 -->
        <text x="450" y="20" fill="#f87171" font-size="13" font-weight="bold">向下笔：顶分型 → 底分型</text>
        <g>
          <rect x="460" y="50" width="30" height="20" fill="#f87171"/>
          <rect x="500" y="60" width="30" height="20" fill="#f87171"/>
          <rect x="540" y="80" width="30" height="20" fill="#f87171"/>
          <rect x="580" y="100" width="30" height="20" fill="#f87171"/>
          <rect x="620" y="120" width="30" height="20" fill="#f87171"/>
          <rect x="660" y="140" width="30" height="20" fill="#f87171"/>
          <rect x="700" y="150" width="30" height="20" fill="#4ade80"/>
        </g>
        <line x1="445" y1="50" x2="720" y2="170" stroke="#f87171" stroke-width="2" stroke-dasharray="4,4"/>
        <text x="580" y="200" fill="#f87171" font-size="11" text-anchor="middle">向下笔</text>
      </svg>
    </div>
  `;
}

function chartXianduan() {
  return `
    <div class="chart">
      <div class="chart-title">线段：至少3笔构成，前3笔必须有重叠</div>
      <svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg">
        <line x1="100" y1="80" x2="700" y2="80" stroke="#f0b35e" stroke-width="1" stroke-dasharray="3,3"/>
        <line x1="100" y1="180" x2="700" y2="180" stroke="#f0b35e" stroke-width="1" stroke-dasharray="3,3"/>
        <text x="720" y="84" fill="#f0b35e" font-size="11">中枢上沿</text>
        <text x="720" y="184" fill="#f0b35e" font-size="11">中枢下沿</text>
        <rect x="200" y="80" width="500" height="100" fill="#f0b35e" opacity="0.1" stroke="#f0b35e" stroke-dasharray="3,3"/>
        <text x="450" y="135" fill="#f0b35e" font-size="14" text-anchor="middle">中枢区间</text>
        <!-- 笔 -->
        <path d="M 50 220 L 200 200 L 250 100 L 350 130 L 450 80 L 550 150 L 700 130" stroke="#5eb1f0" stroke-width="2" fill="none"/>
        <circle cx="200" cy="200" r="5" fill="#4ade80"/>
        <circle cx="450" cy="80" r="5" fill="#f87171"/>
        <circle cx="700" cy="130" r="5" fill="#4ade80"/>
        <text x="150" y="240" fill="#8b95a8" font-size="11">底分型</text>
        <text x="430" y="70" fill="#8b95a8" font-size="11">顶分型</text>
        <text x="710" y="125" fill="#8b95a8" font-size="11">新底分型</text>
      </svg>
    </div>
  `;
}

function chartZhongshu() {
  return `
    <div class="chart">
      <div class="chart-title">中枢识别：前三笔的高低点重叠区间</div>
      <svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg">
        <rect x="200" y="100" width="400" height="80" fill="#f0b35e" opacity="0.15" stroke="#f0b35e" stroke-width="1" stroke-dasharray="4,4"/>
        <text x="400" y="145" fill="#f0b35e" font-size="14" text-anchor="middle">中枢 = 多空平衡区</text>
        <text x="400" y="200" fill="#8b95a8" font-size="11" text-anchor="middle">3 笔重叠 = 中枢成立</text>
        <line x1="200" y1="100" x2="600" y2="100" stroke="#f0b35e" stroke-dasharray="3,3"/>
        <line x1="200" y1="180" x2="600" y2="180" stroke="#f0b35e" stroke-dasharray="3,3"/>
        <!-- 笔走势 -->
        <path d="M 50 220 L 150 180 L 200 130 L 250 100 L 300 150 L 350 120 L 400 140 L 450 110 L 500 160 L 550 130 L 600 100 L 650 170 L 700 150 L 750 80" stroke="#5eb1f0" stroke-width="2" fill="none"/>
        <text x="60" y="240" fill="#8b95a8" font-size="11">下跌趋势</text>
        <text x="400" y="220" fill="#8b95a8" font-size="11" text-anchor="middle">中枢形成</text>
        <text x="750" y="70" fill="#4ade80" font-size="11">离开段</text>
      </svg>
    </div>
  `;
}

function chartBuyPoints() {
  return `
    <div class="chart">
      <div class="chart-title">三类买点：二买/三买是最佳</div>
      <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
        <!-- 中枢 -->
        <rect x="200" y="100" width="250" height="80" fill="#f0b35e" opacity="0.15" stroke="#f0b35e" stroke-width="1" stroke-dasharray="4,4"/>
        <text x="325" y="145" fill="#f0b35e" font-size="12" text-anchor="middle">上涨中枢</text>
        <!-- 走势 -->
        <path d="M 50 200 L 120 220 L 200 200 L 280 240 L 350 200 L 450 180 L 550 130 L 650 80 L 750 60" stroke="#5eb1f0" stroke-width="2" fill="none"/>
        <!-- 买点标注 -->
        <circle cx="200" cy="200" r="8" fill="#4ade80"/>
        <text x="200" y="265" fill="#4ade80" font-size="12" text-anchor="middle" font-weight="bold">一买</text>
        <text x="200" y="25" fill="#8b95a8" font-size="10" text-anchor="middle">下跌背驰点</text>

        <circle cx="350" cy="200" r="8" fill="#f0b35e"/>
        <text x="350" y="265" fill="#f0b35e" font-size="12" text-anchor="middle" font-weight="bold">二买 ⭐</text>
        <text x="350" y="50" fill="#8b95a8" font-size="10" text-anchor="middle">回踩不破一买低</text>

        <circle cx="550" cy="130" r="8" fill="#ff7a59"/>
        <text x="550" y="265" fill="#ff7a59" font-size="12" text-anchor="middle" font-weight="bold">三买 ⭐⭐</text>
        <text x="550" y="80" fill="#8b95a8" font-size="10" text-anchor="middle">突破后回踩不进中枢</text>
      </svg>
    </div>
  `;
}

function chartQujian() {
  return `
    <div class="chart">
      <div class="chart-title">区间套：大级别买点 = 小级别买点</div>
      <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
        <!-- 周线 -->
        <text x="50" y="20" fill="#5eb1f0" font-size="12" font-weight="bold">周线：上升趋势中的回调</text>
        <path d="M 50 60 L 150 50 L 250 40 L 350 60 L 450 80 L 550 70 L 650 50 L 750 30" stroke="#5eb1f0" stroke-width="2" fill="none"/>
        <circle cx="450" cy="80" r="6" fill="#f0b35e"/>
        <text x="450" y="95" fill="#f0b35e" font-size="10" text-anchor="middle">大级别买点区域</text>

        <!-- 日线 -->
        <text x="50" y="120" fill="#4ade80" font-size="12" font-weight="bold">日线：底部结构形成</text>
        <path d="M 380 180 L 420 175 L 460 165 L 500 175 L 520 160 L 540 155 L 560 145" stroke="#4ade80" stroke-width="2" fill="none"/>
        <circle cx="520" cy="160" r="6" fill="#f0b35e"/>
        <text x="520" y="200" fill="#f0b35e" font-size="10" text-anchor="middle">日线买点</text>

        <!-- 60分钟 -->
        <text x="50" y="230" fill="#f0b35e" font-size="12" font-weight="bold">60分钟：精确入场点</text>
        <path d="M 500 270 L 510 265 L 520 260 L 530 255 L 540 250" stroke="#f0b35e" stroke-width="2" fill="none"/>
        <circle cx="535" cy="252" r="5" fill="#ff7a59"/>
        <text x="555" y="255" fill="#ff7a59" font-size="10">精确买点</text>
      </svg>
    </div>
  `;
}

function chartFramework() {
  return `
    <div class="chart">
      <div class="chart-title">三剑合璧决策流程</div>
      <svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg">
        <!-- 四步 -->
        <g>
          <rect x="50" y="30" width="170" height="60" fill="#1a1f2e" stroke="#5eb1f0" stroke-width="2" rx="6"/>
          <text x="135" y="55" fill="#5eb1f0" font-size="13" font-weight="bold" text-anchor="middle">道氏定方向</text>
          <text x="135" y="75" fill="#8b95a8" font-size="11" text-anchor="middle">月线/周线判断趋势</text>
        </g>
        <g>
          <rect x="240" y="30" width="170" height="60" fill="#1a1f2e" stroke="#f0b35e" stroke-width="2" rx="6"/>
          <text x="325" y="55" fill="#f0b35e" font-size="13" font-weight="bold" text-anchor="middle">斐波定位置</text>
          <text x="325" y="75" fill="#8b95a8" font-size="11" text-anchor="middle">日线找支撑/压力</text>
        </g>
        <g>
          <rect x="430" y="30" width="170" height="60" fill="#1a1f2e" stroke="#ff7a59" stroke-width="2" rx="6"/>
          <text x="515" y="55" fill="#ff7a59" font-size="13" font-weight="bold" text-anchor="middle">缠论定时机</text>
          <text x="515" y="75" fill="#8b95a8" font-size="11" text-anchor="middle">60分钟找买卖点</text>
        </g>
        <g>
          <rect x="620" y="30" width="130" height="60" fill="#1a1f2e" stroke="#4ade80" stroke-width="2" rx="6"/>
          <text x="685" y="55" fill="#4ade80" font-size="13" font-weight="bold" text-anchor="middle">止损止盈</text>
          <text x="685" y="75" fill="#8b95a8" font-size="11" text-anchor="middle">设定保护位</text>
        </g>
        <!-- 箭头 -->
        <g stroke="#8b95a8" stroke-width="1.5" fill="none">
          <line x1="220" y1="60" x2="240" y2="60" marker-end="url(#arrow)"/>
          <line x1="410" y1="60" x2="430" y2="60" marker-end="url(#arrow)"/>
          <line x1="600" y1="60" x2="620" y2="60" marker-end="url(#arrow)"/>
        </g>
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 9 3, 0 6" fill="#8b95a8"/>
          </marker>
        </defs>
        <!-- 第二行 -->
        <rect x="50" y="130" width="700" height="150" fill="#0a0d14" stroke="#2a3142" rx="6"/>
        <text x="400" y="160" fill="#f0b35e" font-size="14" font-weight="bold" text-anchor="middle">决策流程图</text>
        <text x="80" y="190" fill="#d8dee9" font-size="12">① 大盘月线是上升趋势吗？</text>
        <text x="80" y="210" fill="#d8dee9" font-size="12">② 个股周线结构如何？符合 HH+HL 吗？</text>
        <text x="80" y="230" fill="#d8dee9" font-size="12">③ 回调到 0.382 还是 0.618？哪个位置企稳？</text>
        <text x="80" y="250" fill="#d8dee9" font-size="12">④ 60 分钟出现二买/三买信号？</text>
        <text x="80" y="270" fill="#4ade80" font-size="12" font-weight="bold">→ 三个条件都满足，建仓！止损放中枢下沿。</text>
      </svg>
    </div>
  `;
}

function chartPosition() {
  return `
    <div class="chart">
      <div class="chart-title">建仓节奏：试探 → 加仓 → 主仓</div>
      <svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg">
        <!-- 价格线 -->
        <line x1="50" y1="200" x2="750" y2="200" stroke="#8b95a8" stroke-dasharray="3,3"/>
        <!-- 阶梯仓位 -->
        <g>
          <rect x="80" y="190" width="100" height="20" fill="#5eb1f0" opacity="0.4"/>
          <text x="130" y="180" fill="#5eb1f0" font-size="11" text-anchor="middle">20% 试探仓</text>
        </g>
        <g>
          <rect x="220" y="170" width="200" height="40" fill="#f0b35e" opacity="0.4"/>
          <text x="320" y="160" fill="#f0b35e" font-size="11" text-anchor="middle">50% 加仓（二买确认）</text>
        </g>
        <g>
          <rect x="460" y="140" width="280" height="70" fill="#4ade80" opacity="0.4"/>
          <text x="600" y="130" fill="#4ade80" font-size="11" text-anchor="middle">70% 主仓（三买出现）</text>
        </g>
        <!-- 价格走势 -->
        <path d="M 60 220 L 150 215 L 230 205 L 320 190 L 410 170 L 500 140 L 600 100 L 720 80" stroke="#d8dee9" stroke-width="2" fill="none"/>
        <text x="60" y="245" fill="#8b95a8" font-size="11">① 试错</text>
        <text x="220" y="245" fill="#8b95a8" font-size="11">② 加仓</text>
        <text x="460" y="245" fill="#8b95a8" font-size="11">③ 持有</text>
        <text x="650" y="245" fill="#8b95a8" font-size="11">④ 止盈区</text>
        <!-- 止损线 -->
        <line x1="50" y1="225" x2="150" y2="225" stroke="#f87171" stroke-width="2" stroke-dasharray="3,3"/>
        <text x="100" y="220" fill="#f87171" font-size="10" text-anchor="middle">止损位</text>
      </svg>
    </div>
  `;
}
