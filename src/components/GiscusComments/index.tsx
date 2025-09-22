import React, {useEffect, useRef, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useColorMode} from '@docusaurus/theme-common';

function useDeferredVisible(): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      {rootMargin: '200px'}
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [visible]);

  return [ref, visible];
}

export default function GiscusComments(): JSX.Element | null {
  const {siteConfig} = useDocusaurusContext();
  const {colorMode} = useColorMode();
  const [mountRef, visible] = useDeferredVisible();

  const themeConfig: any = siteConfig.themeConfig ?? {};
  const giscus = themeConfig.giscus ?? {};

  const repo = giscus.repo as string | undefined;
  const repoId = giscus.repoId as string | undefined;
  const category = giscus.category as string | undefined;
  const categoryId = giscus.categoryId as string | undefined;

  // 若未配置必要字段，则不渲染组件
  if (!repo || !repoId || !category || !categoryId) {
    return null;
  }

  const theme = colorMode === 'dark' ? 'dark_dimmed' : 'light';

  return (
    <div style={{marginTop: '2rem'}}>
      <hr className="section-divider" />
      <h3 style={{marginTop: '1.5rem'}}>讨论区</h3>
      <div ref={mountRef} />
      <BrowserOnly>
        {() => {
          if (!visible) return null;
          // 仅在浏览器端按需加载，避免 SSR 阶段出现 require.resolveWeak 问题
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const Giscus = require('@giscus/react').default;
          return (
            <Giscus
              id="giscus-comments"
              repo={repo}
              repoId={repoId}
              category={category}
              categoryId={categoryId}
              mapping="pathname"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="bottom"
              theme={theme}
              lang="zh-CN"
              loading="lazy"
            />
          );
        }}
      </BrowserOnly>
    </div>
  );
}


