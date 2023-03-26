// Generated from Query.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from "antlr4";
import QueryListener from "./QueryListener.js";

const serializedATN = [
  "\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
  "\u5964\u0003\f<\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
  "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
  "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
  "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0018\n\u0003\u0003",
  "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
  "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007",
  "\u0003&\n\u0003\f\u0003\u000e\u0003)\u000b\u0003\u0003\u0004\u0003\u0004",
  "\u0003\u0004\u0007\u0004.\n\u0004\f\u0004\u000e\u00041\u000b\u0004\u0003",
  "\u0005\u0003\u0005\u0003\u0005\u0005\u00056\n\u0005\u0003\u0005\u0003",
  "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0002\u0003\u0004\u0007\u0002",
  "\u0004\u0006\b\n\u0002\u0003\u0003\u0002\n\u000b\u0002?\u0002\f\u0003",
  "\u0002\u0002\u0002\u0004\u0017\u0003\u0002\u0002\u0002\u0006*\u0003",
  "\u0002\u0002\u0002\b2\u0003\u0002\u0002\u0002\n9\u0003\u0002\u0002\u0002",
  "\f\r\u0005\u0004\u0003\u0002\r\u000e\u0007\u0002\u0002\u0003\u000e\u0003",
  "\u0003\u0002\u0002\u0002\u000f\u0010\b\u0003\u0001\u0002\u0010\u0011",
  "\u0007\u0003\u0002\u0002\u0011\u0012\u0005\u0004\u0003\u0002\u0012\u0013",
  "\u0007\u0004\u0002\u0002\u0013\u0018\u0003\u0002\u0002\u0002\u0014\u0018",
  "\u0005\b\u0005\u0002\u0015\u0018\u0007\u000b\u0002\u0002\u0016\u0018",
  "\u0007\n\u0002\u0002\u0017\u000f\u0003\u0002\u0002\u0002\u0017\u0014",
  "\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002\u0002\u0002\u0017\u0016",
  "\u0003\u0002\u0002\u0002\u0018'\u0003\u0002\u0002\u0002\u0019\u001a",
  "\f\t\u0002\u0002\u001a\u001b\u0007\u0005\u0002\u0002\u001b&\u0005\u0004",
  "\u0003\n\u001c\u001d\f\b\u0002\u0002\u001d\u001e\u0007\u0006\u0002\u0002",
  "\u001e&\u0005\u0004\u0003\t\u001f \f\u0007\u0002\u0002 !\u0007\u0007",
  '\u0002\u0002!&\u0005\u0004\u0003\b"#\f\u0006\u0002\u0002#$\u0007\b',
  "\u0002\u0002$&\u0005\u0004\u0003\u0007%\u0019\u0003\u0002\u0002\u0002",
  '%\u001c\u0003\u0002\u0002\u0002%\u001f\u0003\u0002\u0002\u0002%"\u0003',
  "\u0002\u0002\u0002&)\u0003\u0002\u0002\u0002'%\u0003\u0002\u0002\u0002",
  "'(\u0003\u0002\u0002\u0002(\u0005\u0003\u0002\u0002\u0002)'\u0003",
  "\u0002\u0002\u0002*/\u0005\u0004\u0003\u0002+,\u0007\t\u0002\u0002,",
  ".\u0005\u0004\u0003\u0002-+\u0003\u0002\u0002\u0002.1\u0003\u0002\u0002",
  "\u0002/-\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u00020\u0007\u0003",
  "\u0002\u0002\u00021/\u0003\u0002\u0002\u000223\u0007\u000b\u0002\u0002",
  "35\u0007\u0003\u0002\u000246\u0005\u0006\u0004\u000254\u0003\u0002\u0002",
  "\u000256\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u000278\u0007\u0004",
  "\u0002\u00028\t\u0003\u0002\u0002\u00029:\t\u0002\u0002\u0002:\u000b",
  "\u0003\u0002\u0002\u0002\u0007\u0017%'/5",
].join("");

const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map((ds, index) => new antlr4.dfa.DFA(ds, index));

const sharedContextCache = new antlr4.PredictionContextCache();

export default class QueryParser extends antlr4.Parser {
  static grammarFileName = "Query.g4";
  static literalNames = [null, "'('", "')'", "'*'", "'/'", "'+'", "'-'", "','"];
  static symbolicNames = [null, null, null, null, null, null, null, null, "Number", "Word", "SPACE"];
  static ruleNames = ["query", "expression", "arguments", "functionCall", "value"];

  constructor(input) {
    super(input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = QueryParser.ruleNames;
    this.literalNames = QueryParser.literalNames;
    this.symbolicNames = QueryParser.symbolicNames;
  }

  get atn() {
    return atn;
  }

  sempred(localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
      case 1:
        return this.expression_sempred(localctx, predIndex);
      default:
        throw "No predicate with index:" + ruleIndex;
    }
  }

  expression_sempred(localctx, predIndex) {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 7);
      case 1:
        return this.precpred(this._ctx, 6);
      case 2:
        return this.precpred(this._ctx, 5);
      case 3:
        return this.precpred(this._ctx, 4);
      default:
        throw "No predicate with index:" + predIndex;
    }
  }

  query() {
    let localctx = new QueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, QueryParser.RULE_query);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 10;
      this.expression(0);
      this.state = 11;
      this.match(QueryParser.EOF);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  expression(_p) {
    if (_p === undefined) {
      _p = 0;
    }
    const _parentctx = this._ctx;
    const _parentState = this.state;
    let localctx = new ExpressionContext(this, this._ctx, _parentState);
    let _prevctx = localctx;
    const _startState = 2;
    this.enterRecursionRule(localctx, 2, QueryParser.RULE_expression, _p);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 21;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 0, this._ctx);
      switch (la_) {
        case 1:
          localctx = new EmbedExpressionContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;

          this.state = 14;
          this.match(QueryParser.T__0);
          this.state = 15;
          this.expression(0);
          this.state = 16;
          this.match(QueryParser.T__1);
          break;

        case 2:
          localctx = new FunctionExpressionContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 18;
          this.functionCall();
          break;

        case 3:
          localctx = new PushExpressionContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 19;
          this.match(QueryParser.Word);
          break;

        case 4:
          localctx = new PushExpressionContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 20;
          this.match(QueryParser.Number);
          break;
      }
      this._ctx.stop = this._input.LT(-1);
      this.state = 37;
      this._errHandler.sync(this);
      let _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
      while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          if (this._parseListeners !== null) {
            this.triggerExitRuleEvent();
          }
          _prevctx = localctx;
          this.state = 35;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 1, this._ctx);
          switch (la_) {
            case 1:
              localctx = new JoinExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, QueryParser.RULE_expression);
              this.state = 23;
              if (!this.precpred(this._ctx, 7)) {
                throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
              }
              this.state = 24;
              localctx.operation = this.match(QueryParser.T__2);
              this.state = 25;
              this.expression(8);
              break;

            case 2:
              localctx = new JoinExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, QueryParser.RULE_expression);
              this.state = 26;
              if (!this.precpred(this._ctx, 6)) {
                throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
              }
              this.state = 27;
              localctx.operation = this.match(QueryParser.T__3);
              this.state = 28;
              this.expression(7);
              break;

            case 3:
              localctx = new JoinExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, QueryParser.RULE_expression);
              this.state = 29;
              if (!this.precpred(this._ctx, 5)) {
                throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
              }
              this.state = 30;
              localctx.operation = this.match(QueryParser.T__4);
              this.state = 31;
              this.expression(6);
              break;

            case 4:
              localctx = new JoinExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, QueryParser.RULE_expression);
              this.state = 32;
              if (!this.precpred(this._ctx, 4)) {
                throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
              }
              this.state = 33;
              localctx.operation = this.match(QueryParser.T__5);
              this.state = 34;
              this.expression(5);
              break;
          }
        }
        this.state = 39;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
      }
    } catch (error) {
      if (error instanceof antlr4.error.RecognitionException) {
        localctx.exception = error;
        this._errHandler.reportError(this, error);
        this._errHandler.recover(this, error);
      } else {
        throw error;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }

  arguments() {
    let localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, QueryParser.RULE_arguments);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 40;
      this.expression(0);
      this.state = 45;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === QueryParser.T__6) {
        this.state = 41;
        this.match(QueryParser.T__6);
        this.state = 42;
        this.expression(0);
        this.state = 47;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  functionCall() {
    let localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, QueryParser.RULE_functionCall);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 48;
      this.match(QueryParser.Word);
      this.state = 49;
      this.match(QueryParser.T__0);
      this.state = 51;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (
        (_la & ~0x1f) == 0 &&
        ((1 << _la) & ((1 << QueryParser.T__0) | (1 << QueryParser.Number) | (1 << QueryParser.Word))) !== 0
      ) {
        this.state = 50;
        this.arguments();
      }

      this.state = 53;
      this.match(QueryParser.T__1);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  value() {
    let localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, QueryParser.RULE_value);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 55;
      _la = this._input.LA(1);
      if (!(_la === QueryParser.Number || _la === QueryParser.Word)) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
}

QueryParser.EOF = antlr4.Token.EOF;
QueryParser.T__0 = 1;
QueryParser.T__1 = 2;
QueryParser.T__2 = 3;
QueryParser.T__3 = 4;
QueryParser.T__4 = 5;
QueryParser.T__5 = 6;
QueryParser.T__6 = 7;
QueryParser.Number = 8;
QueryParser.Word = 9;
QueryParser.SPACE = 10;

QueryParser.RULE_query = 0;
QueryParser.RULE_expression = 1;
QueryParser.RULE_arguments = 2;
QueryParser.RULE_functionCall = 3;
QueryParser.RULE_value = 4;

class QueryContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_query;
  }

  expression() {
    return this.getTypedRuleContext(ExpressionContext, 0);
  }

  EOF() {
    return this.getToken(QueryParser.EOF, 0);
  }

  enterRule(listener) {
    if (listener instanceof QueryListener) {
      listener.enterQuery(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof QueryListener) {
      listener.exitQuery(this);
    }
  }
}

class ExpressionContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_expression;
  }

  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}

class EmbedExpressionContext extends ExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  expression() {
    return this.getTypedRuleContext(ExpressionContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof QueryListener) {
      listener.enterEmbedExpression(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof QueryListener) {
      listener.exitEmbedExpression(this);
    }
  }
}

QueryParser.EmbedExpressionContext = EmbedExpressionContext;

class JoinExpressionContext extends ExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    this.operation = null; // Token;
    super.copyFrom(ctx);
  }

  expression = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ExpressionContext);
    } else {
      return this.getTypedRuleContext(ExpressionContext, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof QueryListener) {
      listener.enterJoinExpression(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof QueryListener) {
      listener.exitJoinExpression(this);
    }
  }
}

QueryParser.JoinExpressionContext = JoinExpressionContext;

class FunctionExpressionContext extends ExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  functionCall() {
    return this.getTypedRuleContext(FunctionCallContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof QueryListener) {
      listener.enterFunctionExpression(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof QueryListener) {
      listener.exitFunctionExpression(this);
    }
  }
}

QueryParser.FunctionExpressionContext = FunctionExpressionContext;

class PushExpressionContext extends ExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  Word() {
    return this.getToken(QueryParser.Word, 0);
  }

  Number() {
    return this.getToken(QueryParser.Number, 0);
  }

  enterRule(listener) {
    if (listener instanceof QueryListener) {
      listener.enterPushExpression(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof QueryListener) {
      listener.exitPushExpression(this);
    }
  }
}

QueryParser.PushExpressionContext = PushExpressionContext;

class ArgumentsContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_arguments;
  }

  expression = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ExpressionContext);
    } else {
      return this.getTypedRuleContext(ExpressionContext, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof QueryListener) {
      listener.enterArguments(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof QueryListener) {
      listener.exitArguments(this);
    }
  }
}

class FunctionCallContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_functionCall;
  }

  Word() {
    return this.getToken(QueryParser.Word, 0);
  }

  arguments() {
    return this.getTypedRuleContext(ArgumentsContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof QueryListener) {
      listener.enterFunctionCall(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof QueryListener) {
      listener.exitFunctionCall(this);
    }
  }
}

class ValueContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_value;
  }

  Number() {
    return this.getToken(QueryParser.Number, 0);
  }

  Word() {
    return this.getToken(QueryParser.Word, 0);
  }

  enterRule(listener) {
    if (listener instanceof QueryListener) {
      listener.enterValue(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof QueryListener) {
      listener.exitValue(this);
    }
  }
}

QueryParser.QueryContext = QueryContext;
QueryParser.ExpressionContext = ExpressionContext;
QueryParser.ArgumentsContext = ArgumentsContext;
QueryParser.FunctionCallContext = FunctionCallContext;
QueryParser.ValueContext = ValueContext;
