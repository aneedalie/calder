import Expression from '../expression';
import InterfaceVariable from '../../interfacevariable';
import Reference from '../../reference';
import Set from '../../util/set';
import Type from '../../type';

export default abstract class AssignmentExpression implements Expression {
    protected lhs: Reference;
    protected rhs: Expression;

    constructor(lhs: Reference, rhs: Expression) {
        //if (!lhs.returnType().checkEquals(rhs.returnType()))
            //throw new TypeError("Left-hand side and right-hand side do not match types.");

        this.lhs = lhs;
        this.rhs = rhs;
    }

    public abstract source(): string;

    public returnType(): Type {
        return this.lhs.returnType();
    }
}
