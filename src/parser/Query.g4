grammar Query;

query: expression EOF;

expression
 : '(' expression ')'                  #embedExpression
 | expression operation='*' expression #joinExpression
 | expression operation='/' expression #joinExpression
 | expression operation='+' expression #joinExpression
 | expression operation='-' expression #joinExpression
 | functionCall                        #functionExpression
 | Word                                #pushExpression
 | Number                              #pushExpression
 ;

arguments
 : expression ( ',' expression )*
 ;

functionCall
 : Word '(' arguments? ')'
 ;

value
 : Number
 | Word
 ;


Number: ( [0-9]* '.' )? [0-9]+;
Word:   ( [a-zA-Z] )+;

SPACE: [ \t\r\n]+ -> skip;
