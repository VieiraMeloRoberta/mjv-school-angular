import { Meta, Story } from '@storybook/angular';
import { SharedModule } from '../../shared.module';
import { CustomTemplateComponent } from './custom-template.component';

export default {
  title: 'CustomTemplate',
  component: CustomTemplateComponent,
  argTypes: {},
} as Meta<CustomTemplateComponent>;

const Template: Story<CustomTemplateComponent> = (
  args: CustomTemplateComponent
) => ({
  props: args,
  moduleMetadata: {
    imports: [SharedModule],
  },
  template: `
  <app-custom-template
  [title]="title"
  [subtitle]="subtitle"
  [template]="customTemplate"
  [templateConteudo]="null"
  [textos]="['a', 'b', 'c']"
>
</app-custom-template>

<ng-template #customTemplate
  let-default
  let-title="title"
  let-subtitle="subtitle">
  <h5>CUSTOM TEMPLATE</h5>

  <p style="color: blue">{{title}}</p>
  <p style="color: red">{{subtitle}}</p>
  <p style="color: green">{{default}}</p>
</ng-template>

<ng-template #templateConteudo let-texto>
  <div style="background-color: grey">{{texto}}</div>
</ng-template>
`,
});

export const Basic = Template.bind({});
Basic.args = {
  title: 'Meu título',
  subtitle: 'Meu subtítulo',
};
