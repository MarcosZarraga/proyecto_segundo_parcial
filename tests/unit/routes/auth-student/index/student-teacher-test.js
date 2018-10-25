import { moduleFor, test } from 'ember-qunit';

moduleFor('route:/auth-student/index/student-teacher', 'Unit | Route | /auth student/index/student teacher', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
