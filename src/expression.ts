import antlr4 from "antlr4";
import ErrorListener from "antlr4/src/antlr4/error/ErrorListener";
import QueryListener from "./parser/QueryListener";
import QueryLexer from "./parser/QueryLexer";
import QueryParser from "./parser/QueryParser";
import ErrorNode from "antlr4/tree/ErrorNode";

const operatorMap: any = {
  "+": (left: number, right: number) => left + right,
  "-": (left: number, right: number) => left - right,
};

class MyErrorListener extends ErrorListener {
  public error?: string;

  constructor() {
    super();
  }

  syntaxError(recognizer, offendingSymbol, line, column, message, e) {
    this.error = message;
  }
}

class Listener extends QueryListener {
  public stack: number[] = [];

  public getVariable: any = () => 0;

  visitErrorNode(node: ErrorNode) {
    console.log({ node });
  }

  enterValue(ctx: typeof QueryParser.ValueContext) {
    const number = ctx.Number();
    if (number) {
      return this.stack.push(parseFloat(number.getText()));
    }

    this.stack.push(this.getVariable(ctx.Word().getText()));
  }

  exitJoinExpression(ctx: typeof QueryParser.JoinExpressionContext) {
    const callback = operatorMap[ctx.operator().getText()];
    if (typeof callback === "undefined") {
      return;
    }

    const right = this.stack.pop();
    const left = this.stack.pop();
    this.stack.push(callback(left, right));
  }
}

export const evaluate = (expression: string, getVariable: (variable: string) => number) => {
  const errorListener = new MyErrorListener();

  const chars = new antlr4.InputStream(expression);
  const lexer = new QueryLexer(chars);
  lexer.removeErrorListeners();
  lexer.addErrorListener(errorListener);

  const tokens = new antlr4.CommonTokenStream(lexer);
  if (errorListener.error) {
    return { result: "?", erorr: errorListener.error };
  }

  const parser = new QueryParser(tokens);
  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);

  const tree = parser.query();
  if (errorListener.error) {
    return { result: "?", erorr: errorListener.error };
  }

  const listener = new Listener();
  listener.getVariable = getVariable;
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

  if (listener.stack.length !== 1) {
    return { result: "?", error: "There was an unexpected error with the stack" };
  }

  return { result: listener.stack.pop(), error: null };
};
