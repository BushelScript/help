---
title: "B: Grammar"
sidebar_label: "B: Grammar"
---

The following is a compilation of all the **Syntax** sections throughout this reference, alongside some more fundamental definitions. Informal notions are defined with `(parentheses)`. Please note that this is _not_ a complete formal specification, and devising one is not a goal at the moment.

<!-- Search regex:
  \*\*Syntax\*\*:\s*\n(\s+.+?\n)+?\n
-->

    # To simplify this grammar, we allow rules to be templates.
    # We write rule R templated on X as R( X ).
    # Here are some generally applicable templates we'll use:
    <pump>( R ) :: R [ <pump>( R ) ]
    <pump-with-end>( R, E ) <pump>( E | R )
    <delimited-list>( R, D ) :: R [ <pump>( D R ) ]
    <delimited-list-with-end>( R, D, E ) :: R ( E | <pump-with-end>( D R, E ) )

    # Fundamental notions:
    <utf-8>( E ) :: (any UTF-8 string that does not match rule E) E
    <category>( X1, …, Xn, [ NOT E ] ) ::
      (any UTF-8 grapheme cluster in Unicode General Category X1, or …, or Xn
       that does not match rule E, if given)
    <space> :: <category>(Z* NOT <line-break>)
    <line-break> ::
      (one of:
        U+000D U+000A (CRLF), U+000A thru U+000D,
        U+0085, U+2028, or U+2029
      )
    <digits> :: (any sequence of decimal digits 0 thru 9)

    <sequence-delimiter> :: <line-break> [ <pump>( <line-break> | <line-comment> ) ]
    <line-comment> :: '--' <utf-8>( <line-break> )

    # <blank> applies zero/one (depending on context) or more times
    # between all syntax elements:
    <blank> :: <space> | <block-comment>
    <block-comment> :: '--(' <utf-8>( ')--' )

    <term-name> :: delimited-list( <word>, <blank> )
    <term-name>( E ) :: <delimited-list-with-end>( <word>, <blank>, E )
    <lazy-term-name> :: <word> | ( '|' <term-name>( '|' ) )
    <word> :: <utf-8>( <space> | <category>( P*, S* NOT (one of _.-/'’?) ) )
    
    <term-role> :: type | property | constant | command | parameter | variable | resource
    <term-uri>( E ) ::
      id:<utf-8>( E ) |
      res:(resource type):<utf-8>( E ) |
      ae4:(4 characters) | ae8:(8 characters) | ae12:(12 characters) |
      asid:<utf-8>

    <raw-term> :: '«' <term-role> <space> <term-uri>( '»' )
    <term>( R ) :: <raw-term>(with role R) | (any term in the current lexicon with role R)
    <term> :: <term>(any role in <term-role>)
    <property> ::  <term>(property)
    <constant> ::  <term>(constant)
    <command> ::  <term>(command)
    <parameter> ::  <term>(parameter)
    <variable> ::  <term>(variable)
    <resource> ::  <term>(resource)

    <program> :: [ <delimited-list>( <expression>, <sequence-delimiter> ) ]
    <sequence>( E ) :: <delimited-list-with-end>( <expression>, <sequence-delimiter>, E )
    <sequence> :: <sequence>( end )
    <expression> ::
      <definition> |
      <group> |
      <literal> |
      <reference> |
      <get-set> |
      <control> |
      <invocation> |
      <compound> |
      <require> |
      <specifier>

    <definition> ::
      <term-definition> | <variable-definition> | <function-definition>
    <term-definition> ::
      define <term-name> [ as <term> ] |
      defining <term-name> [ as <term> ] <sequence>
    <variable-definition> :: let ( <term-name>( be ) <expression> | <term-name> )
    <function-defintion> ::
      on ( <term-name>( ':' ) <delimited-list>( <parameter-spec>, ',' ) | <term-name> )
      <sequence>
    <parameter-spec> ::
      <lazy-term-name> [ <term-name>( '(' ) <expression> ')' | <term-name> ]

    <group> ::
      <grouped-expression> | <list> | <record>
    <grouped-expression> :: '(' <expression> ')'
    <list> :: '{' <delimited-list>( <expression>, ',' ) '}'
    <record> :: '{' <delimited-list>( <record-item>, ',' ) '}'
    <record-item> :: <expression> : <expression>

    <literal> ::
      <integer> | <real> |
      <string> | <multiline-string> | <interpreted-string> |
      <boolean> | <null>
    <integer> :: <digits>(such that their value in base-10 is in [-2^63,2^63))
    <real> :: [ <digits> ] . <digits> [ ( e | E ) [ + | - ] <digits> ]
    <string> ::
      ( ( " <utf-8>( " | <line-break> ) " ) | ( “ <utf-8>( ” | <line-break> ) ” ) )
    <multiline-string> ::
      ## <line-break> <utf-8>( ## ) |
      ##(' <utf-8>( ')' ) <utf-8>( '##(' (same delimiter) ')' )
    <interpreted-string> :: #! <utf-8>( <line-break> ) <utf-8>( <interpreted-string> | #! )
    <boolean> :: true | false
    <null> :: null

    <reference> ::
      <last-result> | <current-target> | <variable>
    <last-result> :: that
    <current-target> :: it

    <get-set> ::
      <get> | <set>
    <get> :: get <expression>
    <set> :: set <expression> to <expression>

    <control> ::
      <return> | <raise>
    <return> :: return <expression>
    <raise> :: raise <expression>

    <invocation> ::
      <command> [ <expression> ] [ <pump>( <parameter> <expression> ) ] |
      <unary-prefix-operator> <expression> |
      <expression> <binary-infix-operator> <expression>
    <unary-prefix-operator> ::
      (one of the operators in the table at Part 2 § Unary Prefix Operators)
    <binary-infix-operator> ::
      (one of the operators in the table at Part 2 § Binary Infix Operators)

    <compound> ::
      <conditional> | <conditional-loop> | <bounded-loop> | <iterative-loop> |
      <error-handler> |
      <with-module> | <with-target> |
      <anonymous-function>
    <conditional> ::
      if <expression> (
        then <expression> [ else ( <expression> | <sequence> ) ] |
        [ then ] <sequence> |
        [ then ] <sequence>( else ) ( <expression> | <sequence> )
      )
    <conditional-loop> :: repeat while <expression> <sequence>
    <bounded-loop> :: repeat <expression> times <sequence>
    <iterative-loop> :: repeat for <term-name> in <expression> <sequence>
    <error-handler> ::
      try ( <expression> handle | <sequence>( handle ) ) ( <expression> | <sequence> )
    <with-module> :: tell <expression> ( to <expression> | <sequence> )
    <with-target> :: target <expression> ( then <expression> | <sequence> )
    <anonymous-function> ::
      ( take <pump-with-end>( <term-name>( ',' ), <term-name>( do ) ) | do ) <sequence>

    <require> ::
      <require-library> | <require-system> | <require-app> | <require-applescript>
    <require-library> :: use library <term-name>
    <require-system> :: use system [ version ( v | V ) <digits> . <digits> [ . <digits> ] ]
    <require-app> :: use app [ id ] <term-name>
    <require-applescript> :: AppleScript <term-name> at <string>

    <specifier> :: ( <element-specifier> | <property> ) [ of <expression> ]
    <element-specifier> ::
      ( <simple-specifier> | <name-specifier> | <index-specifier> |
        <id-specifier> |
        <absolute-positioning-specifier> |
        <relative-positioning-specifier> |
        <all-specifier> |
        <range-specifier> | <filter-specifier>
      )
    <simple-specifier> :: <type> <expression>
    <name-specifier> :: <type> named <expression>
    <index-specifier> :: <type> index <expression>
    <id-specifier> :: <type> id <expression>
    <absolute-positioning-specifier> ::  first | middle | last | some ) <type>
    <relative-positioning-specifier> :: <type> ( before | after ) <expression>
    <all-specifier> :: ( all | every ) <type>
    <range-specifier> :: <type> <expression> ( thru | through ) <expression>
    <filter-specifier> :: <type> ( where | whose ) <expression>
