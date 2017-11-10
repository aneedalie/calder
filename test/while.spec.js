import { expect } from 'chai';
import * as cgl from '../src/calder';

describe('While', () => {
    describe('dependencies', () => {
        it('includes both the then and else blocks', () => {
            const conditionVariable = new cgl.Variable(cgl.Qualifier.In, cgl.Type.Bool, 'condition');
            const someVariable1 = new cgl.Variable(cgl.Qualifier.In, cgl.Type.Bool, 'someVariable1');
            const whileStmt = new cgl.While(
                new cgl.Reference(conditionVariable),
                new cgl.Block([
                    new cgl.Statement(
                        new cgl.Assignment(new cgl.Reference(conditionVariable), new cgl.Reference(someVariable1))
                    )
                ])
            );

            const dependencyNames = [...whileStmt.dependencies()]
                .map(dependency => dependency.name)
                .sort();
            expect(dependencyNames).to.eql(['condition', 'someVariable1']);
        });
    });

    describe('source', () => {
        it('is well formed', () => {
            const a = new cgl.Variable(cgl.Qualifier.In, cgl.Type.Bool, 'a');
            const b = new cgl.Variable(cgl.Qualifier.In, cgl.Type.Bool, 'b');
            const whileStmt = new cgl.While(
                new cgl.Reference(a),
                new cgl.Block([
                    new cgl.Statement(
                        new cgl.Assignment(new cgl.Reference(a), new cgl.Reference(b))
                    )
                ])
            );

            expect(whileStmt.source()).to.equalIgnoreSpaces('while (a) { a=b; }');
        });
    })
});
