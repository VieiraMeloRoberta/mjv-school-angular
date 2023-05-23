import { Meta, Story } from '@storybook/angular';
import { SharedModule } from '../../shared.module';
import { NgContentSimpleComponent } from './ng-content-simple.component';

export default {
  title: 'NgContentSimple',
  component: NgContentSimpleComponent,
  argTypes: {
    open: { control: 'boolean' },
  },
} as Meta<NgContentSimpleComponent>;

const Template: Story<NgContentSimpleComponent> = (
  args: NgContentSimpleComponent
) => ({
  props: args,
  moduleMetadata: {
    imports: [SharedModule],
  },
  template: `
<app-ng-content-simple>
    <h1>My content</h1>
    <app-pure-component></app-pure-component>
</app-ng-content-simple>
`,
});

export const Basic = Template.bind({});
Basic.args = {};
