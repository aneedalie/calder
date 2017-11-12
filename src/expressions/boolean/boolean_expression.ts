import Expression from '../expression';
import InterfaceVariable from '../../interface';
import Reference from '../../reference';
import Set from '../../util/set';
import Type from '../../type';

export default abstract class BooleanExpression implements Expression {
    protected lhs: Expression;
    protected rhs: Expression;

    constructor(lhs: Expression, rhs: Expression) {
        if (lhs.returnType() != rhs.returnType())
            throw new TypeError("Left-hand side and right-hand side do not match types.");

        this.lhs = lhs;
        this.rhs = rhs;
    }

    public dependencies(): Set<InterfaceVariable> {
        return this.rhs.dependencies().union(this.lhs.dependencies());
    }

    public abstract source(): string;

    public returnType(): Type {
        return Type.Bool;
    }
}