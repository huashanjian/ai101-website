import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export interface PdfViewerProps {
  /** PDF 文件在 static/pdf 路径下的相对路径，例如 syllabus.pdf */
  file: string;
  /** 可选：在旁边展示的标题 */
  title?: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({file, title}) => {
  const src = '/pdf/' + file + '#toolbar=0&view=FitH';

  return (
    <div style={{margin: '2rem 0'}}>
      {title ? <h3>{title}</h3> : null}
      <BrowserOnly fallback={<div>正在加载 PDF 预览...</div>}>
        {() => (
          <iframe
            src={src}
            title={title ?? 'PDF 预览'}
            style={{width: '100%', height: '640px', border: '1px solid #e0e6f0'}}
            loading="lazy"
          />
        )}
      </BrowserOnly>
      <p>
        如果文档未正常显示，
        <a href={'/pdf/' + file} target="_blank" rel="noopener noreferrer">
          点此下载
        </a>
        。
      </p>
    </div>
  );
};

export default PdfViewer;
