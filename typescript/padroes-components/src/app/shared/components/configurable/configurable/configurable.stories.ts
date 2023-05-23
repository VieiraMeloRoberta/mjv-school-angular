import { Meta, Story } from '@storybook/angular';
import { ConfigurableModule } from '../configurable.module';
import { CONFIG_TOKEN, ComponentConfig } from '../configuration.const';
import { ConfigurableComponent } from './configurable.component';

export default {
  title: 'ConfigurableComponent',
  component: ConfigurableComponent,
  argTypes: {},
} as Meta<ConfigurableComponent>;

const Template: Story<ConfigurableComponent> = (
  args: ConfigurableComponent
) => ({
  props: args,
  moduleMetadata: {
    imports: [
      ConfigurableModule.forRoot({
        color: 'green',
      }),
    ],
    // providers: [
    //   {
    //     provide: CONFIG_TOKEN,
    //     useValue: {
    //       backgroundColor: 'blue',
    //       borderRadius: '40px',
    //       color: 'white',
    //     } as ComponentConfig,
    //   },
    // ],
  },
  template: `
  <app-configurable></app-configurable>
  `,
});

export const Basic = Template.bind({});
Basic.args = {};
