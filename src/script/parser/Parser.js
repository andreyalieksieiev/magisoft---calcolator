import { isNumber } from '../utils';

// explanation
// checkout  http://jorendorff.github.io/calc/calculator-parser.js

function Parser() {
    let tokens = [];
    let position = 0;
    return {
        peek: () => {
            return tokens[position];
        },
        consume: () => {
            position++;
        },
        tokenizeExpression: function(str) {
            let res = [];
            let regexp = /([0-9]+|\S)/g;
        
            let token;
        
            while (token = regexp.exec(str)) {
                res.push(token[1]);
            }
            return res;
        },
        parsePrimaryExpr: function() {
            var t = this.peek();
            if (isNumber(t)) {
                this.consume();
                return { type: "number", value: t };
            } else if (t === "(") {
                this.consume();
                var expr = this.parseExpression();
                if (this.peek() !== ")")
                    throw new SyntaxError("Expected )");
                    this.consume();
                return expr;
            } else {
                throw new SyntaxError("Expected a number or parentheses");
                
            }
        },
        parseMulExpr: function() {
            var expr = this.parsePrimaryExpr();
            var t = this.peek();
            while (t === "*" || t === "/") {
                this.consume();
                var rhs = this.parsePrimaryExpr();
                expr = { type: t, left: expr, right: rhs };
                t = this.peek();
            }
            return expr;
        },
        parseExpression: function() {
            var expr = this.parseMulExpr();
            var t = this.peek();
            while (t === "+" || t === "-") {
                this.consume();
                var rhs = this.parseMulExpr();
                expr = { type: t, left: expr, right: rhs };
                t = this.peek();
            }
            return expr;
        },
        parse: function(str) {
            tokens = this.tokenizeExpression(str);
            let testArr = []
            tokens.map((el, i) => { 
                if (el === '.') {
                    testArr.push(tokens[i-1] + '.' + tokens[i+1])
                    testArr.splice(i-1, 1)
                    tokens.splice(i+1, 1)
                } else {
                    testArr.push(el)
                }
            })
            tokens = testArr;
            return this.parseExpression();
        },
        resetPosition: () => {
            position = 0;
        },
    }

}

export default Parser;