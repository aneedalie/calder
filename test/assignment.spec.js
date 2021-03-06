import { expect } from 'chai';
import * as cgl from '../src/calder';

describe('Assignment', () => {
    const lhs = new cgl.Reference(new cgl.InterfaceVariable(cgl.Qualifier.In, new cgl.VariableSource(new cgl.Type(cgl.Kind.Vec4), 'lhs')));
    const rhs = new cgl.Reference(new cgl.InterfaceVariable(cgl.Qualifier.In, new cgl.VariableSource(new cgl.Type(cgl.Kind.Vec4), 'rhs')));

    describe('source', () => {
        it ('equal assignment', () => {
            const assignment = new cgl.EqualAssignment(lhs, rhs);
            expect(assignment.source()).to.equalIgnoreSpaces('lhs = rhs');
        });

        it ('plus equal assignment', () => {
            const assignment = new cgl.PlusEqualAssignment(lhs, rhs);
            expect(assignment.source()).to.equalIgnoreSpaces('lhs += rhs');
        });

        it ('minus equal assignment', () => {
            const assignment = new cgl.MinusEqualAssignment(lhs, rhs);
            expect(assignment.source()).to.equalIgnoreSpaces('lhs -= rhs');
        });

        it ('times equal assignment', () => {
            const assignment = new cgl.TimesEqualAssignment(lhs, rhs);
            expect(assignment.source()).to.equalIgnoreSpaces('lhs *= rhs');
        });

        it ('divide equal assignment', () => {
            const assignment = new cgl.DivideEqualAssignment(lhs, rhs);
            expect(assignment.source()).to.equalIgnoreSpaces('lhs /= rhs');
        });
    });
});
