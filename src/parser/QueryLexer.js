// Generated from Query.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from "antlr4";

const serializedATN = [
  "\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
  "\u5964\u0002\t3\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
  "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
  "\u0007\u0004\b\t\b\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
  "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0007\u0006\u001b",
  "\n\u0006\f\u0006\u000e\u0006\u001e\u000b\u0006\u0003\u0006\u0005\u0006",
  "!\n\u0006\u0003\u0006\u0006\u0006$\n\u0006\r\u0006\u000e\u0006%\u0003",
  "\u0007\u0006\u0007)\n\u0007\r\u0007\u000e\u0007*\u0003\b\u0006\b.\n",
  "\b\r\b\u000e\b/\u0003\b\u0003\b\u0002\u0002\t\u0003\u0003\u0005\u0004",
  "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0003\u0002\u0005\u0003",
  '\u00022;\u0004\u0002C\\c|\u0005\u0002\u000b\f\u000f\u000f""\u0002',
  "7\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
  "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
  "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
  "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0003\u0011\u0003\u0002\u0002",
  "\u0002\u0005\u0013\u0003\u0002\u0002\u0002\u0007\u0015\u0003\u0002\u0002",
  "\u0002\t\u0017\u0003\u0002\u0002\u0002\u000b \u0003\u0002\u0002\u0002",
  "\r(\u0003\u0002\u0002\u0002\u000f-\u0003\u0002\u0002\u0002\u0011\u0012",
  "\u0007*\u0002\u0002\u0012\u0004\u0003\u0002\u0002\u0002\u0013\u0014",
  "\u0007+\u0002\u0002\u0014\u0006\u0003\u0002\u0002\u0002\u0015\u0016",
  "\u0007-\u0002\u0002\u0016\b\u0003\u0002\u0002\u0002\u0017\u0018\u0007",
  "/\u0002\u0002\u0018\n\u0003\u0002\u0002\u0002\u0019\u001b\t\u0002\u0002",
  "\u0002\u001a\u0019\u0003\u0002\u0002\u0002\u001b\u001e\u0003\u0002\u0002",
  "\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002",
  "\u0002\u001d\u001f\u0003\u0002\u0002\u0002\u001e\u001c\u0003\u0002\u0002",
  "\u0002\u001f!\u00070\u0002\u0002 \u001c\u0003\u0002\u0002\u0002 !\u0003",
  '\u0002\u0002\u0002!#\u0003\u0002\u0002\u0002"$\t\u0002\u0002\u0002',
  '#"\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%#\u0003\u0002',
  "\u0002\u0002%&\u0003\u0002\u0002\u0002&\f\u0003\u0002\u0002\u0002'",
  ")\t\u0003\u0002\u0002('\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002",
  "\u0002*(\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002+\u000e\u0003",
  "\u0002\u0002\u0002,.\t\u0004\u0002\u0002-,\u0003\u0002\u0002\u0002.",
  "/\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002",
  "\u000201\u0003\u0002\u0002\u000212\b\b\u0002\u00022\u0010\u0003\u0002",
  "\u0002\u0002\b\u0002\u001c %*/\u0003\b\u0002\u0002",
].join("");

const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map((ds, index) => new antlr4.dfa.DFA(ds, index));

export default class QueryLexer extends antlr4.Lexer {
  static grammarFileName = "Query.g4";
  static channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];
  static modeNames = ["DEFAULT_MODE"];
  static literalNames = [null, "'('", "')'", "'+'", "'-'"];
  static symbolicNames = [null, null, null, "Plus", "Minus", "Number", "Word", "SPACE"];
  static ruleNames = ["T__0", "T__1", "Plus", "Minus", "Number", "Word", "SPACE"];

  constructor(input) {
    super(input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
  }

  get atn() {
    return atn;
  }
}

QueryLexer.EOF = antlr4.Token.EOF;
QueryLexer.T__0 = 1;
QueryLexer.T__1 = 2;
QueryLexer.Plus = 3;
QueryLexer.Minus = 4;
QueryLexer.Number = 5;
QueryLexer.Word = 6;
QueryLexer.SPACE = 7;
