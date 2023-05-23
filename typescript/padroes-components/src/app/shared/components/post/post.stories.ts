import { Meta, Story } from '@storybook/angular';
import { SharedModule } from '../../shared.module';
import { PostComponent } from './post.component';

export default {
  title: 'Mixins - PostComponent',
  component: PostComponent,
} as Meta<PostComponent>;

const Template: Story<PostComponent> = (args: PostComponent) => ({
  props: args,
  moduleMetadata: {
    imports: [SharedModule],
  },
});

export const Basic = Template.bind({});
Basic.args = {
  entityId: '1',
  content: 'My Post content',
  isLiked: false,
  isClapped: true,
  likes: 100,
  claps: 200,
};
