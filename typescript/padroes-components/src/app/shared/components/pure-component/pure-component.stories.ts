import { Meta, Story } from '@storybook/angular';
import { SharedModule } from '../../shared.module';
import { PureComponentComponent } from './pure-component.component';

export default {
  title: 'Pure Component',
  component: PureComponentComponent,
  argTypes: {
    open: { control: 'boolean' },
  },
} as Meta<PureComponentComponent>;

const Template: Story<PureComponentComponent> = (
  args: PureComponentComponent
) => ({
  props: args,
  moduleMetadata: {
    imports: [SharedModule],
  },
});

export const Basic = Template.bind({});
Basic.args = {
  open: true,
};

export const Fechado = Template.bind({});
Basic.args = {
  open: false,
};
