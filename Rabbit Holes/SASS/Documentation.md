# SASS vs SCSS
SCSS = Sassy CSS, the newer syntax.
SASS = the older syntax.

# Using Sassy
Installation: `gem install sass`

Usage: `sass input.scss output.css`

Watch: `sass --watch input.scss:output.css`

Watch Directory: `sass --watch app/sass:public/stylesheets`

# Parent Selector
```
a {
    &:hover { ... }
}
```

`&` references the parent selector `a`.
Multiple layers of nesting will add all parent selectors.
`&` can be used in the beginning of a compound selector i.e. `&-something`

# Nested Properties
Some properties are in 'namespaces,' like `font-family` and `font-size`.

You can reference them like so:
```
.example {
    font: {
        family: fantasy;
        size: ...;
        weight: ...;
    }
}
```

# Placeholder Selectors
For usage with `@extend`. Won't be rendered unless extended.

# SassScript
SassScript is where the variables, arithmetic, and functions of Sass come from.

To experiment in sass script in an interactive shell: `sass -i`.

## Variables
Block-level scoping.

They support these data types:
* numbers
* strings
* colors
* booleans
* nulls
* lists of values separated by spacees or commas
* maps from one value to another (key: value)
* function references

### Lists
Lists are a series of values separated by either spaces or commas.

Lists can be used with list functions like the nth function, join function, and append function to make them useful.
The `@each` directive can be used to add styles for each item in a list.

Lists can contain lists.

### Map
`$map: (key1: value1, key2: value2, key3: value3);`
Maps represent an association between keys and values - and make it easy to collect values into named groups and access those groups dynamically.

### Interpolation
You use variables in selectors/property names by using the `#{}` interpolation syntax.

```
$name: foo;
$attr: border;

p.#{name} {
    #{$attr}-color: blue;
}
```

### !default
```
$variable: "first value";
$variable: "second value" !default;
```
`$variable` would be the "first value" because variables are not assigned if they are already have a value with the `!default` flag.

# @-Rules and Directives
SASS supports all CSS3 @-Rules and has Sass-specific 'directives.'

## `@import`
Used to merge imported SCSS files.

## `@media`
Behave exactly as CSS3, but allow nesting.

## `@extend`
For usage with placeholder classes, but can also be used with other selectors.
You can chain extends and have multiple extends.

# Control Directives and Expressions
## if()
```
if(true, 1px, 2px) => 1px
if(false, 1px, 2px) => 2px
```

## `@if`
Takes an expression and uses the styles nested beneath it if the expression returns anything other than false/null.
Can be followed by multiple `@else if` statements and one `@else` statement.

## `@for`
```
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}
```

## `@each`
```
@each $var in <list or map> {
    ...
}
```

Or with multiple variables in nested lists or maps:

```
$list = (a, b, c), (d, e, f), (g, h, i);
@each $var1, $var2, $var3 in $list {
    ...
}
```

## `@while`
```
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}
```