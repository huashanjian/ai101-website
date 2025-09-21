import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  courseSidebar: [
    {
      type: 'category',
      label: '阶段一：认识智能与基本建模',
      link: {type: 'generated-index'},
      items: [
        'stage-1/lecture-1',
        'stage-1/lecture-2',
        'stage-1/lecture-3',
        'stage-1/lecture-4',
        'stage-1/project-1',
      ],
    },
    {
      type: 'category',
      label: '阶段二：复杂决策与学习',
      link: {type: 'generated-index'},
      items: [
        'stage-2/lecture-5',
        'stage-2/lecture-6',
        'stage-2/lecture-7',
        'stage-2/project-2',
      ],
    },
    {
      type: 'category',
      label: '阶段三：AI如何“学习”',
      link: {type: 'generated-index'},
      items: [
        'stage-3/lecture-9',
        'stage-3/lecture-10',
        'stage-3/project-3',
      ],
    },
    {
      type: 'category',
      label: '阶段四：推理、感知与AI社会问题',
      link: {type: 'generated-index'},
      items: [
        'stage-4/lecture-13',
        'stage-4/lecture-14',
        'stage-4/project-4',
      ],
    },
  ],
};

export default sidebars;
