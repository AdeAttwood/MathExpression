grammar Query;

query: expression EOF;

expression
 : value operator value           #joinExpression
 | expression operator expression #joinExpression
 | expression operator value      #joinExpression
 | '(' expression ')'             #embedExpression
 ;

value
 : Number
 | Word
 ;

operator
 : Plus
 | Minus
 ;


Plus: '+';
Minus: '-';

Number: ( [0-9]* '.' )? [0-9]+;
Word:   ( [a-zA-Z] )+;

SPACE: [ \t\r\n]+ -> skip;
