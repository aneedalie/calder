import Expression from './expressions/expression';
import InterfaceVariable from './interfacevariable';
import Set from './util/set';
import Statement from './statement';
import Type from './type';
import Kind from './kind';

export default class Block implements Expression {
    private statements: Statement[];

    // TODO: add local variables
    constructor(statements: Statement[] = []) {
        this.statements = statements;
    }

    public isEmpty(): boolean {
        return (this.statements.length == 0);
    }

    public returnType(): Type {
        return new Type(Kind.Void);
    }

    public source(): string {
        return '{' +
            this.statements
                .map(statement => statement.source())
                .join('\n') +
            '}';
    }
}
