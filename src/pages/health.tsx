import React from 'react';
import Layout from '@theme/Layout';

export default function Health(): JSX.Element {
  return (
    <Layout title="Health" description="Render health check">
      <main className="container margin-vert--lg">
        <h1>Health OK</h1>
        <p>如果你能看到这个页面，说明 React 渲染与路由工作正常。</p>
      </main>
    </Layout>
  );
}


