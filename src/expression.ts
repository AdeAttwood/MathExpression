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

  enterPushExpression(ctx) {
    const wordNode = ctx.Word();
    const numberNode = ctx.Number();

    console.log({ ctx });

    if (wordNode) {
      this.stack.push(this.getVariable(wordNode.getText()));
    }

    if (numberNode) {
      this.stack.push(parseFloat(numberNode.getText()));
    }
  }

  exitJoinExpression(ctx: typeof QueryParser.JoinExpressionContext) {
    const callback = operatorMap[ctx.operation.text];
    if (typeof callback === "undefined") {
      return;
    }

    const right = this.stack.pop();
    const left = this.stack.pop();
    this.stack.push(callback(left, right));
  }

  exitFunctionExpression(ctx: typeof QueryParser.FunctionExpressionContext) {
    const functionContext = ctx.functionCall();
    const functionName = functionContext.Word().getText();

    const args: any[] = [];
    // This will be empty if there are no arguments defined in function
    const argumentsCount = functionContext?.arguments()?.expression().length || 0;
    for (let i = 0; i < argumentsCount; i++) {
      args.unshift(this.stack.pop());
    }

    switch (functionName) {
      case "SUM":
        this.stack.push(args.reduce((current, item) => current + item, 0));
        break;
      default:
        throw new Error("Undefined function " + functionName);
    }
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
