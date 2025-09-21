import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const highlights = [
  {
    title: '循序渐进的学习路径',
    description: '四个阶段覆盖认知、决策、学习与社会影响，帮助你全面理解人工智能。',
    link: '/docs/stage-1/lecture-1',
    action: '开始学习',
  },
  {
    title: '交互式课堂体验',
    description: '借助自定义组件、测验与视频，让在线学习也能保持高参与度。',
    link: '/docs/stage-1/lecture-1#小测验',
    action: '体验互动内容',
  },
  {
    title: '开源社区共建',
    description: '欢迎学生、教师与开发者在 GitHub 参与课程内容共创。',
    link: 'https://github.com/ai101-course/website',
    action: '加入我们',
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout
      title="AI101 通识课"
      description="面向中学生的人工智能通识课程"
    >
      <main>
        <section className="hero hero--primary">
          <div className="container">
            <h1 className="hero__title">AI101：面向未来的人工智能课堂</h1>
            <p className="hero__subtitle">
              用易懂的语言、严谨的结构和丰富的互动，帮助中学生走进人工智能世界。
            </p>
            <div>
              <Link className="button button--secondary button--lg" to="/docs/stage-1/lecture-1">
                立即开始课程
              </Link>
            </div>
          </div>
        </section>

        <section className="container margin-vert--xl">
          <div className="row">
            {highlights.map((item) => (
              <div key={item.title} className="col col--4">
                <div className="card margin-bottom--lg">
                  <div className="card__header">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="card__body">
                    <p>{item.description}</p>
                  </div>
                  <div className="card__footer">
                    <Link className="button button--primary button--sm" to={item.link}>
                      {item.action}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container margin-bottom--xl">
          <div className="row">
            <div className="col col--6">
              <h2>关于课程</h2>
              <p>
                AI101 由高校教师、行业专家与一线教师共同打造。我们坚持“文档即代码”的内容管理方式，确保课程持续迭代、开放透明。
              </p>
              <p>
                课程遵循 WCAG 2.1 AA 无障碍标准，支持移动优先体验，并提供完整的暗黑模式。
              </p>
            </div>
            <div className="col col--6">
              <h2>技术亮点</h2>
              <ul>
                <li>Plausible Analytics 与 Giscus，兼顾社区互动与隐私保护。</li>
                <li>Algolia DocSearch 提供毫秒级站内搜索体验。</li>
                <li>GitHub Actions 自动化部署，保持持续更新。</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
