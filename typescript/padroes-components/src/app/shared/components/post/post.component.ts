import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  Directive,
} from '@angular/core';
import { mixinLikeable } from '../../mixins/likeable.mixin';
import { HasEntityId } from '../../mixins/has-entity-id.type';
import { mixinClappable } from '../../mixins/clappable.mixin';

@Directive()
class PostComponentBase implements HasEntityId {
  @Input()
  entityId!: string;
}

const MixedBasePostComponent = mixinClappable(mixinLikeable(PostComponentBase));

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent extends MixedBasePostComponent {
  @Input()
  content!: string;

  constructor() {
    super();
  }
}
