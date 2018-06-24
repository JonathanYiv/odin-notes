# YAML: YAML Ain't Markup Language
* Human-readable data serialization language
* Commonly used for configuration files
* .yaml, .yml extensions

## Data Types
* Scalar (strings, integers, floats)
* Lists
* Associative Arrays (AKA Hashes, Maps, Dictionaries)
* Custom


```yaml
# This is a YAML comment.

key: value # Values can be strings, numbers, scientific notation of numbers, booleans, null
key with spaces: another value

# Strings don't need to be quoted, but can be optionally
# Keys can be quoted

# Multiple-line Strings: Literal Block
literal_block: |
    This entire block of text will be the value.

    With line breaks being preserved.

    It continues until de-dented.

# Multiple-line Strings: Folded Block
folded_block: >
    This entire block of text will be the value, but newlines will be replaced with a single space.

    Blank lines are converted to a newline character.

# Collections: Lists and Associative Arrays
a_map:
  nested_key: value
  another_key: another value
  nested_map:
    double_nested_key: double nested value

# Sequence/List
a_sequence:
  Item 1
  Item 2
  0.5
  Item 4
  key: value
# You can nest sequences
```