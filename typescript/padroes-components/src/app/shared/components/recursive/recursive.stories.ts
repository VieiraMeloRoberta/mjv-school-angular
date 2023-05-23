import { Meta, storiesOf, Story } from '@storybook/angular';
import { SharedModule } from '../../shared.module';
import { Node, RecursiveComponent } from './recursive.component';

const node: Node = {
  id: '1',
  children: [
    {
      id: '2',
      children: [
        {
          id: '3',
          children: [
            {
              id: '4',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: '5',
      children: [
        {
          id: '6',
          children: [],
        },
      ],
    },
  ],
};

export default {
  title: 'Recursive Components',

  argTypes: {
    node: { control: 'object' },
  },
} as Meta<RecursiveComponent>;

const Template: Story<RecursiveComponent> = (args: RecursiveComponent) => ({
  props: args,
  moduleMetadata: {
    imports: [SharedModule],
  },
  template: `
  <app-recursive [node]="node">
  </app-recursive>
`,
});

export const Basic = Template.bind({});
Basic.args = {
  node: node,
};
