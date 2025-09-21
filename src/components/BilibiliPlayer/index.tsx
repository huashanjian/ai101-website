import React from 'react';

export interface BilibiliPlayerProps {
  /** Bilibili 视频的 BV 号 */
  bvid: string;
  /** 指定视频的页面号，默认 1 */
  page?: number;
  /** 可选：自定义标题，便于无障碍辅助阅读 */
  title?: string;
}

const BilibiliPlayer: React.FC<BilibiliPlayerProps> = ({bvid, page = 1, title}) => {
  const src =
    'https://player.bilibili.com/player.html?bvid=' +
    encodeURIComponent(bvid) +
    '&page=' +
    page;

  return (
    <div className="responsive-bilibili-container">
      <iframe
        src={src}
        title={title ?? 'Bilibili 视频 ' + bvid}
        scrolling="no"
        frameBorder="no"
        allow="fullscreen"
        allowFullScreen
      />
    </div>
  );
};

export default BilibiliPlayer;
