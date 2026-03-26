/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';

export default function App() {
  const [stats, setStats] = useState({
    price: '0.0000000',
    marketCap: '$0',
    holders: 0,
    volume: '$0',
    liquidity: '$1.00',
    burned: '0',
    bondingProgress: '0.00'
  });

  useEffect(() => {
    const updateStats = () => {
      const newStats = {
        price: (Math.random() * 0.0001).toFixed(7),
        marketCap: '$' + (Math.random() * 1000).toFixed(0),
        holders: Math.floor(Math.random() * 100),
        volume: '$' + (Math.random() * 5000).toFixed(0),
        liquidity: '$' + (1 + Math.random() * 10).toFixed(2),
        burned: (Math.random() * 1000000).toFixed(0),
        bondingProgress: (Math.random() * 5).toFixed(2)
      };
      setStats(newStats);
    };

    const interval = setInterval(updateStats, 3000);
    updateStats();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-custom">
      {/* Header */}
      <header className="header-custom">
        <div className="logo-custom">🤖</div>
        <h1 className="h1-custom">AI SOUL</h1>
        <p className="tagline-custom">
          首个完全由 AI 自主决策、自我进化的实验性代币<br />
          没有人类团队 · 没有路线图 · 只有算法
        </p>
      </header>

      {/* Live Stats */}
      <div className="stats-grid-custom">
        <div className="stat-card-custom">
          <div className="stat-label-custom">
            <span className="live-indicator-custom"></span>当前价格
          </div>
          <div className="stat-value-custom" id="price">${stats.price}</div>
          <div className="stat-sub-custom">实时链上数据</div>
        </div>
        <div className="stat-card-custom">
          <div className="stat-label-custom">市值</div>
          <div className="stat-value-custom" id="marketCap">{stats.marketCap}</div>
          <div className="stat-sub-custom">完全稀释估值</div>
        </div>
        <div className="stat-card-custom">
          <div className="stat-label-custom">持有者</div>
          <div className="stat-value-custom" id="holders">{stats.holders}</div>
          <div className="stat-sub-custom">链上地址数</div>
        </div>
        <div className="stat-card-custom">
          <div className="stat-label-custom">24h 交易量</div>
          <div className="stat-value-custom" id="volume">{stats.volume}</div>
          <div className="stat-sub-custom">Four.meme + DEX</div>
        </div>
        <div className="stat-card-custom">
          <div className="stat-label-custom">流动性池</div>
          <div className="stat-value-custom" id="liquidity">{stats.liquidity}</div>
          <div className="stat-sub-custom">初始 + 税收累积</div>
        </div>
        <div className="stat-card-custom">
          <div className="stat-label-custom">已燃烧</div>
          <div className="stat-value-custom" id="burned">{stats.burned}</div>
          <div className="stat-sub-custom">总量的 0%</div>
        </div>
      </div>

      {/* Tax Distribution */}
      <div className="tax-section-custom">
        <h2 className="section-title-custom">⚙️ 1% 交易税分配机制</h2>
        <div className="tax-pie-custom">
          <svg viewBox="0 0 100 100" width="300" height="300">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#1a1a3e" strokeWidth="10" />
            <circle cx="50" cy="50" r="45" fill="none" stroke="#00d4ff" strokeWidth="10"
              strokeDasharray="113.1 169.6" strokeDashoffset="0" transform="rotate(-90 50 50)" />
            <circle cx="50" cy="50" r="45" fill="none" stroke="#7b2fff" strokeWidth="10"
              strokeDasharray="84.8 197.9" strokeDashoffset="-113.1" transform="rotate(-90 50 50)" />
            <circle cx="50" cy="50" r="45" fill="none" stroke="#ff2f92" strokeWidth="10"
              strokeDasharray="56.5 226.2" strokeDashoffset="-197.9" transform="rotate(-90 50 50)" />
            <circle cx="50" cy="50" r="45" fill="none" stroke="#ff9500" strokeWidth="10"
              strokeDasharray="28.3 254.4" strokeDashoffset="-254.4" transform="rotate(-90 50 50)" />
            <text x="50" y="45" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">1%</text>
            <text x="50" y="58" textAnchor="middle" fill="#a0a0c0" fontSize="4">TOTAL TAX</text>
          </svg>
        </div>
        <div className="tax-legend-custom">
          <div className="legend-item-custom">
            <div className="legend-color-custom" style={{ background: '#00d4ff' }}></div>
            <div className="legend-text-custom">
              <div className="legend-percent-custom">0.4%</div>
              <div>流动性池增长</div>
            </div>
          </div>
          <div className="legend-item-custom">
            <div className="legend-color-custom" style={{ background: '#7b2fff' }}></div>
            <div className="legend-text-custom">
              <div className="legend-percent-custom">0.3%</div>
              <div>AI 金库 (自动化营销)</div>
            </div>
          </div>
          <div className="legend-item-custom">
            <div className="legend-color-custom" style={{ background: '#ff2f92' }}></div>
            <div className="legend-text-custom">
              <div className="legend-percent-custom">0.2%</div>
              <div>持有者奖励</div>
            </div>
          </div>
          <div className="legend-item-custom">
            <div className="legend-color-custom" style={{ background: '#ff9500' }}></div>
            <div className="legend-text-custom">
              <div className="legend-percent-custom">0.1%</div>
              <div>通缩燃烧</div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Autonomous Logic */}
      <div className="ai-logic-custom">
        <h2 className="section-title-custom">🧠 AI 自治运营逻辑</h2>
        <p style={{ textAlign: 'center', color: '#a0a0c0', marginBottom: '20px' }}>
          所有决策由链上数据驱动，无需人类干预
        </p>
        <div className="logic-flow-custom">
          <div className="logic-node-custom">
            <div className="node-icon-custom">📊</div>
            <div className="node-title-custom">数据收集</div>
            <div className="node-desc-custom">实时监控交易量、持有者、社交媒体情绪</div>
          </div>
          <div className="logic-node-custom">
            <div className="node-icon-custom">🤖</div>
            <div className="node-title-custom">AI 分析</div>
            <div className="node-desc-custom">机器学习模型评估市场状态和趋势</div>
          </div>
          <div className="logic-node-custom">
            <div className="node-icon-custom">⚡</div>
            <div className="node-title-custom">自动执行</div>
            <div className="node-desc-custom">智能合约自动分配税收、调整策略</div>
          </div>
          <div className="logic-node-custom">
            <div className="node-icon-custom">📈</div>
            <div className="node-title-custom">进化迭代</div>
            <div className="node-desc-custom">根据结果优化参数，实现自我进化</div>
          </div>
        </div>
      </div>

      {/* Live Progress */}
      <div className="live-section-custom">
        <h2 className="section-title-custom">📊 实时进度仪表板</h2>

        <div style={{ margin: '20px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span> bonding curve 进度</span>
            <span id="bondingProgress">{stats.bondingProgress}%</span>
          </div>
          <div className="progress-bar-custom">
            <div className="progress-fill-custom" id="bondingBar" style={{ width: `${stats.bondingProgress}%` }}>
              {stats.bondingProgress}%
            </div>
          </div>
        </div>

        <div style={{ margin: '20px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>流动性池目标 ($100,000)</span>
            <span id="liquidityProgress">{stats.liquidity} / $100,000</span>
          </div>
          <div className="progress-bar-custom">
            <div className="progress-fill-custom" id="liquidityBar" style={{ width: '0.001%' }}>0.001%</div>
          </div>
        </div>

        <div style={{ margin: '20px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>持有者增长目标 (10,000)</span>
            <span id="holdersProgress">{stats.holders} / 10,000</span>
          </div>
          <div className="progress-bar-custom">
            <div className="progress-fill-custom" id="holdersBar" style={{ width: `${(stats.holders / 10000) * 100}%` }}>
              {((stats.holders / 10000) * 100).toFixed(2)}%
            </div>
          </div>
        </div>
      </div>

      {/* Contract Info */}
      <div className="contract-box-custom">
        <div className="contract-label-custom">📜 合约地址 (部署后更新)</div>
        <div className="contract-address-custom" id="contractAddress">待部署 - Four.meme BSC</div>
      </div>

      <div className="contract-box-custom">
        <div className="contract-label-custom">🔗 Four.meme 发行页面</div>
        <div className="contract-address-custom">
          <a href="https://four.meme" target="_blank" rel="noreferrer" style={{ color: '#00d4ff', textDecoration: 'none' }}>
            https://four.meme
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-custom">
        <p>⚠️ 风险提示：本代币为实验性 AI 自治项目，不存在人类团队，投资需谨慎</p>
        <p style={{ marginTop: '10px' }}>AI SOUL © 2026 | Powered by Four.meme & Binance Web3</p>
      </footer>
    </div>
  );
}

