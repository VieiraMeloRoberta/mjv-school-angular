import { Meta, Story } from '@storybook/angular';
import { SharedModule } from '../../shared.module';
import { DynamicComponent } from './dynamic.component';

export default {
  title: 'DynamicComponent',
  component: DynamicComponent,
  argTypes: {},
} as Meta<DynamicComponent>;

const Template: Story<DynamicComponent> = (args: DynamicComponent) => ({
  props: args,
  moduleMetadata: {
    imports: [SharedModule],
  },
  template: `
<div>DYNAMIC COMPONENTS</div>
<app-dynamic>
</app-dynamic>
`,
});

export const Basic = Template.bind({});
Basic.args = {};
