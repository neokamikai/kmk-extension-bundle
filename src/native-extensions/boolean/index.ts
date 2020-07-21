import safeSqlArg from '../../helpers/transform/safe-sql-arg';
Object.assign(Boolean.prototype, {
	safeSqlArg: function () { return safeSqlArg(this ? 1 : 0); },
});
export { };