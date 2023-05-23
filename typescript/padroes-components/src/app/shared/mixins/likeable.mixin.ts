import { Constructor } from './constructor.type';
import {
  EventEmitter,
  Output,
  Input,
  Injectable,
  Directive,
} from '@angular/core';
import { HasEntityId } from './has-entity-id.type';

export interface Likeable {
  isLiked: boolean;

  likes: number;

  like: EventEmitter<string>;

  unlike: EventEmitter<string>;

  toggleLike(): void;
}

export type LikeableConstructor = Constructor<Likeable>;

export function mixinLikeable<T extends Constructor<HasEntityId>>(
  base: T
): LikeableConstructor & T {
  @Directive()
  class BaseLikeableClass extends base implements Likeable {
    @Input()
    isLiked!: boolean;

    @Input()
    likes!: number;

    @Output()
    like = new EventEmitter<string>();

    @Output()
    unlike = new EventEmitter<string>();

    constructor(...args: any[]) {
      super(...args);
    }

    toggleLike(): void {
      console.log('toggle');
      if (this.isLiked) {
        this.unlike.emit(this.entityId);
      } else {
        this.like.emit(this.entityId);
      }
      this.isLiked = !this.isLiked;
    }
  }

  return BaseLikeableClass;
}
