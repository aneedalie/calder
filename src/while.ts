import Variable from './variable';
import Expression from './expression';
import Block from './block';
import Type from './type';
import Set from './util/set';

export default class While implements Expression {
    protected condition: Expression;
    protected loopBlock: Block;

    constructor(condition: Expression, loopBlock: Block) {
        this.condition = condition;
        this.loopBlock = loopBlock;
    }

    public returnType(): Type {
        return Type.Void;
    }

    public dependencies(): Set<Variable> {
        return this.condition.dependencies().union(this.loopBlock.dependencies());
    }

    public source(): string {
        return `while (${this.condition.source()})` +
            this.loopBlock.source();
    }
}
