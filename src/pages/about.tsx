import React from 'react';
import Layout from '@theme/Layout';

export default function AboutPage(): JSX.Element {
  return (
    <Layout title="关于我们" description="了解 AI101 课程团队与开源贡献方式">
      <main className="container margin-vert--lg">
        <section className="row">
          <div className="col col--8 col--offset-2">
            <h1>关于 AI101</h1>
            <p>
              AI101 是一门面向中学生与公众的人工智能通识课程，致力于用严谨但友好的方式介绍 AI 的核心概念、前沿应用与社会影响。
            </p>
            <h2>课程团队</h2>
            <p>
              课程由高校教师、产业专家与一线教师共同打造。我们相信跨学科协作能够带来更丰富的学习体验。
            </p>
            <ul>
              <li>教学设计：负责课程整体框架、学习目标与评估策略。</li>
              <li>内容研发：编写讲义、案例与项目任务。</li>
              <li>技术支持：维护网站、交互组件与部署流程。</li>
            </ul>
            <h2>如何参与</h2>
            <p>
              项目遵循开源协作模式。你可以在 GitHub 上提出 Issue、提交 Pull Request，或在 Discussions 参与课程的持续改进。
            </p>
            <ul>
              <li>
                GitHub 仓库：
                <a href="https://github.com/ai101-course/website" target="_blank" rel="noopener noreferrer">
                  ai101-course/website
                </a>
              </li>
              <li>
                贡献指南：我们建议先阅读 CONTRIBUTING.md，以了解内容规范与提交流程。
              </li>
            </ul>
            <h2>联系与反馈</h2>
            <p>
              如果你是学校、社区组织或教育机构，欢迎联系我们进行课程合作与技术支持，共同推动人工智能素养教育。
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
