[Note Source](https://www.sitepoint.com/avoid-sass-extend/)

# `@include` vs `@extend`

## What does `@extend` do?
```scss
.selector-A {
    @extend .selector-B;
    unicorn: true;
}

.selector-B {
    rainbow: true;
}
```

compiles to:

```css
.selector-A {
    unicorn: true;
}

.selector-B,
.selector-A {
    rainbow: true;
}
```

## Why not `@extend`?

* Extending is invisible, i.e. it is harder to decipher the resulted compiled CSS in complex use cases.
    * Debugging CSS should be easy, not hard.
* The rumor that `@extend` is superior performance-wise is wrong due to `gzipping.`
* Extending is not possible across media query contexts
* `@include` can accept arguments, define defaults for arguments, define variable arguments, etc.