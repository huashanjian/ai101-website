import React from 'react';
import Layout from '@theme/Layout';

const resources = [
  {
    title: '讲义幻灯片',
    description: '下载每一讲的 PDF 幻灯片，方便线下复习或课堂教学。',
    link: '/pdf/stage-1/lecture-1-slides.pdf',
    action: '下载阶段一示例讲义',
  },
  {
    title: '项目模板',
    description: '提供项目报告模板与评估 Rubric，帮助团队快速入门。',
    link: 'https://github.com/ai101-course/website/tree/main/templates',
    action: '查看 GitHub 模板',
  },
  {
    title: '推荐阅读',
    description: '精选适合中学生的人工智能入门材料与拓展资源。',
    link: 'https://www.elementsofai.com/',
    action: '访问推荐阅读',
  },
];

export default function ResourceHub(): JSX.Element {
  return (
    <Layout
      title="资源中心"
      description="AI101 课程资源下载与拓展阅读入口"
    >
      <main className="container margin-vert--lg">
        <header className="text--center margin-bottom--lg">
          <h1>资源中心</h1>
          <p>在这里可以获取课程讲义、项目模板、推荐阅读与更多拓展资料。</p>
        </header>
        <section className="row">
          {resources.map((resource) => (
            <article key={resource.title} className="col col--4 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <h3>{resource.title}</h3>
                </div>
                <div className="card__body">
                  <p>{resource.description}</p>
                </div>
                <div className="card__footer">
                  <a className="button button--primary button--block" href={resource.link}>
                    {resource.action}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  );
}
